import * as stateConst from "../../constants/stateConstants";

export const prFirstLoad = (value) => {
  return {
    type: stateConst.PR_FIRST_RELOAD_TYPE,
    payload: value,
  };
};

export const usFirstLoad = (value) => {
  return {
    type: stateConst.US_FIRST_RELOAD_TYPE,
    payload: value,
  };
};

export const impLoginStatus = (value) => {
  return {
    type: stateConst.IMPORT_LOGIN_USER_TYPE,
    payload: value,
  };
};
