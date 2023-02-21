//Install Root Saga to listenner actions, then call
import { takeLatest, all } from "redux-saga/effects";
import * as stateConst from "../../services/constants/stateConstants";

import * as userSaga from "./userSaga/userSaga";
import * as productSaga from "./productSaga/productSaga";

export const rootSaga = function* rootSaga() {
  yield all([
    //User
    takeLatest(stateConst.GET_All_USR_ACT_TYPE, userSaga.getAllUserSaga),
    takeLatest(stateConst.BLOCK_USER_ACT_TYPE, userSaga.blockUserSaga),
    //Favorite
    takeLatest(stateConst.ADD_TO_FAV_ACT_TYPE, userSaga.addToFavoriteSaga),
    //Cart
    takeLatest(stateConst.ADD_TO_CART_ACT_TYPE, userSaga.addPrdToCartSaga),
    takeLatest(stateConst.REMOVE_FR_CART_ACT_TYPE, userSaga.rePrdFromCartSaga),
    takeLatest(stateConst.PAYMENT_CART_ACT_TYPE, userSaga.payPrdAllCartSaga),
    takeLatest(stateConst.CANCEL_PAYMENT_ACT_TYPE, userSaga.cancelPaymentSaga),

    //Payment
    takeLatest(stateConst.CONFIRM_PAYMENT_ACT_TYPE, userSaga.confPaymentSaga),

    //Product
    takeLatest(stateConst.GET_ALL_PRD_ACT_TYPE, productSaga.getAllPrdSaga),
    takeLatest(stateConst.ADD_PROD_ACT_TYPE, productSaga.addNewPrdSaga),
    takeLatest(stateConst.UPDATE_PROD_ACT_TYPE, productSaga.updatePrdInfoSaga),
    takeLatest(stateConst.DELETE_PROD_ACT_TYPE, productSaga.deletePrdSaga),
  ]);
};
