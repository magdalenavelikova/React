import { useState } from "react";

export default function Counter(props) {
  const getTitle = (count) => {
    switch (count) {
      case 10:
        return "You reached TEN";
      case 20:
        return "You reached TWENTY";
      default:
        return "Counter";
    }
  };
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
      <h3 style={{ fontSize: counter + 10 + "px" }}>
        {counter > 20 ? "Please clear!" : getTitle(counter)}: {counter}
      </h3>
      {counter < 21 ? (
        <button onClick={onButtonClickDecrement}>+</button>
      ) : null}
      <button onClick={onButtonClickIncrement}>-</button>
      {props.canReset && <button onClick={onButtonClickClear}>Clear</button>}
    </div>
  );
}
