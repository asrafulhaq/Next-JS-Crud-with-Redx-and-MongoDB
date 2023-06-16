import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./userApi";

// create slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// selectors
export const selectUser = (state) => state.user;
// actions
export const {} = userSlice.actions;
// reducer
export default userSlice.reducer;
