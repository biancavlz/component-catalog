import { createContext, useContext, useReducer } from "react";

function CounterReducerUndContextAPI() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
export default CounterReducerUndContextAPI;

// Context
const CounterContext = createContext();
export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

// Reducer
const initialState = { count: 0 };
export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return initialState;
    default:
      break;
  }
}
