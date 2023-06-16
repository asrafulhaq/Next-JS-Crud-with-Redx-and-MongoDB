import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/counter/counterSlice";
import userReducer from "@/app/user/userSlice";
import todoReducer from "@/app/todo/todoSlice";

// create store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    todo: todoReducer,
  },
  devTools: true,
});

// export store
export default store;
