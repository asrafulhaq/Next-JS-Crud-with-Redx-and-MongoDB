import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, fetchTodos } from "./todoApi";

// create slice
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((data) => data._id != action.payload);
      });
  },
});

// selectors
export const selectTodo = (state) => state.todo;
// actions
export const {} = todoSlice.actions;
// reducer
export default todoSlice.reducer;
