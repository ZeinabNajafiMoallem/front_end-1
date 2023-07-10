import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
  totalFavoriteAmount: 0,
  totalFavoriteQuantity: 0,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItam: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.favoriteItems.find(
        (item) => item.id === newItem.id
      );
      state.totalFavoriteQuantity++;

      if (!existingItem) {
        state.favoriteItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalFavoriteAmount = state.favoriteItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.favoriteItems.find((item) => item.id === id);

      if (existingItem) {
        state.favoriteItems = state.favoriteItems.filter((item) => item.id !== id);
        state.totalFavoriteQuantity = state.totalFavoriteQuantity - existingItem.quantity;
      }

      state.totalFavoriteAmount = state.favoriteItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
