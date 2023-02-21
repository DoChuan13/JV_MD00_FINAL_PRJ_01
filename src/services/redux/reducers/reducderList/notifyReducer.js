import * as notifyConst from "../../../constants/notifyConstants";
const initState = {};

const reducer02 = (state = initState, action) => {
  switch (action.type) {
    case notifyConst.DELETE_PRODUCT_NOTIFY_TYPE:
      state = {
        status: notifyConst.DELETE_PRODUCT_NOTIFY_TYPE,
        value: action.payload,
      };
      return state;

    case notifyConst.CANCEL_ACTION_NOTIFY_TYPE:
      state = { status: false, value: "" };
      return state;

    case notifyConst.BLOCK_USER_NOTIFY_TYPE:
      state = {
        status: notifyConst.BLOCK_USER_NOTIFY_TYPE,
        value: action.payload,
      };
      return state;

    case notifyConst.CANCEL_PAYMENT_NOTIFY_TYPE:
      state = {
        status: notifyConst.CANCEL_PAYMENT_NOTIFY_TYPE,
        value: action.payload,
      };
      return state;

    case notifyConst.CONFIRM_PAYMENT_NOTIFY_TYPE:
      state = {
        status: notifyConst.CONFIRM_PAYMENT_NOTIFY_TYPE,
        value: action.payload,
      };
      return state;

    default:
      return state;
  }
};

export default reducer02;
