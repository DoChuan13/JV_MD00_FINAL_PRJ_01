import { combineReducers } from "redux";

import productReducer from "./reducderList/productReducer";
import notifyReducer from "./reducderList/notifyReducer";
import userReducer from "./reducderList/userReducer";

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
  notify: notifyReducer,
});

export default rootReducer;
