import TipCalculator from "./components/tipCalcuator/TipCalculator";
import Rating from "./components/starRating/Rating";

function App() {
  return (
    <div>
      <h1>Component Catalog</h1>
      <div>
        <TipCalculator />
      </div>
      <div>
        <Rating
          maxRating={5}
          messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
          defaultRating={3}
        />
      </div>
    </div>
  );
}

export default App;
