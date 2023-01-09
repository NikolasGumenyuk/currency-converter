import { useState } from "react";
import styles from "./InputsContainer.module.css";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const InputsContainer = ({
  currency,
  convertedAmount,
  setFromCurrency,
  setToCurrency,
  handleChange,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <TextField
          className={styles.input}
          onInput={(event) => handleChange(event, "from")}
          type="number"
          variant="outlined"
          label="Start Amount"
        />
        <Autocomplete
          className={styles.autocomplete}
          defaultValue={"USD"}
          options={currency}
          onChange={(_, newValue) => {
            // handleChange(newValue, "from&&to" , type)
            setFromCurrency(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="From" />}
        />
      </div>
      <div className={styles.section}>
        <TextField
          className={styles.input}
          onInput={handleChange}
          value={convertedAmount}
          type="number"
          variant="outlined"
          label="Converted Amount"
        />
        <Autocomplete
          className={styles.autocomplete}
          defaultValue={"UAH"}
          options={currency}
          onChange={(_, newValue) => {
            setToCurrency(newValue);
          }}
          renderInput={(params) => <TextField {...params} label="To" />}
        />
      </div>
    </div>
  );
};

export default InputsContainer;
