import Table from "react-bootstrap/Table";
import PaymentItem from "./PaymentItem";
// import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { modalPaymentContext } from "./PaymentModal";
import { formatCurrency } from "../../../../../utils/valueUtils/formatValue";
import { languageCode, currencyCode } from "../../../../../config/valueConfig";

const PaymentList = () => {
  let listContext = useContext(modalPaymentContext);
  let arrItems = listContext.paymentDetailList.paymentCart;

  let { totalAmount } = listContext.paymentDetailList;
  let elementItem = arrItems.map((item, index) => {
    return <PaymentItem key={item.id} item={item} stt={index + 1} />;
  });
  return (
    <div className="cart_section">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th colSpan={2}>Sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Số tiền</th>
          </tr>
        </thead>
        <tbody>{elementItem}</tbody>
        <thead>
          <tr>
            <th colSpan={3}></th>
            <th colSpan={2}>Tổng giá trị đơn hàng</th>
            <th>{formatCurrency(totalAmount, languageCode, currencyCode)}</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default PaymentList;
