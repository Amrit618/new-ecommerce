import { ProductionQuantityLimits } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Product, ProductInCart } from "../../types/Products";

const initialState: Cart = {
    products: [],
    total: 0,
    totalItem: 0,
    cartQuantity: 0,
    quantity: undefined
};

export const cartSlice = createSlice({
  name: "cart reducer",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      const tempProduct = { ...action.payload, cartQuantity: 1 };
      state.products.push(tempProduct);
    },
    increaseProduct: (state, action: PayloadAction<string>) => {
    },
    decreaseProduct: (state, action: PayloadAction<string>) => {},
  },
  extraReducers: (builder) => {},
});
export const cartReducer = cartSlice.reducer;
export const { addToCart, increaseProduct, decreaseProduct } =
  cartSlice.actions;
