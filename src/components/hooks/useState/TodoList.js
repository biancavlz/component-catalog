import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit" onClick={addTodo}>
        Add item
      </button>

      <ul>
        {todos.map((t) => {
          return <li key={t}>{t}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
