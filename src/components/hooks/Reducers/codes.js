export const accordionControllerCode = `
import { useReducer } from "react";

function accordionReducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "toggle":
      return state === action.id ? null : action.id;
    default:
      throw new Error("unknown error");
  }
}

function AccordionControlReducer() {
  const [openSection, dispatch] = useReducer(accordionReducer, null);

  console.log("open section value");
  console.log(openSection);

  const sections = [
    {
      id: 1,
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 1",
    },
    {
      id: 2,
      title: "Section 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 2",
    },
    {
      id: 3,
      title: "Section 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 3",
    },
    {
      id: 4,
      title: "Section 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 4",
    },
  ];
  return (
    <div>
      {sections.map((section) => (
        <div key={section.id}>
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => dispatch({ type: "toggle", id: section.id })}
          >
            {section.title}
          </h3>
          {openSection === section.id && <p>{section.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default AccordionControlReducer;
`;

export const bankAccountCode = `
import { useReducer } from "react";

function accountReducer(state, action) {
 
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.amount };
    case "withdraw":
      return { ...state, balance: state.balance - action.amount };
    case "reset":
      return { balance: 0 };
    default:
      throw new Error("Unknow action");
  }
}

const initialState = {
  balance: 0,
};

function BankAccountReducer() {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  return (
    <div>
      <p>Balance: \${state.balance}</p>
      <button onClick={() => dispatch({ type: "deposit", amount: 100 })}>
        Deposit
      </button>

      <button onClick={() => dispatch({ type: "withdraw", amount: 50 })}>
        Withdraw
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default BankAccountReducer;
`;

export const intineryList = `import { useReducer, useState } from "react";

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
`;

export const loginFormCode = `
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
`;

export const shoppingCartCode = `
import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      const existingItem = state.find((item) => item.id === action.item.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + action.item.quantity }
            : item,
        );
      } else {
        return [...state, action.item];
      }
    case "remove":
      return state.filter((item) => item.id !== action.item.id);
    case "update":
      return state.map((item) =>
        item.id === action.item.id
          ? { ...item, quantity: action.item.quantity }
          : item,
      );
    case "clear":
      return [];
    default:
      throw new Error("Unknown action");
  }
}

const initialState = [];

function ShippingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const items = [
    { id: 1, name: "apple", price: 1.5 },
    { id: 2, name: "banana", price: 3 },
    { id: 3, name: "Cherries", price: 5 },
  ];
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - {item.price.toFixed(2)}
          </p>
          <button
            onClick={() =>
              dispatch({ type: "add", item: { ...item, quantity: 1 } })
            }
          >
            Add to cart
          </button>
          <button
            onClick={() =>
              dispatch({ type: "add", item: { ...item, quantity: -1 } })
            }
          >
            Remove to cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.length > 0 ? (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - \${item.price.toFixed(2)} x {item.quantity}
                <button
                  onClick={() =>
                    dispatch({ type: "remove", item: { id: item.id } })
                  }
                >
                  Remove
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "update",
                      item: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: "update",
                      item: {
                        id: item.id,
                        quantity: Math.max(1, item.quantity - 1),
                      },
                    })
                  }
                >
                  -
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Nothig in your cart yet</p>
      )}
    </div>
  );
}

export default ShippingCart;
`;

export const todoListCode = `
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
`;

export const toggleThemeCode = `
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
`;

export const stepWizardCode = `
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
`;

export const registrationWizardCode = `
import { useEffect, useReducer, useRef } from "react";

const stepLabels = {
  1: "Personal Information",
  2: "Email",
  3: "Password",
};
const totalSteps = Object.keys(stepLabels).length;

const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    password: "",
  },
};

function registrationReducer(state, action) {
  switch (action.type) {
    case "nextStep":
      return { ...state, currentStep: state.currentStep + 1 };
    case "previousStep":
      return { ...state, currentStep: state.currentStep - 1 };
    case "updateField":
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
      };
    case "reset":
      return { initialState };
    default:
      return state;
  }
}

function RegistrationWizardReducer() {
  const [state, dispatch] = useReducer(registrationReducer, initialState);
  const { currentStep, formData } = state;
  const legendRef = useRef(null);

  useEffect(() => {
    legendRef.current?.focus();
  }, [currentStep]);

  function handleSubmit(e) {
    e.preventDefault();

    if (currentStep < 3) {
      dispatch({ type: "nextStep" });
      return;
    }
    console.log("Submitting:", formData);
  }

  return (
    <form onSubmit={handleSubmit} aria-labelledby="wizard-heading">
      <h1 id="wizard-heading">Registration</h1>

      <ol aria-label="Progress">
        {Object.entries(stepLabels).map(([step, label]) => (
          <li
            key={step}
            aria-current={Number(step) === currentStep ? "step" : undefined}
          >
            {label}
          </li>
        ))}
      </ol>

      <div
        aria-live="polite"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      >
        Step {currentStep} of {totalSteps}: {stepLabels[currentStep]}
      </div>

      {currentStep === 1 && (
        <fieldset>
          <legend ref={legendRef} tabIndex={-1}>
            Personal Information
          </legend>

          <label htmlFor="name">Name</label>

          <input
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={(event) =>
              dispatch({
                type: "updateField",
                field: "name",
                value: event.target.value,
              })
            }
            required
            aria-required="true"
          />
        </fieldset>
      )}

      {currentStep === 2 && (
        <fieldset>
          <legend ref={legendRef} tabIndex={-1}>
            Email
          </legend>

          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) =>
              dispatch({
                type: "updateField",
                field: "email",
                value: event.target.value,
              })
            }
            required
            aria-required="true"
          />
        </fieldset>
      )}

      {currentStep === 3 && (
        <fieldset>
          <legend ref={legendRef} tabIndex={-1}>
            Password
          </legend>

          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={(event) =>
              dispatch({
                type: "updateField",
                field: "password",
                value: event.target.value,
              })
            }
            required
            aria-required="true"
          />
        </fieldset>
      )}

      <div>
        {currentStep > 1 && (
          <button
            type="button"
            onClick={() => dispatch({ type: "previousStep" })}
          >
            Previous
          </button>
        )}

        <button type="submit">{currentStep === 3 ? "Submit" : "Next"}</button>
      </div>
    </form>
  );
}

export default RegistrationWizardReducer;
`;
