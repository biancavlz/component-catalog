import { useEffect, useState } from "react";

function MessageByCondition() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > 5) {
      setMessage("You reach 5");
    }
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{message}</p>
    </div>
  );
}

export default MessageByCondition;
