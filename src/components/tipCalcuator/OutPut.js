function Output({ bill, totalTip }) {
  const totalAmount = bill + totalTip;

  return (
    <h3>
      You pay ${totalAmount} (${bill} + ${totalTip} tip)
    </h3>
  );
}

export default Output;
