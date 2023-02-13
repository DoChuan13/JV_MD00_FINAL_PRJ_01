import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import * as Fa from "react-icons/fa";
import { LoginOutlined, UserAddOutlined } from "@ant-design/icons";
import * as routerLink from "../../config/routersConfig";

function UserBar() {
  return (
    <>
      <Dropdown className="dropdown_navbar">
        <Dropdown.Toggle
          className="dropdown_title"
          variant="secondary"
          color="gray"
        >
          {/* <DropdownButton /> */}
          {/* Dropdown */}
          <Fa.FaUserCircle color="gray" size={25} />
          {/* <span> </span>User Menu */}
        </Dropdown.Toggle>
        <Dropdown.Menu variant="" className="dropdownToggle">
          <Dropdown.Item
            href={routerLink.login.path}
            className="dropdown_navbar--item"
          >
            Đăng nhập
            <LoginOutlined />
          </Dropdown.Item>
          <Dropdown.Item
            href={routerLink.register.path}
            className="dropdown_navbar--item"
          >
            Đăng ký
            <UserAddOutlined />
          </Dropdown.Item>
          {/* <Dropdown.Divider />
          <Dropdown.Item href="#/action-4" className="dropdown_navbar--item">
            Others
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default UserBar;
