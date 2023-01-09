import { useEffect, useState } from "react";
import {
  convertAmount,
  getAllCurrency,
  getLatestRates,
} from "./services/RequestApi";
import InputsContainer from "./components/InputsContainer/InputsContainer";
import "./App.css";

function App() {
  const [rates, setRates] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("UAH");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const data = {
    from: { currency: "usd", amount: 1 },
    to: { currency: "uah", amount: 0 },
  };
  console.log(currency);

  useEffect(() => {
    getAllCurrency().then(setCurrency);
    getLatestRates().then(setRates);
  }, []);
  //useEffect ((on params)=> { convertAmount(fromCurrency, toCurrency, currentAmount)}, [state])

  const handleChange = (event, type) => {
    const currentAmount = event.target.value;

    setAmount(currentAmount);

    convertAmount(fromCurrency, toCurrency, currentAmount).then(
      setConvertedAmount
    );
  };

  return (
    <div className="App">
      {rates.map((item) => `${item.base}: ${item.rates.UAH.toFixed(2)} `)}
      <h1>Currency converter</h1>
      <InputsContainer
        currency={currency}
        amount={amount}
        convertedAmount={convertedAmount}
        setFromCurrency={setFromCurrency}
        setToCurrency={setToCurrency}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
