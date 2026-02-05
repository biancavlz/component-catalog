import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./OutPut";
import Reset from "./Reset";

function TipCalculator() {
  const [bill, setBill] = useState("");

  return (
    <div>
      <h2>Tip Calculator</h2>

      <BillInput bill={bill} onSetBill={setBill} />

      <SelectPercentage>how did you liked the service?</SelectPercentage>
      <SelectPercentage>how did you friend liked the service?</SelectPercentage>

      <Output bill={bill} />

      <Reset />
    </div>
  );
}
export default TipCalculator;
