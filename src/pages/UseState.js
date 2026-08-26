import Count from "../components/hooks/useState/Count";
import DarkMode from "../components/hooks/useState/DarkMode";
import SimpleForm from "../components/hooks/useState/SimpleForm";
import TodoList from "../components/hooks/useState/TodoList";
import UserProfileForm from "../components/hooks/useState/UserProfileForm";
import Steps from "../components/hooks/useState/Steps";
import Visibility from "../components/hooks/useState/Visibility";
import HeaderCard from "../components/HeaderCard";
import {
  countCode,
  darkModeCode,
  simpleFormCode,
  stepsCode,
  todoListCode,
  userProfileFormCode,
  visibilityCode,
} from "../components/hooks/useState/codes";

function UseState() {
  return (
    <section>
      <h1>useState hook</h1>

      <HeaderCard text={"Counter"} code={countCode}>
        <Count />
      </HeaderCard>

      <HeaderCard text={"DarkMode"} code={darkModeCode}>
        <DarkMode />
      </HeaderCard>

      <HeaderCard text={"Simple Form"} code={simpleFormCode}>
        <SimpleForm />
      </HeaderCard>
      <HeaderCard text={"Todo list - array manipulation"} code={todoListCode}>
        <TodoList />
      </HeaderCard>

      <HeaderCard
        text={"User Profile form - object manipulation"}
        code={userProfileFormCode}
      >
        <UserProfileForm />
      </HeaderCard>

      <HeaderCard text={"Steps - PrevState"} code={stepsCode}>
        <Steps />
      </HeaderCard>

      <HeaderCard text={"Visibility"} code={visibilityCode}>
        <Visibility />
      </HeaderCard>
    </section>
  );
}

export default UseState;
