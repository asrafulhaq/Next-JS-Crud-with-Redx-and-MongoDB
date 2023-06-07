import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/counter/counterSlice";

// create store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});

// export store
export default store;
