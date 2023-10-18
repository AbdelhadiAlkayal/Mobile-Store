import { createSlice } from "@reduxjs/toolkit";

const initialValue = { cartIsVisible: false };
const uiSlice = createSlice({
  name: "uiSlice",
  initialState: initialValue,
  reducers: {
    toggleCartVisibility(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;
