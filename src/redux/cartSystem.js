import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
};

const cartSystem = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        const tempvar = { ...action.payload, quantity: 1 };
        state.cart.push(tempvar);
      }
    },
    RemoveProduct: (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (findIndex >= 0) {
        state.quantity -= state.cart[findIndex].quantity; 
        state.cart.splice(findIndex, 1); 
      }
    },
  },
});

export const { AddCart, RemoveProduct } = cartSystem.actions;
export default cartSystem.reducer;
