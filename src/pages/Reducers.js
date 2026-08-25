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

function Reducers() {
  return (
    <section>
      <h1>useReducer hook</h1>
      <HeaderCard text={"Bank Account"}>
        <BankAccountReducer />
      </HeaderCard>

      <HeaderCard text={"Shipping Cart"}>
        <ShoppingCartReducer />
      </HeaderCard>

      <HeaderCard text={"To-do list"}>
        <TodoListReducer />
      </HeaderCard>
      <HeaderCard text={"Login form submission"}>
        <LoginFormReducer />
      </HeaderCard>

      <HeaderCard text={"Theme toggle"}>
        <ToggleThemeReducer />
      </HeaderCard>
      <HeaderCard text={"Accordion control"}>
        <AccordionControlReducer />
      </HeaderCard>
      <HeaderCard text={"Step wizard"}>
        <StepWizardReducer />
      </HeaderCard>
      <HeaderCard text={"Registration wizard"}>
        <RegistrationWizardReducer />
      </HeaderCard>
      <HeaderCard text={"Itinerary list"}>
        <IntineryListReducer />
      </HeaderCard>
    </section>
  );
}

export default Reducers;
