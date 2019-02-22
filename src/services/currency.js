import axios from "axios";

const baseCurrencyURLDev = "https://api.coindesk.com/v1/bpi/";
const baseCurrencyURL = baseCurrencyURLDev;

const HTTPCurrency = axios.create({
  baseURL: baseCurrencyURL
});

const fetchBitCoin = function() {
  return HTTPCurrency.get("currentprice.json").then(response => {
    return response.data.bpi;
  });
};

export default {
  fetchBitCoin: fetchBitCoin
};
