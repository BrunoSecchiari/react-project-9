import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItem(state, action) {
      const incomingItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === incomingItem.id
      );

      if (!existingItem) {
        state.items.push({
          id: incomingItem.id,
          name: incomingItem.title,
          quantity: 1,
          price: incomingItem.price,
          totalPrice: incomingItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
