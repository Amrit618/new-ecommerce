import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import categoryReducer from "./categoryReducer";
import { productReducer } from "./productReducer";

const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
    categoryReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
