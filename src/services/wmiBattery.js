import axios from "axios";

const baseCurrencyURLDev = "https://api.coindesk.com/v1/bpi/";
const baseCurrencyURL = baseCurrencyURLDev;

const HTTP = axios.create({
  baseURL: baseCurrencyURL
});

const fetchWMI = function() {
  return HTTP.get("class/wmiBattery").then(
    response =>
      // data - is the response that was provided by the server
      response.data.data
  );
};

export default {
  fetchWMI: fetchWMI
};