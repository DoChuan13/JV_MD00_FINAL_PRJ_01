import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

import { notifyState } from "../../services/redux/selectors/selectors";
import * as notifyConst from "../../services/constants/notifyConstants";
import { cancelAction } from "../../services/redux/actions/notifyActions";
import * as stateConst from "../../services/redux/actions/stateActions";
import * as axios from "../../middleware/api/methods/methodAxios";
import * as resource from "../../config/resourcesAxiosConfig";
import * as saga from "../../services/redux/actions/sagaAction";

import {
  disableScroll,
  enableScroll,
} from "../../utils/functions/commonFunctions";
import { useNavigate } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let modalData = props.data;
  let itemInfo = props.data.value;

  const cancelAction = () => {
    props.onHide();
  };

  const confirmAction = () => {
    props.onHide();
    if (modalData.status === notifyConst.DELETE_PRODUCT_NOTIFY_TYPE) {
      dispatch(saga.delete_ProdAct(itemInfo));
      navigate("/admin/product_detail/1", { state: "Deleted" });
    } else if (modalData.status === notifyConst.BLOCK_USER_NOTIFY_TYPE) {
      let newValue = {
        ...itemInfo,
        statusUser: itemInfo.statusUser ? false : true,
      };
      delete newValue.key;
      dispatch(stateConst.blockUserReducer(newValue));
      axios.putDatabase(resource.users, newValue.id, newValue);
    }
  };

  let titleModal =
    modalData.status === notifyConst.DELETE_PRODUCT_NOTIFY_TYPE
      ? "Xóa sản phẩm"
      : "Chặn/Hủy chặn tài khoản";

  let contentModal =
    modalData.status === notifyConst.DELETE_PRODUCT_NOTIFY_TYPE
      ? "Bạn có chắn chắn muốn xóa sản phẩm này không"
      : "Bạn có chắn chắn muốn chặn/hủy chặn tài khoản này không";

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
  // console.log(noState, "noState");
  let dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    if (
      noState.status === notifyConst.DELETE_PRODUCT_NOTIFY_TYPE ||
      noState.status === notifyConst.BLOCK_USER_NOTIFY_TYPE
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
