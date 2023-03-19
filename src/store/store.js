import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import { inputReducer } from "./inputSlice";
import { testReducer } from "./testProducts";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    input: inputReducer,
    test: testReducer,
  },
});

export default store;
