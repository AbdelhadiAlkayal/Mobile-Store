import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./Ui-Slice";
import cartItem from "./Cart-Slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartItem.reducer },
});
export default store;
