import Table from "react-bootstrap/Table";
import Item from "./Item";
import { useEffect } from "react";
import { formatCurrency } from "../../utils/valueUtils/formatValue";
import { currencyCode, languageCode } from "../../config/valueConfig";
import { checkLoginStatus } from "../../utils/functions/commonFunctions";
import * as selector from "../../services/redux/selectors/selectors";
import * as axios from "../../middleware/api/methods/methodAxios";
import * as reload from "../../services/redux/actions/sagaAction";
import * as resource from "../../config/resourcesAxiosConfig";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  let loginUser = checkLoginStatus();
  let dispatch = useDispatch();
  let usState = useSelector(selector.usersState);
  let prState = useSelector(selector.productsState);
  let cartElement = <></>;

  // useEffect(() => {
  //   axios
  //     .getDatabase(resource.products, "")
  //     .then((res) => {
  //       dispatch(reload.prReload(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });

  //   axios
  //     .getDatabase(resource.users, "")
  //     .then((res) => {
  //       dispatch(reload.usReload(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err.message, "Có lỗi");
  //     });
  // }, [dispatch]);
  let blankAlert = <></>,
    totalAmount = 0;

  const paymentCart = (cart) => {
    console.log("Thanh toan Cart", cart);
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
    return <Item key={cart.id} cart={cart} stt={index + 1} />;
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
