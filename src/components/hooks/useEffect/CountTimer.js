import { useEffect, useState } from "react";

function CountTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      console.log("Stopped after 5 seconds");
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return <div>count: {count}</div>;
}

export default CountTimer;
