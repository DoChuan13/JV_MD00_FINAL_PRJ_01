const initState = { email: "", password: "", remember: false, typeUser: "" };

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "value":
      return;

    default:
      return state;
  }
};

export default loginReducer;
