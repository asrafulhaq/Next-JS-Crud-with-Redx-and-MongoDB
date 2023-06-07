import { createSlice } from "@reduxjs/toolkit";

// create slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state, action) => {
      state.count--;
    },
  },
});

// selectors
export const selectCount = (state) => state.counter;
// actions
export const { increment, decrement } = counterSlice.actions;
// reducer
export default counterSlice.reducer;
