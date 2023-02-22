import { NavLink, useNavigate, useParams } from "react-router-dom";
import * as routerLink from "../../config/routersConfig";
import Toast from "../toast/Toast";
import CartList from "./CartList";
// import CartsList from "./CartsList";
import OrderList from "./OrderList";
import CenteredModal from "../modal/CenteredModal";

const Cart = () => {
  let params = useParams();
  let navigate = useNavigate();

  let elementComponent = <></>;
  if (params.id === undefined || params.id === "1") {
    elementComponent = <CartList />;
    // elementComponent = <CartsList />;
  } else if (params.id === "2" || params.id === "3" || params.id === "4") {
    elementComponent = <OrderList />;
  } else {
    navigate(routerLink.error404.path);
  }
  return (
    <div className="cart_section">
      <div className="cart_control_title">
        <NavLink to={"/cart/1"} className="title_btn">
          Giỏ hàng
        </NavLink>
        <NavLink to={"/cart/2"} className="title_btn">
          Chờ thanh toán
        </NavLink>
        <NavLink to={"/cart/3"} className="title_btn">
          Hoàn thành
        </NavLink>
        <NavLink to={"/cart/4"} className="title_btn">
          Đã huỷ
        </NavLink>
      </div>
      {elementComponent}
      <Toast />
      <CenteredModal />
    </div>
  );
};

export default Cart;
