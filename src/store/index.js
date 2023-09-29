import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
    },
  },
});

const store = configureStore();

export default store;
