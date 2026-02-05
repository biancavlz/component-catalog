function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>
        How much is the bill?
        <input
          type="text"
          placeholder="Bill amount"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
export default BillInput;
