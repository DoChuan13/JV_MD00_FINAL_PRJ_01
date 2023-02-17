import React from "react";
import { Image } from "antd";
import { useSelector } from "react-redux";
import {
  formatCurrency,
  formatNumber,
} from "../../utils/valueUtils/formatValue";
import { languageCode } from "../../config/valueConfig";
import { currencyCode } from "../../config/valueConfig";
import * as picture from "../../assets/images/images";
import * as selector from "../../services/redux/selectors/selectors";
import { deleteDatabase } from "../../middleware/api/methods/methodAxios";

function Item(props) {
  let prState = useSelector(selector.productsState);

  let { cart } = props;
  let { stt } = props;
  let item = prState.find((product) => {
    return cart.id === product.id;
  });

  let { buyQuantity } = cart;
  let { productPrice } = item;
  let { productName } = item;
  let subTotal = buyQuantity * productPrice;

  const deleteItem = (cart) => {
    console.log("Xoa san pham", cart);
    deleteDatabase();
  };
  return (
    <>
      <tr>
        <td>{stt}</td>
        <td>
          <Image width={80} src={picture[item.productImage]} />
        </td>
        <td>{productName}</td>
        <td>{formatCurrency(productPrice, languageCode, currencyCode)}</td>
        <td>{formatNumber(buyQuantity, languageCode)}</td>
        <td>{formatCurrency(subTotal, languageCode, currencyCode)}</td>
        <td>
          <button
            className="delete_product"
            onClick={() => {
              deleteItem(item);
            }}
          >
            Xoá
          </button>
        </td>
      </tr>
    </>
  );
}

export default Item;
