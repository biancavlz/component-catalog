import HeaderCard from "./components/HeaderCard";
import TipCalculator from "./components/tipCalcuator/TipCalculator";
import Rating from "./components/starRating/Rating";
import TextExpander from "./components/textExpander/TextExpander";
import CurrencyConverter from "./components/currency/CurrencyConverter";
import Locator from "./components/geoLocation/Locator";
import DateCounter from "./components/counter/DateCounter";
import BankAccount from "./components/bankAccount/BankAccount";
import Accordion from "./components/compoundComponents/accordion/Accordion";

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
    </div>
  );
}

export default App;
