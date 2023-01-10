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
  const [conversionData, setConversionData] = useState({
    fromAmount: 0,
    fromCurrency: "USD",
    toAmount: 0,
    toCurrency: "UAH",
  });

  useEffect(() => {
    getAllCurrency().then(setCurrency);
    getLatestRates().then(setRates);
  }, []);

  const handleChange = (key, value) => {
    const newState = { ...conversionData, [key]: value };
    // setConversionData({ ...conversionData, [key]: value });

    if (key === "fromAmount" || key === "fromCurrency") {
      convertAmount(
        newState.fromCurrency,
        newState.toCurrency,
        newState.fromAmount
      ).then((data) => {
        setConversionData({
          ...newState,
          toAmount: data,
        });
      });
    } else {
      convertAmount(
        newState.toCurrency,
        newState.fromCurrency,
        newState.toAmount
      ).then((data) => {
        setConversionData({
          ...newState,
          fromAmount: data,
        });
      });
    }
  };

  return (
    <div className="App">
      {rates.map((item) => `${item.base}: ${item.rates.UAH.toFixed(2)} `)}
      <h1>Currency converter</h1>
      <InputsContainer
        currency={currency}
        conversionData={conversionData}
        convertAmount={handleChange}
      />
    </div>
  );
}

export default App;
