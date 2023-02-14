import {
  HomeOutlined,
  NotificationOutlined,
  ShopOutlined,
  UserOutlined,
  UnorderedListOutlined,
  CommentOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import * as routerLink from "../../../config/routersConfig";
import AdminContent from "./AdminContent";

const { Header, Content, Sider } = Layout;

const topBarValue = [
  {
    key: 1,
    icon: <HomeOutlined />,
    label: <Link to={"/admin/"}>Admin Home Page</Link>,
  },
];
const navBarValue = [
  {
    key: "user",
    icon: <UserOutlined />,
    label: "Tài khoản",
    children: [
      {
        key: 1,
        icon: <UnorderedListOutlined />,
        label: <Link to={"/admin/user_detail/1"}>Tất cả</Link>,
      },
      {
        key: 2,
        icon: <UnorderedListOutlined />,
        label: <Link to={"/admin/user_detail/2"}>Bị chặn</Link>,
      },
      {
        key: 3,
        icon: <UnorderedListOutlined />,
        label: <Link to={"/admin/user_detail/3"}>Admin</Link>,
      },
    ],
  },
  {
    key: "product",
    icon: <ShopOutlined />,
    label: "Sản phẩm",
    children: [
      {
        key: 4,
        icon: <UnorderedListOutlined />,
        label: <Link to={"/admin/product_detail/1"}>Tất cả</Link>,
      },
      {
        key: 5,
        icon: <UnorderedListOutlined />,
        label: <Link to={"/admin/product_detail/2"}>Đặt hàng</Link>,
      },
      {
        key: 6,
        icon: <UnorderedListOutlined />,
        label: <Link to={"/admin/product_detail/3"}>Đã bán</Link>,
      },
    ],
  },
  {
    key: "others",
    icon: <NotificationOutlined />,
    label: "Khác",
    children: [
      {
        key: 7,
        icon: <CommentOutlined />,
        label: <Link to={"/admin/notice/1"}>Thông báo</Link>,
      },
      {
        key: 8,
        icon: <SettingOutlined />,
        label: "Cài đặt",
      },
    ],
  },
];

function AdminLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="admin_section">
      {/* <div style={{ backgroundColor: "red" }}>Test thử</div> */}
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={topBarValue}
          />
        </Header>
        <Layout>
          {/* Menu Side Bar Start */}
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["Navbar1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={navBarValue}
            />
          </Sider>
          {/* Menu Side Bar End */}
          {/* Layout Start */}
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>
                <Link to={routerLink.admin.path}>Trang chủ</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={"/admin/user_detail/"}>Tài khoản</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={"/admin/product_detail/"}>Sản phẩm</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              {/* Detail Table Start */}
              <AdminContent />
              {/* Detail Table End */}
            </Content>
          </Layout>
          {/* Layout End */}
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminLayout;
