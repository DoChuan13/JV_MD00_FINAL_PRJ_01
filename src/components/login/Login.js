import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as AI from "react-icons/ai";
import * as routerLink from "../../config/routersConfig";
import * as picture from "../../assets/images/images";
import { setLocalStorage } from "../../services/Storage/localStorage";
import { setSessionStorage } from "../../services/Storage/sessionStorage";
import { usersState } from "../../services/redux/selectors/selectors";
import Toast from "../toast/Toast";
import { Success, Error } from "../toast/Toast";

function Login() {
  let navigate = useNavigate();
  let usState = useSelector(usersState);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    let emailCheck = false,
      passwordCheck = false,
      typeUser = "user",
      statusUser = false;
    for (let i = 0; i < usState.length; i++) {
      if (values.email.toLowerCase() === usState[i].email.toLowerCase()) {
        emailCheck = true;
        if (values.password === usState[i].password) {
          passwordCheck = true;
        }
        if (usState[i].typeUser === "admin") {
          typeUser = "admin";
        }
        statusUser = usState[i].statusUser;
      }
    }
    if (!emailCheck) {
      // window.alert("Email không tồn tại");
      Error("Email không tồn tại!!!");
      return;
    }
    if (!passwordCheck) {
      // window.alert("Sai mật khẩu");
      Error("Sai mật khẩu!!!");
      return;
    }
    if (!statusUser) {
      Error("Tài khoản đã bị khóa!!!");
      return;
    }
    let userInfo = { ...values, typeUser: typeUser };
    if (values.remember) {
      setLocalStorage("loginStatus", userInfo);
    } else {
      setSessionStorage("loginStatus", userInfo);
    }
    Success("Đăng nhập thành công");
    // setTimeout(() => {
    //   navigate(routerLink.index.path);
    // }, 3000);
  };
  return (
    <div className="login_section">
      <div className="login_section--maxsize">
        <img src={picture.register_banner} alt="login Banner" />
        <div className="login_group">
          <div className="login_group--title">
            <AI.AiOutlineLeft
              onClick={() => {
                navigate(-1);
              }}
            />
            <div>--- ĐĂNG NHẬP ---</div>
            <AI.AiOutlineCloseCircle
              onClick={() => {
                navigate(routerLink.index.path);
              }}
            />
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập e-mail của bạn!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu của bạn!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Ghi nhớ</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="#">
                Quên mật khẩu
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng nhập
              </Button>
              hoặc <Link to={routerLink.register.path}>Đăng ký!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Toast />
    </div>
  );
}

export default Login;
