import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { offsetLimit, Product, ProductReducerType } from "../../types/Products";
import axios from "axios";

const initialState: ProductReducerType = {
  productList: [],
};

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async ({ offset, limit }: offsetLimit) => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteProductAsync = createAsyncThunk(
  "deleteProduct",
  async (productId: string) => {
    try {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      return productId;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const AddProductAsync = createAsyncThunk(
  "deleteProduct",
  async (productId: string) => {
    try {
      const data = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      return productId;
    } catch (error: any) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product reducer",
  initialState: initialState,
  reducers: {
    sortByCategory: (state, action: PayloadAction<string>) => {
      state.productList = state.productList.filter(
        (product) => product.category.name === action.payload
      );
    },
    sortByPriceAsc: (state, action) => {
      state.productList = state.productList.sort((a, b) => a.price - b.price);
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.productList.push(action.payload);
      /* state.sortedList.push(action.payload) */
    },
    /*         deleteProduct: (state, action:PayloadAction<Product>) => {
            console.log('delete function is called')
            state.productList.filter(product=>product.id!==action.payload.id)
            return state
        } */
  },

  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.productList = action.payload;
          /* state.sortedList = action.payload */
        }
      )
      .addCase(
        deleteProductAsync.fulfilled,
        (state, action: PayloadAction<string | undefined>) => {
          /* state.filter(product => product.id !== action.payload) */
        }
      );
  },
});
export const productReducer = productSlice.reducer;
export const { sortByCategory, sortByPriceAsc, addProduct } =
  productSlice.actions;
