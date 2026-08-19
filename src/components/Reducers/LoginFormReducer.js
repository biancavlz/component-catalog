import { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.field]: action.value };
    case "reset":
      return action.initialState;
    default:
      throw new Error("Unknown action type");
  }
}

const initialState = { name: "", email: "", password: "" };

function LoginFormReducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(state);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({
              type: "updateField",
              field: "name",
              value: e.target.value,
            })
          }
        />
      </label>
      <br />
      <label>
        email
        <input
          type="text"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "updateField",
              field: "email",
              value: e.target.value,
            })
          }
        />
      </label>
      <br />
      <label>
        password
        <input
          type="password"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "updateField",
              field: "password",
              value: e.target.value,
            })
          }
        />
      </label>
      <br />
      <button type="submit">Submit form</button>
      <button
        type="button"
        onClick={() => dispatch({ type: "reset", initialState: initialState })}
      >
        Reset form
      </button>
    </form>
  );
}

export default LoginFormReducer;
