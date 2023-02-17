import * as stateConst from "../../constants/stateConstants";

export const get_AllUserAct = () => {
  return {
    type: stateConst.GET_All_USR_TYPE,
    // payload: value,
  };
};

//Product SAGA

export const get_AllProdAct = () => {
  return {
    type: stateConst.GET_ALL_PRD_TYPE,
    // payload: value,
  };
};

export const add_NewProductAct = (value) => {
  return {
    type: stateConst.ADD_PRODUCT_TYPE,
    payload: value,
  };
};

export const update_ProdInfoAct = (value) => {
  return {
    type: stateConst.UPDATE_PRODUCT_TYPE,
    payload: value,
  };
};

export const delete_ProdAct = (value) => {
  return {
    type: stateConst.DELETE_PRODUCT_TYPE,
    payload: value,
  };
};

export const impLoginStatus = (value) => {
  return {
    type: stateConst.IMPORT_LOGIN_USER_TYPE,
    payload: value,
  };
};
