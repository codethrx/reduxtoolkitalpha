import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import { inputReducer } from "./inputSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    input: inputReducer,
  },
});

export default store;
