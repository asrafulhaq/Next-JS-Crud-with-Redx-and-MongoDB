"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";

const CounterPage = () => {
  const { count } = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <hr />
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(increment())}>++</button>
    </div>
  );
};

export default CounterPage;
