import { useState } from "react";

export default function Counter(props) {
  const [counter, setCounter] = useState(0);

  const onButtonClickDecrement = (e) => {
    setCounter((state) => state + 1);
  };
  const onButtonClickIncrement = (e) => {
    setCounter((state) => state + -1);
  };
  const onButtonClickClear = (e) => {
    setCounter(0);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={onButtonClickDecrement}>+</button>
      <button onClick={onButtonClickIncrement}>-</button>
      <button onClick={onButtonClickClear}>Clear</button>

    </div>
  );
}
