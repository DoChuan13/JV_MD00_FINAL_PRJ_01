import Table from "react-bootstrap/Table";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utils/valueUtils/formatValue";
import { currencyCode, languageCode } from "../../config/valueConfig";
import { checkLoginStatus } from "../../utils/functions/commonFunctions";
import * as selector from "../../services/redux/selectors/selectors";
import { useDispatch, useSelector } from "react-redux";
import * as saga from "../../services/redux/actions/sagaAction";

const Cart = () => {
  let loginUser = checkLoginStatus();
  let dispatch = useDispatch();
  let usState = useSelector(selector.usersState);
  let prState = useSelector(selector.productsState);
  let cartElement = <></>;

  let blankAlert = <></>,
    totalAmount = 0;

  const paymentCart = (cart) => {
    dispatch(saga.payment_PrdCartAct(totalAmount));
  };

  //==========Validate user ==========//
  let userLog = usState.find((user) => {
    return user.id === loginUser.id;
  });

  //==========Render Element ==========//
  blankAlert =
    userLog.cart.length !== 0 ? (
      <></>
    ) : (
      <tr>
        <td colSpan={7}>Hiện tại chưa có sản phẩm nào trong giỏ</td>
      </tr>
    );

  prState.forEach((product) => {
    userLog.cart.forEach((item) => {
      if (product.id === item.id) {
        return (totalAmount += item.buyQuantity * product.productPrice);
      }
    });
  });

  let totalElement = formatCurrency(totalAmount, languageCode, currencyCode);

  cartElement = userLog.cart.map((cart, index) => {
    return <CartItem key={cart.id} cart={cart} stt={index + 1} />;
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
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {blankAlert}
          {cartElement}
          <tr>
            <th colSpan={5}>Tổng giá trị đơn hàng</th>
            <th>{totalElement}</th>
            <th>
              <button
                style={{ opacity: 0.6, cursor: "not-allowed" }}
                className="buy_confirm"
                onClick={() => {
                  paymentCart();
                }}
              >
                Thanh toán
              </button>
            </th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
