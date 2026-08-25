import { useReducer } from "react";

function themeReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return state === "light" ? "dark" : "light";
    default:
      throw new Error("Unknown action");
  }
}

const initialState = "light";

function ToggleThemeReducer() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <div
      style={{
        background: state === "light" ? "white" : "darkgray",
        color: state === "light" ? "darkgray" : "white",
      }}
    >
      <h2>Theme: {state}</h2>
      <button onClick={() => dispatch({ type: "toggle" })}>change theme</button>
    </div>
  );
}

export default ToggleThemeReducer;
