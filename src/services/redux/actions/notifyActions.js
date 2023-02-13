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
