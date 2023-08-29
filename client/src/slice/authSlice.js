import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  product: [],
  order: [],
  customer: [],
  storeData: [],
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
      state.product = [];
      state.order = [];
      state.customer = [];
      state.storeData = [];
    },
    setProducts: (state, action) => {
      state.product = action.payload.product;
    },
    setOrders: (state, action) => {
      state.order = action.payload.order;
    },
    setCustomer: (state, action) => {
      state.customer = action.payload.customer;
    },
    setStoreData: (state, action) => {
      state.storeData = action.payload.storeData;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const {
  setLogin,
  setLogout,
  setProducts,
  setOrders,
  setCustomer,
  setStoreData,
  setUser,
} = authSlice.actions;
export default authSlice.reducer;
