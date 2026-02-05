import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./OutPut";
import Reset from "./Reset";

function TipCalculator() {
  return (
    <div>
      <h2>Tip Calculator</h2>

      <BillInput />

      <SelectPercentage>how did you liked the service?</SelectPercentage>
      <SelectPercentage>how did you friend liked the service?</SelectPercentage>

      <Output />

      <Reset />
    </div>
  );
}
export default TipCalculator;
