import { call, put } from "redux-saga/effects";
import * as axios from "../../api/methods/methodAxios";
import * as resource from "../../../config/resourcesAxiosConfig";
import * as stateAct from "../../../services/redux/actions/stateActions";

export function* getAllPrdSaga() {
  let productList = yield call(axios.getDatabase, resource.products, "");
  yield put(stateAct.getAllProductReducer(productList));
}

export function* updatePrdInfoSaga(action) {
  let value = action.payload;
  let id = value.id;
  yield call(axios.putDatabase, resource.products, id, value);
  yield getAllPrdSaga();
}

export function* addNewPrdSaga(action) {
  yield call(axios.postDatabase, resource.products, "", action.payload);
  yield getAllPrdSaga();
}

export function* deletePrdSaga(action) {
  let id = action.payload.id;
  yield call(axios.deleteDatabase, resource.products, id);
  yield getAllPrdSaga();
}
