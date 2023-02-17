import * as stateConst from "../../../constants/stateConstants";

const initState = [];

const userReducer = (state = initState, action) => {
  let modifedUser = action.payload;
  switch (action.type) {
    case stateConst.GET_USER_SUCC_TYPE:
      state = [...action.payload];
      return state;

    case stateConst.BLOCK_USER_ACTION_TYPE:
      // console.log("Block User in reducer", modifedUser);
      state = state.map((user) => {
        if (user.id === modifedUser.id) {
          return modifedUser;
        } else {
          return user;
        }
      });
      return state;

    default:
      return state;
  }
};

export default userReducer;
