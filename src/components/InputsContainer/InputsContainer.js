import { useRef } from "react";
import styles from "./InputsContainer.module.css";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const InputsContainer = ({ currency, conversionData, convertAmount }) => {
  const fromRef = useRef();
  const toRef = useRef();

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <TextField
          className={styles.input}
          value={conversionData.fromAmount}
          onInput={(event) =>
            convertAmount(event.target.name, event.target.value)
          }
          type="number"
          variant="outlined"
          label="Start Amount"
          name="fromAmount"
        />
        <Autocomplete
          className={styles.autocomplete}
          value={conversionData.fromCurrency}
          defaultValue={"USD"}
          options={currency}
          ref={fromRef}
          name="fromCurrency"
          onChange={(_, newValue) => {
            convertAmount(fromRef.current.getAttribute("name"), newValue);
          }}
          renderInput={(params) => <TextField {...params} label="From" />}
        />
      </div>
      <div className={styles.section}>
        <TextField
          className={styles.input}
          value={conversionData.toAmount}
          onInput={(event) =>
            convertAmount(event.target.name, event.target.value)
          }
          type="number"
          variant="outlined"
          label="Converted Amount"
          name="toAmount"
        />
        <Autocomplete
          className={styles.autocomplete}
          value={conversionData.toCurrency}
          defaultValue={"UAH"}
          options={currency}
          ref={toRef}
          name="toCurrency"
          onChange={(_, newValue) => {
            convertAmount(toRef.current.getAttribute("name"), newValue);
          }}
          renderInput={(params) => <TextField {...params} label="To" />}
        />
      </div>
    </div>
  );
};

export default InputsContainer;
