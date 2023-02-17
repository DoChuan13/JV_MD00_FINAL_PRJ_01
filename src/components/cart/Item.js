import React, { useEffect } from "react";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  formatCurrency,
  formatNumber,
} from "../../utils/valueUtils/formatValue";
import { languageCode } from "../../config/valueConfig";
import { currencyCode } from "../../config/valueConfig";
import * as picture from "../../assets/images/images";
import * as axios from "../../middleware/api/methods/methodAxios";
import * as selector from "../../services/redux/selectors/selectors";
import * as reload from "../../services/redux/actions/sagaAction";
import * as resource from "../../config/resourcesAxiosConfig";
import { deleteDatabase } from "../../middleware/api/methods/methodAxios";

function Item(props) {
  let prState = useSelector(selector.productsState);
  let dispatch = useDispatch();

  let { cart } = props;
  let { stt } = props;
  let item = prState.find((product) => {
    return cart.id === product.id;
  });

  let { buyQuantity } = cart;
  let { productPrice } = item;
  let subTotal = buyQuantity * productPrice;

  // useEffect(() => {
  //   axios
  //     .getDatabase(resource.products, "")
  //     .then((res) => {
  //       dispatch(reload.prReload(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [dispatch]);

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
        <td>Nike</td>
        <td>
          <div>{formatCurrency(buyQuantity, languageCode, currencyCode)}</div>
        </td>
        <td>{formatNumber(productPrice, languageCode)}</td>
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
