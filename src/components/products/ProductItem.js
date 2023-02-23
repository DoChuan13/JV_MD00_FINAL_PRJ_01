import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as saga from "../../services/redux/actions/sagaAction";
import * as picture from "../../assets/images/images";
import { formatCurrency } from "../../utils/valueUtils/formatValue";
import { languageCode } from "../../config/valueConfig";
import { currencyCode } from "../../config/valueConfig";
import { FaHeart } from "react-icons/fa";
import { checkLoginStatus } from "../../utils/functions/commonFunctions";
import { usersState } from "../../services/redux/selectors/selectors";
import * as routerLink from "../../config/routersConfig";
import { Success, Warning } from "../toast/SideToastify";

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
  let dispatch = useDispatch();
  let usState = useSelector(usersState);
  let checkValid = checkValidUser(usState);
  let loginStatus = checkLoginStatus();

  let currency = formatCurrency(
    product["productPrice"],
    languageCode,
    currencyCode
  );

  const addToCart = (product) => {
    if (!checkValid) {
      Warning("Vui lòng đăng nhập bằng tài khoản người dùng");
      setTimeout(() => {
        navigate(routerLink.login.path);
      }, 1500);
      return;
    }
    Success("Thêm vào giỏ hàng thành công");
    dispatch(saga.add_PrdCartAct(product));
  };

  const buyProduct = (product) => {
    if (!checkValid) {
      Warning("Vui lòng đăng nhập bằng tài khoản người dùng");
      setTimeout(() => {
        navigate(routerLink.login.path);
      }, 1500);
      return;
    }
    addToCart(product);
    navigate(routerLink.cart.path);
  };

  const addRemoveFavorite = (product, e) => {
    dispatch(saga.add_PrdFavoriteAct(product));
    e.preventDefault();
  };

  let currentUser = usState.find((user) => {
    return user.id === loginStatus.id;
  });
  let formatHeart = { color: "rgba(192, 98, 255, 0.7)" };
  let flagFormat = false;
  if (checkValid) {
    let favoriteList = currentUser.favorite;
    for (let i = 0; i < favoriteList.length; i++) {
      if (favoriteList[i].id === product.id) {
        flagFormat = true;
        break;
      }
    }
  }

  if (flagFormat) {
    formatHeart = {
      color: "rgba(254, 152, 169,0.7)",
    };
  } else {
    formatHeart = {
      color: "rgba(40, 54, 255,0.7)",
    };
  }

  // console.log("Style", formatHeart, checkValid);

  return (
    <>
      <div className="col-lg-3 col-sm-6">
        <div className="product_box">
          <h4 className="bursh_text">{product["productName"]}</h4>
          <p className="lorem_text">{product["productTitle"]}g</p>
          <div style={{ position: "relative" }}>
            <FaHeart
              className="product_heart"
              style={formatHeart}
              onClick={(e) => {
                addRemoveFavorite(product, e);
              }}
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
