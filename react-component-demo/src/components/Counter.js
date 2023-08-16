import { useState } from "react";

export default function Counter(props) {
  const [counter, setCounter] = useState(0);
  
  const onButtonClick=(e)=>{
    setCounter(state=>state+1);
  };
  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={onButtonClick}>+</button>
    </div>
  );
}
