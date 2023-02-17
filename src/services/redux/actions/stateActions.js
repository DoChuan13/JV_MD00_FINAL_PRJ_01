import * as stateConst from "../../constants/stateConstants";

export const getAllUserReducer = (value) => {
  return {
    type: stateConst.GET_USER_SUCC_TYPE,
    payload: value,
  };
};

export const getAllProductReducer = (value) => {
  return {
    type: stateConst.GET_PROD_SUCC_TYPE,
    payload: value,
  };
};

export const addNewProductReducer = (value) => {
  return {
    type: stateConst.ADD_PROD_ACT_TYPE,
    payload: value,
  };
};

export const updateProductInfoReducder = (value) => {
  return {
    type: stateConst.UPDATE_PROD_ACT_TYPE,
    payload: value,
  };
};

export const deleteProductReducer = (value) => {
  return {
    type: stateConst.DELETE_PROD_ACT_TYPE,
    payload: value,
  };
};

export const blockUserReducer = (value) => {
  return {
    type: stateConst.BLOCK_USER_ACT_TYPE,
    payload: value,
  };
};
