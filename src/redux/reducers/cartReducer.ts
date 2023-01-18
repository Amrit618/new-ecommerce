import { Category } from "@material-ui/icons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types/Products";

const initialState: Cart = {
  products: [],
  total: 0,
  totalItem: 0,
  cartQuantity: 0,
  quantity: 1,
  
};

const cartSlicer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Cart>) {
      const itemIndex = state.products.findIndex(
        (item: { id: any }) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (action.payload.quantity > 1) {
          state.products[itemIndex].quantity =
            state.products[itemIndex].quantity + action.payload.quantity;
        }
        if (
          action.payload.quantity === undefined ||
          action.payload.quantity === 0 ||
          action.payload.quantity === 1
        ) {
          state.products[itemIndex].quantity++;
        }
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity ? action.payload.quantity : 1,
          direction: "",
          title: "",
          description: "",
          price: 0,
          images: [],
          category: Category,
        });
      }
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    decrement(state, action: PayloadAction<string>) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload
      );
      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity--;
      } else {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart, deleteItem, decrement } = cartSlicer.actions;
export default cartSlicer.reducer;
