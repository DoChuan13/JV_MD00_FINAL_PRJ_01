import * as notifyConst from "../../../services/constants/notifyConstants";

export const deleteProduct = (value) => {
  return {
    type: notifyConst.DELETE_PRODUCT_NOTIFY_TYPE,
    payload: value,
  };
};

export const blockUser = (value) => {
  return {
    type: notifyConst.BLOCK_USER_NOTIFY_TYPE,
    payload: value,
  };
};

export const cancelAction = () => {
  return {
    type: notifyConst.CANCEL_ACTION_NOTIFY_TYPE,
    payload: notifyConst.CANCEL_ACTION_NOTIFY_TYPE,
  };
};

export const confirmPaymentNoti = (value) => {
  return {
    type: notifyConst.CONFIRM_PAYMENT_NOTIFY_TYPE,
    payload: value,
  };
};

export const cancelPaymentNoti = (value) => {
  return {
    type: notifyConst.CANCEL_PAYMENT_NOTIFY_TYPE,
    payload: value,
  };
};

export const deleteCartNoti = (value) => {
  return {
    type: notifyConst.DELETE_CART_NOTIFY_TYPE,
    payload: value,
  };
};

export const confirmCartNoti = (value) => {
  return {
    type: notifyConst.CONFIRM_CART_NOTIFY_TYPE,
    payload: value,
  };
};
