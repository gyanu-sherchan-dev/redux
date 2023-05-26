import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <section>
      <p>{count}</p>
      <div className="btn1">
        <button className="dec" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="inc" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>

      <div className="btn2">
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
