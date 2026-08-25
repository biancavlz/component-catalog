import Count from "../components/hooks/useState/Count";
import DarkMode from "../components/hooks/useState/DarkMode";
import SimpleForm from "../components/hooks/useState/SimpleForm";
import TodoList from "../components/hooks/useState/TodoList";
import UserProfileForm from "../components/hooks/useState/UserProfileForm";
import Steps from "../components/hooks/useState/Steps";
import Visibility from "../components/hooks/useState/Visibility";
import HeaderCard from "../components/HeaderCard";

function UseState() {
  return (
    <section>
      <h1>useState hook</h1>

      <HeaderCard text={"Counter"}>
        <Count />
      </HeaderCard>

      <HeaderCard text={"DarkMode"}>
        <DarkMode />
      </HeaderCard>

      <HeaderCard text={"Simple Form"}>
        <SimpleForm />
      </HeaderCard>
      <HeaderCard text={"Todo list - array manipulation"}>
        <TodoList />
      </HeaderCard>

      <HeaderCard text={"User Profile form - object manipulation"}>
        <UserProfileForm />
      </HeaderCard>

      <HeaderCard text={"Steps - PrevState"}>
        <Steps />
      </HeaderCard>

      <HeaderCard text={"Visibility"}>
        <Visibility />
      </HeaderCard>
    </section>
  );
}

export default UseState;
