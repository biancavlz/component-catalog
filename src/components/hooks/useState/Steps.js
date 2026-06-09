import { useState } from "react";

function Steps() {
  const [step, setStep] = useState(0);

  function increment() {
    setStep((prevStep) => prevStep + 1);
  }

  function decrement() {
    setStep((prevStep) => prevStep - 1);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Step: {step}</p>
    </div>
  );
}

export default Steps;
