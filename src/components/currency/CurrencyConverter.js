import { useState, useEffect } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFRomCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          // `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
          `https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`,
        );

        const data = await res.json();
        const convertedAmount = data.rates[toCurrency] * amount;
        setConvertedAmount(convertedAmount.toFixed(2));
        setIsLoading(false);
      }
      if (fromCurrency === toCurrency) {
        return setConvertedAmount(amount);
      }
      convert();
    },
    [amount, fromCurrency, toCurrency],
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFRomCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {convertedAmount} {toCurrency}
      </p>
    </div>
  );
}

export default CurrencyConverter;
