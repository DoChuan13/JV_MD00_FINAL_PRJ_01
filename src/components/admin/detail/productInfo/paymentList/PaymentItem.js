import React from "react";
import { Image } from "antd";
import * as picture from "../../../../../assets/images/images";
import {
  formatCurrency,
  formatNumber,
} from "../../../../../utils/valueUtils/formatValue";
import { currencyCode, languageCode } from "../../../../../config/valueConfig";

function PaymentItem(props) {
  let { item } = props;
  let { stt } = props;

  let subTotal = item.buyQuantity * item.productPrice;
  return (
    <>
      <tr>
        <td>{stt}</td>
        <td>
          <Image width={80} src={picture[item.productImage]} />
        </td>
        <td>{item.productName}</td>
        <td>{formatCurrency(item.productPrice, languageCode, currencyCode)}</td>
        <td>{formatNumber(item.buyQuantity, languageCode)}</td>
        <td>{formatCurrency(subTotal, languageCode, currencyCode)}</td>
      </tr>
    </>
  );
}

export default PaymentItem;
