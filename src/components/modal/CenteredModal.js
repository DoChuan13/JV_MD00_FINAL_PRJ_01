import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

import { notifyState } from "../../services/redux/selectors/selectors";
import * as notifyConst from "../../services/constants/notifyConstants";
import { cancelAction } from "../../services/redux/actions/notifyActions";
import * as saga from "../../services/redux/actions/sagaAction";
import { Success } from "../toast/Toast";

import {
  disableScroll,
  enableScroll,
} from "../../utils/functions/commonFunctions";

function MyVerticallyCenteredModal(props) {
  let dispatch = useDispatch();
  let modalData = props.data;
  let itemInfo = props.data.value;

  const cancelAction = () => {
    props.onHide();
  };

  const confirmAction = () => {
    props.onHide();
    if (modalData.status === notifyConst.DELETE_PRODUCT_NOTIFY_TYPE) {
      Success("Xoá sản phẩm thành công");
      dispatch(saga.delete_ProdAct(itemInfo));
    } else if (modalData.status === notifyConst.BLOCK_USER_NOTIFY_TYPE) {
      let newValue = {
        ...itemInfo,
        statusUser: itemInfo.statusUser ? false : true,
      };
      delete newValue.key;
      Success("Đã thay đổi trạng thái tài khoản");
      dispatch(saga.block_UserAct(newValue));
    } else if (modalData.status === notifyConst.CANCEL_PAYMENT_NOTIFY_TYPE) {
      let paymentValue = modalData.value;
      Success("Đơn hàng đã bị huỷ bỏ");
      dispatch(saga.cancel_PaymentAct(paymentValue));
    } else if (modalData.status === notifyConst.CONFIRM_PAYMENT_NOTIFY_TYPE) {
      let paymentValue = modalData.value;
      Success("Đơn hàng đã được xác nhận thành công");
      dispatch(saga.confirm_PaymentAct(paymentValue));
    } else if (modalData.status === notifyConst.DELETE_CART_NOTIFY_TYPE) {
      let paymentValue = modalData.value;
      Success("Đơn hàng đã được xác nhận thành công");
      dispatch(saga.remove_PrdCartAct(paymentValue));
    }
  };

  let titleModal, contentModal;
  if (modalData.status === notifyConst.DELETE_PRODUCT_NOTIFY_TYPE) {
    titleModal = "Xóa sản phẩm!";
    contentModal = "Bạn có chắn chắn muốn xóa sản phẩm này không?";
  } else if (modalData.status === notifyConst.BLOCK_USER_NOTIFY_TYPE) {
    titleModal = "Chặn/Hủy chặn tài khoản!";
    contentModal = "Bạn có chắn chắn muốn chặn/hủy chặn tài khoản này không?";
  } else if (modalData.status === notifyConst.CANCEL_PAYMENT_NOTIFY_TYPE) {
    titleModal = "Huỷ bỏ đơn hàng!";
    contentModal = "Bạn có chắn chắn muốn huỷ đơn hàng này không?";
  } else if (modalData.status === notifyConst.CONFIRM_PAYMENT_NOTIFY_TYPE) {
    titleModal = "Xác nhận đơn hàng!";
    contentModal = "Bạn có chắn chắn muốn chấp nhận đơn hàng này không?";
  } else if (modalData.status === notifyConst.DELETE_CART_NOTIFY_TYPE) {
    titleModal = "Xoá sản phẩm!";
    contentModal =
      "Bạn có chắn chắn muốn xoá sản phẩm này khỏi giỏ hàng không?";
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {titleModal}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>{contentModal}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cancelAction}>
          Hủy bỏ
        </Button>
        <Button variant="primary" onClick={confirmAction}>
          Xác nhận
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function CenteredModal() {
  let noState = useSelector(notifyState);

  let dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (
      noState.status === notifyConst.DELETE_PRODUCT_NOTIFY_TYPE ||
      noState.status === notifyConst.BLOCK_USER_NOTIFY_TYPE ||
      noState.status === notifyConst.CANCEL_PAYMENT_NOTIFY_TYPE ||
      noState.status === notifyConst.CONFIRM_PAYMENT_NOTIFY_TYPE ||
      noState.status === notifyConst.DELETE_CART_NOTIFY_TYPE
    ) {
      setModalShow(true);
      disableScroll();
    }
  }, [noState]);

  const hideModalShow = () => {
    setModalShow(false);
    setTimeout(() => {
      dispatch(cancelAction());
      enableScroll();
    }, 200);
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={hideModalShow}
        data={noState}
      />
    </>
  );
}

export default CenteredModal;
