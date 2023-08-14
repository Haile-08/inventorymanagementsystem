import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  product: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setProducts: (state, action) => {
      state.product = action.payload.product;
    },
  },
});

export const { setLogin, setLogout, setProducts } = authSlice.actions;
export default authSlice.reducer;
