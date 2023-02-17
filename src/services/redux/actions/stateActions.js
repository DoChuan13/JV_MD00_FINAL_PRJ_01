import * as stateConst from "../../constants/stateConstants";

export const getAllUserReducer = (value) => {
  return {
    type: stateConst.GET_USER_SUCC_TYPE,
    payload: value,
  };
};

export const getAllProductReducer = (value) => {
  return {
    type: stateConst.GET_PRODUCT_SUCC_TYPE,
    payload: value,
  };
};

export const addNewProductReducer = (value) => {
  return {
    type: stateConst.ADD_PRODUCT_TYPE,
    payload: value,
  };
};

export const updateProductInfoReducder = (value) => {
  return {
    type: stateConst.UPDATE_PRODUCT_TYPE,
    payload: value,
  };
};

export const deleteProductReducer = (value) => {
  return {
    type: stateConst.DELETE_PRODUCT_TYPE,
    payload: value,
  };
};

export const blockUserReducer = (value) => {
  return {
    type: stateConst.BLOCK_USER_ACTION_TYPE,
    payload: value,
  };
};
