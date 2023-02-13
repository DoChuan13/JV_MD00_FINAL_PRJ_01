import * as stateConst from "../../../constants/stateConstants";
// import * as axios from "../../../../middleware/api/methods/methodAxios";
import { products } from "../../../../config/resourcesAxiosConfig";

const initState = [];

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case stateConst.PR_FIRST_RELOAD_TYPE:
      state = action.payload;
      return state;

    case stateConst.UPDATE_PRODUCT_TYPE:
      state = state.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });
      return state;

    case stateConst.ADD_PRODUCT_TYPE:
      state = [...state, action.payload];
      return state;

    case stateConst.DELETE_PRODUCT_TYPE:
      console.log("Xóa san pham", action);
      console.log(products, action.payload.id);
      let deletedProduct = action.payload;
      state = state.filter((product) => {
        return product.productCode !== deletedProduct.productCode;
      });
      return state;

    default:
      return state;
  }
};

export default productReducer;
