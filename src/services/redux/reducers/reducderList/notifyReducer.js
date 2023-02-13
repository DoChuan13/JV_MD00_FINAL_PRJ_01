import * as notifyConst from "../../../constants/notifyConstants";
const initState = {};

const reducer02 = (state = initState, action) => {
  switch (action.type) {
    case notifyConst.DELETE_PRODUCT_NOTIFY_TYPE:
      state = {
        status: notifyConst.DELETE_PRODUCT_NOTIFY_TYPE,
        value: action.payload,
      };
      // console.log("Xóa", state);
      return state;

    case notifyConst.CANCEL_ACTION_NOTIFY_TYPE:
      state = { status: false, value: "" };
      // console.log("Hủy");
      return state;

    case notifyConst.BLOCK_USER_NOTIFY_TYPE:
      state = {
        status: notifyConst.BLOCK_USER_NOTIFY_TYPE,
        value: action.payload,
      };
      // console.log("Block user", action.payload);
      return state;

    default:
      return state;
  }
};

export default reducer02;
