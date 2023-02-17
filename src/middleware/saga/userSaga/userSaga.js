import { call, put } from "redux-saga/effects";
import { getDatabase } from "../../api/methods/methodAxios";
import { users } from "../../../config/resourcesAxiosConfig";
import * as stateAct from "../../../services/redux/actions/stateActions";

export function* getAllUserSata() {
  let userList = yield call(getDatabase, users, "");
  yield put(stateAct.getAllUserReducer(userList));
  // action()
}
