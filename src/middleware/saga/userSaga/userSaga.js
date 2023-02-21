import { call, put } from "redux-saga/effects";
import * as axios from "../../api/methods/methodAxios";
import { users, products } from "../../../config/resourcesAxiosConfig";
import * as stateAct from "../../../services/redux/actions/stateActions";
import { checkLoginStatus } from "../../../utils/functions/commonFunctions";
import CartItem from "../../../services/class/users/Cart";
import Purchased from "../../../services/class/users/Purchased";

export function* getAllUserSaga() {
  let userList = yield call(axios.getDatabase, users, "");
  yield put(stateAct.getAllUserReducer(userList));
}

export function* blockUserSaga(action) {
  let value = action.payload;
  let id = value.id;
  yield call(axios.putDatabase, users, id, value);
  yield getAllUserSaga();
}

export function* addPrdToCartSaga(action) {
  let user = yield call(checkLoginStatus);
  let userList = yield call(axios.getDatabase, users, "");
  let product = action.payload;

  let userCart = [];

  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === user.id) {
      userCart = [...userList[i].cart];
      let newItem = new CartItem(
        product.id,
        product.productName,
        1,
        product.productPrice
      );
      if (userList[i].cart.length === 0) {
        userCart.push(newItem);
        break;
      }
      for (let j = 0; j < userList[i].cart.length; j++) {
        if (userList[i].cart[j].id === product.id) {
          userCart[j].productName = product.productName;
          userCart[j].productPrice = product.productPrice;
          userCart[j].buyQuantity += 1;
          break;
        } else if (j === userList[i].cart.length - 1) {
          userCart.push(newItem);
        }
      }
      break;
    }
  }

  yield call(axios.patchDatabase, users, user.id, { cart: userCart });
  yield getAllUserSaga();
}

export function* editPrdCartSaga(action) {
  console.log("Log in Edit Saga");
  yield addPrdToCartSaga(action);
}

export function* rePrdFromCartSaga(action) {
  let user = yield call(checkLoginStatus);
  let userList = yield call(axios.getDatabase, users, "");
  let product = action.payload;

  let userCart = [];
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === user.id) {
      userCart = userList[i].cart.filter((item) => {
        return item.id !== product.id;
      });
      break;
    }
  }

  yield call(axios.patchDatabase, users, user.id, { cart: userCart });
  yield getAllUserSaga();
}

export function* payPrdAllCartSaga(action) {
  let user = yield call(checkLoginStatus);
  let userList = yield call(axios.getDatabase, users, "");
  let productList = yield call(axios.getDatabase, products, "");

  let userCart = [];
  let currentPurchased = [];

  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === user.id) {
      userCart = userList[i].cart;
      currentPurchased = userList[i].purchased;
      break;
    }
  }

  let paymentCart = userCart.map((item) => {
    let paymenItem;
    for (let i = 0; i < productList.length; i++) {
      if (item.id === productList[i].id) {
        paymenItem = {
          ...item,
          productCode: productList[i].productCode,
          productName: productList[i].productName,
          productTitle: productList[i].productTitle,
          productDesc: productList[i].productDesc,
          productImage: productList[i].productImage,
          productPrice: productList[i].productPrice,
        };
        break;
      }
    }
    return paymenItem;
  });
  let date = new Date();
  let orderCode =
    "SHOES" +
    "-" +
    user.id +
    "-" +
    currentPurchased.length +
    "-" +
    date.getFullYear() +
    (date.getMonth() + 1) +
    date.getDate() +
    date.getHours() +
    date.getMinutes() +
    date.getSeconds();
  let purchasedOrder = new Purchased(
    orderCode,
    date,
    paymentCart,
    action.payload
  );
  yield call(axios.patchDatabase, users, user.id, {
    cart: [],
    purchased: [...currentPurchased, purchasedOrder],
  });
  yield getAllUserSaga();
}

export function* confPaymentSaga(action) {
  let userId = action.payload.id;
  let orderCode = action.payload.orderCode;
  let userList = yield call(axios.getDatabase, users, "");
  let userPurchasedList = [];
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === userId) {
      userPurchasedList = userList[i].purchased;
      break;
    }
  }
  let newPurchasedList = userPurchasedList.map((purchasedOrder) => {
    if (purchasedOrder.orderCode === orderCode) {
      return { ...purchasedOrder, status: "completed" };
    } else return purchasedOrder;
  });
  yield call(axios.patchDatabase, users, userId, {
    purchased: newPurchasedList,
  });
  yield getAllUserSaga();
}

export function* cancelPaymentSaga(action) {
  let userId = action.payload.id;
  let orderCode = action.payload.orderCode;
  let userList = yield call(axios.getDatabase, users, "");
  let userPurchasedList = [];
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === userId) {
      userPurchasedList = userList[i].purchased;
      break;
    }
  }
  let newPurchasedList = userPurchasedList.map((purchasedOrder) => {
    if (purchasedOrder.orderCode === orderCode) {
      return { ...purchasedOrder, status: "canceled" };
    } else return purchasedOrder;
  });
  yield call(axios.patchDatabase, users, userId, {
    purchased: newPurchasedList,
  });
  yield getAllUserSaga();
}
