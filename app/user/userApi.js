import getAllUser from "@/libs/getAllUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get all users data
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  //get response
  const response = await axios.get("http://localhost:3000/api/user");

  // send data
  return response.data.users;
});

// get all users data
export const createUsers = createAsyncThunk(
  "user/createUsers",
  async (data) => {
    //get response
    const response = await axios.post("http://localhost:3000/api/user", data);

    // send data
    return response.data.user;
  }
);
