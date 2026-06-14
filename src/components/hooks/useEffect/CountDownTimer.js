import { useEffect, useState } from "react";

function CountDownTimer({ initialCount }) {
  const [count, setCount] = useState(Number(initialCount));

  useEffect(() => {
    if (count === 0) return;

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <p>{count === 0 ? "Time's up!" : `Count down: ${count}`}</p>
    </div>
  );
}

export default CountDownTimer;
