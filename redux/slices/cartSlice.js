import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, qty, image } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        let qty = 1;
        state.push({ id, title, price, qty, image });
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      state = state.filter((item) => item.id !== cartId);
      return state;
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem) {
        existingItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.find((item) => item.id === cartId);
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      }else if(existingItem.qty==1){    
        state = state.filter((item) => item.id !== cartId);
      }
      return state;
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
