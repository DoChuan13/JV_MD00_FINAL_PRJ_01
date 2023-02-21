import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as saga from "../../services/redux/actions/sagaAction";
import * as picture from "../../assets/images/images";
import { formatCurrency } from "../../utils/valueUtils/formatValue";
import { languageCode } from "../../config/valueConfig";
import { currencyCode } from "../../config/valueConfig";
import {
  FaHeart,
  // FaRegHeart
} from "react-icons/fa";
import { checkLoginStatus } from "../../utils/functions/commonFunctions";
import { usersState } from "../../services/redux/selectors/selectors";
import * as routerLink from "../../config/routersConfig";

const checkValidUser = (usState) => {
  let loginStatus = checkLoginStatus();
  let flag = false;
  usState.forEach((user) => {
    if (
      loginStatus.typeUser === "user" &&
      loginStatus.email === user.email &&
      user.statusUser
    ) {
      flag = true;
    }
  });
  return flag;
};

function ProductItem(props) {
  let { product } = props;
  let navigate = useNavigate();
  let usState = useSelector(usersState);
  let dispatch = useDispatch();

  let currency = formatCurrency(
    product["productPrice"],
    languageCode,
    currencyCode
  );

  const addToCart = (product) => {
    let checkValid = checkValidUser(usState);
    if (!checkValid) {
      alert("Vui long dang nhap de mua hang");
      navigate(routerLink.login.path);
      return;
    }

    dispatch(saga.add_PrdCartAct(product));
  };

  const buyProduct = () => {
    addToCart(product);
    navigate(routerLink.cart.path);
  };

  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="product_box">
          <h4 className="bursh_text">{product["productName"]}</h4>
          <p className="lorem_text">{product["productTitle"]}g</p>
          <div style={{ position: "relative" }}>
            <FaHeart
              className="product_heart"
              // size={100}
            />
            <img
              className="image_1"
              src={picture[product.productImage]}
              alt={product.productImage}
            />
          </div>
          <div className="btn_main">
            <div className="buy_bt">
              <ul>
                <li className="active">
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Thêm vào giỏ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      buyProduct(product);
                    }}
                  >
                    Mua ngay
                  </button>
                </li>
              </ul>
            </div>
            <h3 className="price_text">Giá: {currency}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
