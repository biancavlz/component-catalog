import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./OutPut";
import Reset from "./Reset";

function TipCalculator() {
  return (
    <div>
      <h2>Tip Calculator</h2>

      <BillInput />

      <SelectPercentage />
      <SelectPercentage />

      <Output />

      <Reset />
    </div>
  );
}
export default TipCalculator;
