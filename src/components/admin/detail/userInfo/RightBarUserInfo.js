import { Button, Col, DatePicker, Drawer, Form, Input, Row } from "antd";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import * as Ai from "react-icons/ai";
import moment from "moment";

import { userManager } from "./ManagerUserTable";
import * as notifyAction from "../../../../services/redux/actions/notifyActions";

function RightBarUserInfo() {
  let dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [viewStatus, setViewStatus] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  let userContext = useContext(userManager);
  let dataContext = userContext.drawer.data;

  useEffect(() => {
    setOpen(userContext.drawer.show);
    setViewStatus(userContext.drawer.viewSt);
    let dataContext = userContext.drawer.data;
    setUserInfo({
      ...dataContext,
      statusUser: dataContext.statusUser ? "Cho phép" : "Chặn",
      dateOfBirth: moment(dataContext.dateOfBirth, "YYYY-MM-DD"),
    });
  }, [userContext]);

  const resetDrawer = () => {
    userContext.toggleDrawer(false);
  };

  const closeDrawer = () => {
    setOpen(false);
    setTimeout(resetDrawer, 200);
  };

  const handleAdminAction = (data) => {
    setTimeout(closeDrawer, 200);
    dispatch(notifyAction.blockUser(data));
  };

  let elementBtnCtrl =
    userInfo.typeUser === "admin" ? (
      <></>
    ) : userInfo.statusUser === "Cho phép" ? (
      <Button
        type="primary"
        danger
        onClick={() => {
          handleAdminAction(dataContext);
        }}
      >
        Chặn
      </Button>
    ) : (
      <Button
        type="primary"
        onClick={() => {
          handleAdminAction(dataContext);
        }}
      >
        Cho phép
      </Button>
    );

  return (
    <>
      <Drawer
        title="Thông tin tài khoản"
        width={720}
        onClose={closeDrawer}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={elementBtnCtrl}
      >
        {/* Drawer Form Start */}
        <Form
          layout="vertical"
          hideRequiredMark
          disabled={viewStatus}
          initialValues={userInfo}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="id" label="ID">
                <Input placeholder="Không có thông tin" disabled={true} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="userName" label="User Name">
                <Input placeholder="Không có thông tin" disabled={true} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="typeUser" label="Loại tài khoản">
                <Input placeholder="Không có thông tin" disabled={true} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="statusUser" label="Trạng thái">
                <Input placeholder="Không có thông tin" disabled={true} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="lastName" label="Họ">
                <Input placeholder="Không có thông tin" disabled={viewStatus} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="firstName" label="Tên">
                <Input placeholder="Không có thông tin" disabled={viewStatus} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="email" label="E-mail">
                <Input placeholder="Không có thông tin" disabled={true} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="dateOfBirth" label="Ngày sinh">
                <DatePicker
                  disabled={viewStatus}
                  label="dateOfBirth"
                  style={{
                    width: "100%",
                  }}
                  /*Error Content
                  // dateRender={(current) => {
                  //   const style = {};
                  //   if (current.date() === 1) {
                  //     style.border = "1px solid #1890ff";
                  //     style.borderRadius = "50%";
                  //   }
                  //   return (
                  //     <div className="ant-picker-cell-inner" style={viewStatus}>
                  //       {current.date()}
                  //     </div>
                  //   );
                // }}*/
                />
              </Form.Item>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="userBio" label="Bio">
                <Input.TextArea
                  showCount
                  maxLength={100}
                  disabled={viewStatus}
                  rows={3}
                  placeholder="Không có thông tin"
                  style={{ height: 80, resize: "none" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="address" label="Địa chỉ">
                <Input.TextArea
                  showCount
                  maxLength={100}
                  disabled={viewStatus}
                  rows={3}
                  placeholder="Không có thông tin"
                  style={{ height: 80, resize: "none" }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {/* Drawer Form End */}
      </Drawer>
    </>
  );
}

export default RightBarUserInfo;
