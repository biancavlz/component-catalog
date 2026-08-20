import { useReducer } from "react";

function stepReducer(state, action) {
  switch (action.type) {
    case "next":
      return { ...state, step: Math.min(state.step + 1, state.totalSteps) };
    case "previous":
      return { ...state, step: Math.max(state.step - 1, 1) };
    case "reset":
      return { ...state, step: 1 };
    default:
      throw new Error("Unknown action");
  }
}

const initialState = { step: 1, totalSteps: 3 };

function StepWizardReducer() {
  const [state, dispatch] = useReducer(stepReducer, initialState);

  return (
    <div>
      <h1>
        {state.step} of {state.totalSteps}
      </h1>
      <button
        onClick={() => dispatch({ type: "previous" })}
        disabled={state.step === 1}
      >
        Previous
      </button>
      <button
        onClick={() => dispatch({ type: "next" })}
        disabled={state.step === state.totalSteps}
      >
        Next
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default StepWizardReducer;
