import * as stateConst from "../../constants/stateConstants";

export const addNewProduct = (value) => {
  return {
    type: stateConst.ADD_PRODUCT_TYPE,
    payload: value,
  };
};

export const updateProductInfo = (value) => {
  return {
    type: stateConst.UPDATE_PRODUCT_TYPE,
    payload: value,
  };
};

export const deleteProduct = (value) => {
  return {
    type: stateConst.DELETE_PRODUCT_TYPE,
    payload: value,
  };
};

export const blockUser = (value) => {
  return {
    type: stateConst.BLOCK_USER_ACTION_TYPE,
    payload: value,
  };
};
