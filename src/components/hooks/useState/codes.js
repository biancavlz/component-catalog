export const countCode = `
import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button disabled={count <= 0} onClick={() => setCount(count - 1)}>
        -
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Count;
`;

export const darkModeCode = `import { useState } from "react";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default DarkMode;
`;

export const simpleFormCode = `
import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(\`submitted data:\${name} and \${email}\`);

    setName("");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">submit</button>
    </form>
  );
}

export default SimpleForm;
`;

export const stepsCode = `import { useState } from "react";

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

export default Steps;`;

export const todoListCode = `import { useState } from "react";

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
`;

export const userProfileFormCode = `import { useState } from "react";

function UserProfileForm() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  function handleProfile(e) {
    const { value, name } = e.target;

    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  }

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={profile.name}
        onChange={handleProfile}
      />
      <input
        type="text"
        name="age"
        placeholder="age"
        value={profile.age}
        onChange={handleProfile}
      />

      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
}

export default UserProfileForm;
`;

export const visibilityCode = `import { useState } from "react";

function Visibility() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "hide" : "show"} Text
      </button>
      {isVisible && <p>This is some text</p>}
    </div>
  );
}

export default Visibility;
`;
