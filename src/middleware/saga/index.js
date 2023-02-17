//Install Root Saga to listenner actions, then call
import { takeLatest, all } from "redux-saga/effects";
import * as stateConst from "../../services/constants/stateConstants";

import * as userSaga from "./userSaga/userSaga";
import * as productSaga from "./productSaga/productSaga";

export const rootSaga = function* rootSaga() {
  yield all([
    //User
    takeLatest(stateConst.GET_All_USR_ACT_TYPE, userSaga.getAllUserSata),
    takeLatest(stateConst.BLOCK_USER_ACT_TYPE, userSaga.blockUserSaga),
    takeLatest(stateConst.ADD_TO_CART_ACT_TYPE, userSaga.addPrdToCart),

    //Product
    takeLatest(stateConst.GET_ALL_PRD_ACT_TYPE, productSaga.getAllPrdSaga),
    takeLatest(stateConst.ADD_PROD_ACT_TYPE, productSaga.addNewPrdSaga),
    takeLatest(stateConst.UPDATE_PROD_ACT_TYPE, productSaga.updatePrdInfoSaga),
    takeLatest(stateConst.DELETE_PROD_ACT_TYPE, productSaga.deletePrdSaga),
  ]);
};
