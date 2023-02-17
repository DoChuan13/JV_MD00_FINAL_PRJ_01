import { createStore, applyMiddleware } from "redux";
import createSagaMidleware from "redux-saga";
import rootReducer from "../reducers";
import { rootSaga } from "../../../middleware/saga";

//Create Midleware
const sagaMidleWare = createSagaMidleware();

//Create Store
export const storeValue = createStore(
  rootReducer,
  applyMiddleware(sagaMidleWare)
);

//Run Root Sage to listenner
sagaMidleWare.run(rootSaga);
