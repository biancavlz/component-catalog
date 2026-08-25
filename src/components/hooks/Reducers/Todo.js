import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

const initialState = {
  todos: [],
};

export default function Todo() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [input, setInput] = useState("");

  function handleAddTodo() {
    if (!input.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: input,
    });

    setInput("");
  }

  return (
    <div>
      <h2>Todo List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TODO",
                  payload: todo.id,
                })
              }
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: todo.id,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
