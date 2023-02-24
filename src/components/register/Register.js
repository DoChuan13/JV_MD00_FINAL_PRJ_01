import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usersState } from "../../services/redux/selectors/selectors";
import * as AI from "react-icons/ai";
import * as routerLink from "../../config/routersConfig";
import * as picture from "../../assets/images/images";
import User from "../../services/class/users/User";
import Toast, { Error, Success } from "../toast/Toast";
import * as saga from "../../services/redux/actions/sagaAction";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Register() {
  let usState = useSelector(usersState);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    let user = new User();
    user = { ...user, ...values, email: values.email.toLowerCase() };
    delete user.confirm;
    delete user.agreement;
    let checkEmail = true,
      checkUseName = true;
    for (let i = 0; i < usState.length; i++) {
      if (user.email === usState[i].email) {
        checkEmail = false;
      }
      if (user.userName.toLowerCase() === usState[i].userName.toLowerCase()) {
        checkUseName = false;
      }
    }
    if (!checkEmail) {
      Error("Email đã tồn tại, vui lòng thử lại email khác");
      // window.alert("Email đã tồn tại, vui lòng thử lại email khác");
      return;
    }
    if (!checkUseName) {
      Error("Tên tài khoản đã tồn tại, vui lòng thử lại tên khác");
      // window.alert("Tên tài khoản đã tồn tại, vui lòng thử lại tên khác");
      return;
    }
    Success("Đăng ký thành công");
    dispatch(saga.register_UserAct(user));
    setTimeout(() => {
      navigate(routerLink.login.path);
    }, 1500);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
        defaultValue="+84"
      >
        <Option value="1">+1</Option>
        <Option value="44">+44</Option>
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="register_section">
      <div className="register_section--maxsize">
        <img src={picture.register_banner} alt="Register Banner" />
        <div className="register_group">
          <div className="register_group--title">
            <AI.AiOutlineLeft
              onClick={() => {
                navigate(-1);
              }}
            />
            <div>--- ĐĂNG KÝ ---</div>
            <AI.AiOutlineCloseCircle
              onClick={() => {
                navigate(routerLink.index.path);
              }}
            />
          </div>

          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="userName"
              label="Tài khoản"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên tài khoản!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "E-mail không hợp lệ!",
                },
                {
                  required: true,
                  message: "Vui lòng nhập E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Điện thoại"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập số điện thoại!",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Xác nhận"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập lại mật khẩu!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Mật khẩu không trùng khớp!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("Vui lòng chấp nhận điều khoản")
                        ),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                Tôi đã đọc các <Link to={"#"}>điều khoản</Link>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
              hoặc <Link to={routerLink.login.path}>Đăng nhập!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Toast />
    </div>
  );
}

export default Register;
