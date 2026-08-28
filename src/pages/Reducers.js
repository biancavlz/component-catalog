import BankAccountReducer from "../components/hooks/Reducers/bankAccountReducer";
import ShoppingCartReducer from "../components/hooks/Reducers/ShoppingCartReducer";
import TodoListReducer from "../components/hooks/Reducers/TodoListReducer";
import LoginFormReducer from "../components/hooks/Reducers/LoginFormReducer";
import ToggleThemeReducer from "../components/hooks/Reducers/TogglingThemeReducer";
import AccordionControlReducer from "../components/hooks/Reducers/AccordionControlReducer";
import StepWizardReducer from "../components/hooks/Reducers/StepWizard";
import RegistrationWizardReducer from "../components/hooks/Reducers/RegistrationWizardReducer";
import IntineryListReducer from "../components/hooks/Reducers/ItineryListReducer";
import HeaderCard from "../components/HeaderCard";
import {
  accordionControllerCode,
  bankAccountCode,
  intineryList,
  loginFormCode,
  shoppingCartCode,
  todoListCode,
  toggleThemeCode,
  stepWizardCode,
  registrationWizardCode,
} from "../components/hooks/Reducers/codes";

function Reducers() {
  return (
    <section>
      <h1>useReducer hook</h1>
      <HeaderCard text={"Bank Account"} code={bankAccountCode}>
        <BankAccountReducer />
      </HeaderCard>

      <HeaderCard text={"Shipping Cart"} code={shoppingCartCode}>
        <ShoppingCartReducer />
      </HeaderCard>

      <HeaderCard text={"To-do list"} code={todoListCode}>
        <TodoListReducer />
      </HeaderCard>
      <HeaderCard text={"Login form submission"} code={loginFormCode}>
        <LoginFormReducer />
      </HeaderCard>

      <HeaderCard text={"Theme toggle"} code={toggleThemeCode}>
        <ToggleThemeReducer />
      </HeaderCard>
      <HeaderCard text={"Accordion control"} code={accordionControllerCode}>
        <AccordionControlReducer />
      </HeaderCard>
      <HeaderCard text={"Step wizard"} code={stepWizardCode}>
        <StepWizardReducer />
      </HeaderCard>
      <HeaderCard
        text={"Registration wizard"}
        code={registrationWizardCode}
      >
        <RegistrationWizardReducer />
      </HeaderCard>
      <HeaderCard text={"Itinerary list"} code={intineryList}>
        <IntineryListReducer />
      </HeaderCard>
    </section>
  );
}

export default Reducers;
