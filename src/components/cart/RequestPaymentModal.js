import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { notifyState } from "../../services/redux/selectors/selectors";
import * as notifyConst from "../../services/constants/notifyConstants";
import * as saga from "../../services/redux/actions/sagaAction";
import { Warning, Success } from "../toast/Toast";

function RequestPaymentModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [paymentInfo, setPaymentInfo] = useState({
    address: "",
    phone: "",
    note: "",
  });
  let dispatch = useDispatch();
  let noState = useSelector(notifyState);

  const getPaymentInfo = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };
  const confirmCart = () => {
    if (
      paymentInfo.address === "" ||
      paymentInfo.phone === "" ||
      paymentInfo.note === ""
    ) {
      Warning("Vui lòng điền đầy đủ các thông tin");
      return;
    }
    let totalAmount = noState.value;
    console.log(totalAmount);
    let confirmValue = { ...paymentInfo, totalAmount: totalAmount };
    handleClose();
    Success("Thanh toán thành công");
    dispatch(saga.payment_PrdCartAct(confirmValue));
  };

  useEffect(() => {
    if (noState.status === notifyConst.CONFIRM_CART_NOTIFY_TYPE) {
      setShow(true);
    }
  }, [noState]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin giao hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Địa chỉ"
                autoFocus
                name="address"
                onChange={getPaymentInfo}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                placeholder="Số điện thoại"
                autoFocus
                name="phone"
                onChange={getPaymentInfo}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Ghi chú</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ghi chú"
                rows={3}
                name="note"
                onChange={getPaymentInfo}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={confirmCart}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RequestPaymentModal;
