import HeaderCard from "./components/HeaderCard";
import TipCalculator from "./components/tipCalcuator/TipCalculator";
import Rating from "./components/starRating/Rating";
import TextExpander from "./components/textExpander/TextExpander";
import CurrencyConverter from "./components/currency/CurrencyConverter";
import Locator from "./components/geoLocation/Locator";
import DateCounter from "./components/counter/DateCounter";
import BankAccount from "./components/bankAccount/BankAccount";
import Accordion from "./components/compoundComponents/accordion/Accordion";
import DarkModeButton from "./components/darkModeButton/DarkModeButton";
import { DarkModeProvider } from "./context/DarkModeContext";
import Todo from "./components/Reducers/Todo";
import InterviewPrep from "./components/interview/InterviewPrep";
import Count from "./components/hooks/useState/Count";
import DarkMode from "./components/hooks/useState/DarkMode";
import SimpleForm from "./components/hooks/useState/SimpleForm";
import TodoList from "./components/hooks/useState/TodoList";
import UserProfileForm from "./components/hooks/useState/UserProfileForm";
import Steps from "./components/hooks/useState/Steps";
import Visibility from "./components/hooks/useState/Visibility";
import ApiCall from "./components/hooks/useEffect/ApiCall";
import CountTimer from "./components/hooks/useEffect/CountTimer";
import SearchTerm from "./components/hooks/useEffect/SearchTerms";
import ResizeWindow from "./components/hooks/useEffect/ResizeWindow";
import PullApiCall from "./components/hooks/useEffect/PullApiCall";
import ApiCallWithProps from "./components/hooks/useEffect/ApiCallWithProps";
import LocalStorageName from "./components/hooks/useEffect/LocalStorageName";
import MessageByCondition from "./components/hooks/useEffect/MessageByCondition";

function App() {
  return (
    <div>
      <h1>Component Catalog</h1>
      <HeaderCard text={"Tip Calculator"}>
        <TipCalculator />
      </HeaderCard>

      <HeaderCard text={"Star Rating"}>
        <Rating
          maxRating={5}
          messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        />
      </HeaderCard>

      <HeaderCard text={"Expanded Text"}>
        <TextExpander
          collapsedNumWords={20}
          expandButtonText="Show text"
          collapseButtonText="Collapse text"
          buttonColor="#ff6622"
          expanded={true}
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans
          stepped foot on the moon or when rovers were sent to roam around on
          Mars.
        </TextExpander>
      </HeaderCard>

      <HeaderCard text={"Currency Converter"}>
        <CurrencyConverter />
      </HeaderCard>
      <HeaderCard text={"GPS Locator"}>
        <Locator />
      </HeaderCard>
      <HeaderCard text={"Date Counter"}>
        <DateCounter />
      </HeaderCard>

      <HeaderCard text={"Date Counter"}>
        <BankAccount />
      </HeaderCard>

      <HeaderCard text={"Compound Component"}>
        <h3>Accordion</h3>

        <Accordion>
          <Accordion.Item index={0}>
            <Accordion.Header index={0}>Example tab</Accordion.Header>
            <Accordion.Content index={0}>This is the content</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item index={1}>
            <Accordion.Header index={1}>Example tab 2</Accordion.Header>
            <Accordion.Content index={1}>
              This is the content 2
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item index={2}>
            <Accordion.Header index={2}>Example tab 3</Accordion.Header>
            <Accordion.Content index={2}>
              This is the content 3
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </HeaderCard>

      <DarkModeProvider>
        <HeaderCard text={"Context"}>
          <DarkModeButton />
        </HeaderCard>
      </DarkModeProvider>

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

      <section>
        <h1>useEffect hook</h1>
        <HeaderCard text={"Fetch data - API call"}>
          <ApiCall />
        </HeaderCard>

        <HeaderCard text={"Fetch data with props - API call"}>
          <ApiCallWithProps postId={1} />
        </HeaderCard>

        <HeaderCard text={"Search term - API call"}>
          <SearchTerm query={3} />
        </HeaderCard>

        <HeaderCard text={"Count with timer - Interval/Timeout"}>
          <CountTimer />
        </HeaderCard>

        <HeaderCard text={"Resize Window - Event listener"}>
          <ResizeWindow />
        </HeaderCard>
        <HeaderCard text={"Pull data every 5 minutes - Interval/call API"}>
          <PullApiCall />
        </HeaderCard>

        <HeaderCard text={"LocalStorage"}>
          <LocalStorageName />
        </HeaderCard>

        <HeaderCard text={"Display Message by Condition"}>
          <MessageByCondition />
        </HeaderCard>
      </section>
    </div>
  );
}

export default App;
