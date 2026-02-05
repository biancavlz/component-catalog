function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value={0}>Disatisfied (0%)</option>
        <option value={5}>it was ook (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
export default SelectPercentage;
