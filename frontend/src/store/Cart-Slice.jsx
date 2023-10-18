import { createSlice } from "@reduxjs/toolkit";

const initialCartValue = { items: [], totalQuantity: 0 };
const cartItem = createSlice({
  name: "cart",
  initialState: initialCartValue,
  reducers: {
    addOrLessQuantity(state, action) {
      const tempItem = { ...action.payload.item };

      const currentIndex = action.payload.index;

      action.payload.type === "ADD"
        ? tempItem.quantity++ && state.totalQuantity++
        : tempItem.quantity-- && state.totalQuantity--;

      if (tempItem.quantity <= 0)
        state.items = state.items.filter((_, index) => index !== currentIndex);
      else state.items[currentIndex] = tempItem;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.title,
          img: newItem.image,
        });
      } else {
        exisitingItem.quantity++;
      }
    },
    resetCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
    removeCartItems(state, action) {
      const currentIndex = action.payload.index;
      if (action.payload.type === "REMOVE") {
        state.items = state.items.filter((_, index) => index !== currentIndex);
        state.totalQuantity -= action.payload.item.quantity;
      }
    },
  },
});

export const cartAction = cartItem.actions;
export default cartItem;
