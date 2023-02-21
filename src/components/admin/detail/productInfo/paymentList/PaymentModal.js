import React, { createContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PaymentList from "./PaymentList";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Chi tiết đơn hàng
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PaymentList />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Đóng</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const modalPaymentContext = createContext();

function PaymentModal(props) {
  let { detailList } = props;
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    setModalShow(detailList.status);
  }, [detailList]);

  let contextValue = {
    paymentDetailList: detailList.data,
  };
  return (
    <>
      <modalPaymentContext.Provider value={contextValue}>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </modalPaymentContext.Provider>
    </>
  );
}

export default PaymentModal;
