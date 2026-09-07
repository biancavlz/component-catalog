import { useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const timerId = useRef(null);

  function startTimer() {
    if (!timerId.current) {
      timerId.current = setInterval(() => setCount((prev) => prev + 1), 1000);
    }
  }

  function stopTimer() {
    clearInterval(timerId.current);
    timerId.current = null;
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
