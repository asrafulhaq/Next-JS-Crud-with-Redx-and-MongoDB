import { createSlice } from "@reduxjs/toolkit";

// create slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {},
});

// selectors

// actions
export const {} = counterSlice.actions;
// reducer
export default counterSlice.reducer;
