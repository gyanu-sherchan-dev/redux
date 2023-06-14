import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/CounterSlice";

function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incr = () => {
    // setCount(count + 1); //state mngt using useState
    dispatch(increment());
  };

  const decr = () => {
    // if (count > 0) {
    //   setCount(count - 1);
    // }

    dispatch(decrement());
  };
  return (
    <div className="App">
      <h1>Fresh code:</h1>

      <h2>{count}</h2>
      <div>
        <button className="btn" onClick={incr}>
          +
        </button>

        <button className="btn" onClick={decr}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
