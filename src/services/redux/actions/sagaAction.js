import * as stateConst from "../../constants/stateConstants";

//==========User Redux Action SAGA==========//
export const get_AllUserAct = () => {
  return {
    type: stateConst.GET_All_USR_ACT_TYPE,
    // payload: value,
  };
};

export const block_UserAct = (value) => {
  return {
    type: stateConst.BLOCK_USER_ACT_TYPE,
    payload: value,
  };
};

//==========Cart Redux Action SAGA==========//

export const add_PrdCartAct = (product) => {
  return {
    type: stateConst.ADD_TO_CART_ACT_TYPE,
    payload: product,
  };
};

export const edit_PrdCartAct = (product) => {
  return {
    type: stateConst.EDIT_PRD_CART_ACT_TYPE,
    payload: product,
  };
};

export const remove_PrdCartAct = (product) => {
  return {
    type: stateConst.REMOVE_FR_CART_ACT_TYPE,
    payload: product,
  };
};

export const payment_PrdCartAct = (value) => {
  return {
    type: stateConst.PAYMENT_CART_ACT_TYPE,
    payload: value,
  };
};

//==========Product Redux Action SAGA==========//

export const get_AllProdAct = () => {
  return {
    type: stateConst.GET_ALL_PRD_ACT_TYPE,
    // payload: value,
  };
};

export const add_NewProductAct = (value) => {
  return {
    type: stateConst.ADD_PROD_ACT_TYPE,
    payload: value,
  };
};

export const update_ProdInfoAct = (value) => {
  return {
    type: stateConst.UPDATE_PROD_ACT_TYPE,
    payload: value,
  };
};

export const delete_ProdAct = (value) => {
  return {
    type: stateConst.DELETE_PROD_ACT_TYPE,
    payload: value,
  };
};

//==========Product Redux Action SAGA==========//
// export const impLoginStatus = (value) => {
//   return {
//     type: stateConst.IMPORT_LOGIN_USER_TYPE,
//     payload: value,
//   };
// };
