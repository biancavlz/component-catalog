export const focusElement = `import { useRef } from "react";
function FocusElement() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" placeholder="Focus me with a button" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}

export default FocusElement;
`;

export const timer = `import { useRef, useState } from "react";
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
`;
