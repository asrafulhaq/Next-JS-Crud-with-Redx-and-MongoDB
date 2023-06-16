import getAllUser from "@/libs/getAllUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all users data
export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  //get response
  const response = await axios.get("http://localhost:3000/api/todo");

  // send data
  return response.data.todos;
});

// get all users data
export const createTodo = createAsyncThunk("todo/createTodo", async (data) => {
  //get response
  const response = await axios.post("http://localhost:3000/api/todo", data);

  // send data
  return response.data.todo;
});

// get all users data
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  //get response
  const response = await axios.delete(
    `http://localhost:3000/api/todo?id=${id}`
  );

  // send data
  return id;
});
