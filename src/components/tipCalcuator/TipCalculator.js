import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./OutPut";
import Reset from "./Reset";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState("");
  const [tip2, setTip2] = useState("");

  const tipCalculation = bill * ((tip1 + tip2) / 2 / 100);

  return (
    <div>
      <h2>Tip Calculator</h2>

      <BillInput bill={bill} onSetBill={setBill} />

      <SelectPercentage tip={tip1} onSetTip={setTip1}>
        how did you liked the service?
      </SelectPercentage>
      <SelectPercentage tip={tip2} onSetTip={setTip2}>
        how did you friend liked the service?
      </SelectPercentage>

      <Output bill={bill} totalTip={tipCalculation} />

      <Reset />
    </div>
  );
}
export default TipCalculator;
