import React from "react";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  formatCurrency,
  formatNumber,
} from "../../utils/valueUtils/formatValue";
import { languageCode } from "../../config/valueConfig";
import { currencyCode } from "../../config/valueConfig";
import * as picture from "../../assets/images/images";
import * as selector from "../../services/redux/selectors/selectors";
import * as notifyAction from "../../services/redux/actions/notifyActions";
import * as saga from "../../services/redux/actions/sagaAction";
import * as Ai from "react-icons/ai";

function CartItem(props) {
  let prState = useSelector(selector.productsState);
  let dispatch = useDispatch();

  let { cart } = props;
  let { stt } = props;
  let item = prState.find((product) => {
    return cart.id === product.id;
  });

  let { buyQuantity } = cart;
  let productPrice, productName, productImage;
  if (item !== undefined) {
    productPrice = item.productPrice;
    productName = item.productName;
    productImage = picture[item.productImage];
  } else {
    productPrice = cart.productPrice;
    productName = cart.productName;
    productImage = picture[cart.productImage];
  }
  let subTotal = buyQuantity * productPrice;

  const deleteItem = () => {
    let deleteItem = item ? item : cart;
    console.log(deleteItem);
    dispatch(notifyAction.deleteCartNoti(deleteItem));
  };

  const changeQuantity = (action, item) => {
    let curQuantity = item.buyQuantity;
    if (curQuantity === 1 && action === "minus") {
      dispatch(notifyAction.deleteCartNoti(item));
      return;
    }
    dispatch(saga.edit_PrdCartAct({ action: action, product: item }));
  };

  let existItem = item ? (
    <>
      <td className="cart_table_detail">
        {formatCurrency(productPrice, languageCode, currencyCode)}
      </td>
      <td className="cart_table_detail">
        <span>
          <Ai.AiOutlineMinusCircle
            size={30}
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => {
              changeQuantity("minus", cart);
            }}
          />
          {"  "}
        </span>
        <span style={{ display: "inline-block", width: "30px" }}>
          {formatNumber(buyQuantity, languageCode)}
        </span>
        <span>
          {"  "}
          <Ai.AiOutlinePlusCircle
            size={30}
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => {
              changeQuantity("plus", cart);
            }}
          />
        </span>
      </td>
      <td className="cart_table_detail">
        {formatCurrency(subTotal, languageCode, currencyCode)}
      </td>
    </>
  ) : (
    <>
      <td colSpan={3} className="cart_table_detail">
        {"Sản phẩm không còn tồn tại"}
      </td>
    </>
  );
  return (
    <>
      <tr>
        <td>{stt}</td>
        <td>
          <Image width={80} src={productImage} />
        </td>
        <td className="cart_table_detail">{productName}</td>
        {existItem}
        <td className="cart_table_detail">
          <button
            className="delete_product"
            onClick={() => {
              deleteItem();
            }}
          >
            Xoá
          </button>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
