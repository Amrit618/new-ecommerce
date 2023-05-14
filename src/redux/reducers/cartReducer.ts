import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, Product } from '../../types/Products';

const initialState: Cart = {
  products: [],
  total: 0,
  totalItem: 0,
  cartQuantity: 0,
  id: '',
  quantity: undefined
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const itemIndex = state.products.findIndex(
        (item: Product) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (action.payload.quantity && action.payload.quantity > 0) {
          state.products[itemIndex].quantity += action.payload.quantity;
        } else {
          state.products[itemIndex].quantity++;
        }
      } else {
        state.products.push({
          ...action.payload,
          quantity: action.payload.quantity ? action.payload.quantity : 1,
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
      if (itemIndex >= 0) {
        if (state.products[itemIndex].quantity > 1) {
          state.products[itemIndex].quantity--;
        } else {
          state.products.splice(itemIndex, 1);
        }
      }
    },
  },
});

export const { addToCart, deleteItem, decrement } = cartSlice.actions;
export default cartSlice.reducer;
