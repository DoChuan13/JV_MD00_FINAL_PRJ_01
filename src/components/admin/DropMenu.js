import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import * as routerLink from "../../config/routersConfig";
import { removeLocalStorage } from "../../services/Storage/localStorage";
import { removeSessionStorage } from "../../services/Storage/sessionStorage";

const DropMenu = () => {
  const navigate = useNavigate();
  const logOutAdmin = (e) => {
    e.preventDefault();
    navigate(routerLink.index.path);
    removeLocalStorage("loginStatus");
    removeSessionStorage("loginStatus");
  };
  const items = [
    {
      label: <Link to="/">Trang chủ</Link>,
      key: "0",
    },
    {
      label: (
        <Link
          to="#"
          onClick={(e) => {
            logOutAdmin(e);
          }}
        >
          Đăng xuất
        </Link>
      ),
      key: "1",
    },
    // {
    //   type: "divider",
    // },
    // {
    //   label: "3rd menu item",
    //   key: "3",
    // },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <Link
        to="/"
        onClick={(e) => e.preventDefault()}
        style={{ justifyContent: "center" }}
      >
        <Space style={{ color: "white" }}>
          <UserOutlined style={{ color: "white", height: "20px" }} />
          Admin
          <DownOutlined />
        </Space>
      </Link>
    </Dropdown>
  );
};
export default DropMenu;
