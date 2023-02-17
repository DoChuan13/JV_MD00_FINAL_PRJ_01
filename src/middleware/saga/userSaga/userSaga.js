import { call, put } from "redux-saga/effects";
import * as axios from "../../api/methods/methodAxios";
import { users } from "../../../config/resourcesAxiosConfig";
import * as stateAct from "../../../services/redux/actions/stateActions";

export function* getAllUserSata() {
  let userList = yield call(axios.getDatabase, users, "");
  yield put(stateAct.getAllUserReducer(userList));
}

export function* blockUserSaga(action) {
  let value = action.payload;
  let id = value.id;
  yield call(axios.putDatabase, users, id, value);
  yield getAllUserSata();
}
