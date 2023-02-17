//Install Root Saga to listenner actions, then call
import { takeLatest, all } from "redux-saga/effects";
import * as stateConst from "../../services/constants/stateConstants";

import * as userSaga from "./userSaga/userSaga";
import * as productSaga from "./productSaga/productSaga";

export const rootSaga = function* rootSaga() {
  yield all([
    //User
    takeLatest(stateConst.GET_All_USR_TYPE, userSaga.getAllUserSata),

    //Product
    takeLatest(stateConst.GET_ALL_PRD_TYPE, productSaga.getAllPrdSaga),
    takeLatest(stateConst.ADD_PRODUCT_TYPE, productSaga.addNewPrdSaga),
    takeLatest(stateConst.UPDATE_PRODUCT_TYPE, productSaga.updatePrdInfoSaga),
    takeLatest(stateConst.DELETE_PRODUCT_TYPE, productSaga.deletePrdSaga),
  ]);
};
