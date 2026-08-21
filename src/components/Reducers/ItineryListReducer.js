import { useReducer, useState } from "react";

function itineryReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [...tasks, { id: action.id, text: action.text, done: false }];
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "toggled":
      return tasks.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t,
      );
    case "deleted":
      return tasks.filter((t) => t.id !== action.id);
    default:
      return tasks;
  }
}

const initialState = [];

export default function IntineryListReducer() {
  const [tasks, dispatch] = useReducer(itineryReducer, initialState);

  function handleAddTask(text) {
    dispatch({ type: "added", id: Date.now(), text: text, done: false });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleToggleTask(id) {
    dispatch({ type: "toggled", id: id });
  }

  function handleDeleteTask(id) {
    dispatch({ type: "deleted", id: id });
  }

  return (
    <div>
      <AddTask add={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

function AddTask({ add }) {
  const [name, setName] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    add(name);
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

function TaskList({ tasks, onChangeTask, onToggleTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onToggle, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleSave(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  let content;
  if (isEditing) {
    content = (
      <form onSubmit={handleSave}>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChange({ ...task, text: e.target.value });
          }}
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    content = (
      <>
        <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
          {task.text}
        </span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />
      {content}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </>
  );
}
