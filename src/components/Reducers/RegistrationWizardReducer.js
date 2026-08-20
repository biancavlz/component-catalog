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
