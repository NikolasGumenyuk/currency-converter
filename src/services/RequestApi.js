import axios from "axios";

export async function getAllCurrency() {
  try {
    const response = await axios.get("https://api.exchangerate.host/symbols");
    return Object.keys(response.data.symbols);
  } catch (error) {
    console.error(error);
  }
}

export async function convertAmount(from, to, amount) {
  try {
    const response = await axios.get(
      `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
    );
    // return response.data.result.toFixed(2);
    return response.data.result.toFixed(2);
  } catch (error) {
    console.error(error);
  }
}

export async function getLatestRates() {
  try {
    const responseUSD = await axios.get(
      "https://api.exchangerate.host/latest?base=USD&symbols=UAH"
    );
    const responseEUR = await axios.get(
      "https://api.exchangerate.host/latest?base=EUR&symbols=UAH"
    );
    return Promise.all([responseUSD.data, responseEUR.data]);
  } catch (error) {
    console.error(error);
  }
}
