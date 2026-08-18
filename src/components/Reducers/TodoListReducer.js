import { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    case "delete":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error("Unknown action");
  }
}

const initialState = [];

function TodoListReducer() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => dispatch({ type: "add", text: text })}
      >
        Add to do
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            key={todo.id}
          >
            {todo.text}
            <button onClick={() => dispatch({ type: "toggle", id: todo.id })}>
              Toggle
            </button>
            <button onClick={() => dispatch({ type: "delete", id: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListReducer;
