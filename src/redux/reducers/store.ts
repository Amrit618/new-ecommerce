import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../reducers/cartReducer";
import { productReducer } from "./productReducer";
import { profileReducer } from "./profileReducer";

const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
