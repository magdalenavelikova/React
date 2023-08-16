import React from "react";
export default function Timer(props) {
  const [seconds, setSeconds] = React.useState(props.start);
  //useEffect is better
  setTimeout(() => {
    //    setSeconds(seconds+1);
    // setSeconds((oldSeconds)=>oldSeconds+1);
    setSeconds((state) => state + 1);
  }, 1000);

  return <div>Time: {seconds} s</div>;
}
