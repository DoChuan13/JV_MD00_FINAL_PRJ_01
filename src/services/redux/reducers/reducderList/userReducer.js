import * as stateConst from "../../../constants/stateConstants";

const initState = [];

const userReducer = (state = initState, action) => {
  let modifedUser = action.payload;
  switch (action.type) {
    case stateConst.GET_USER_SUCC_TYPE:
      state = [...action.payload];
      return state;

    default:
      return state;
  }
};

export default userReducer;
