import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    if (count > 0) {
      setCount(count - 1);
    }
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
