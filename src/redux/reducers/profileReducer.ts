import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ProfileReducerState } from "../../types/profile";

const initialState: ProfileReducerState = {
  profileList: [],
};

export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  try {
    const response = await axios.get("https://api.escuelajs.co/api/v1/users");

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const profileSlice = createSlice({
  name: "profile reducer",
  initialState: initialState,
  reducers: {
    login: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.profileList = action.payload;
      return state;
    });
  },
});
export const profileReducer = profileSlice.reducer;
export const { login } = profileSlice.actions;
