import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const baseURLDev = "https://api.coindesk.com/v1/bpi/";
const baseURL = baseURLDev;

const HTTP = axios.create({
  baseURL: baseURL
});

// This sets the mock adapter on the default instance
var mock = new MockAdapter(HTTP);
let fakeData = {
  time: {
    updated: "Feb 19, 2019 10:17:00 UTC",
    updatedISO: "2019-02-19T10:17:00+00:00",
    updateduk: "Feb 19, 2019 at 10:17 GMT"
  },
  disclaimer:
    "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
  chartName: "Bitcoin",
  bpi: {
    USD: {
      code: "USD",
      symbol: "&#36;",
      rate: "3,894.3367",
      description: "MOCKED ---- United States Dollar",
      rate_float: 3894.3367
    },
    GBP: {
      code: "GBP",
      symbol: "&pound;",
      rate: "3,014.1854",
      description: "British Pound Sterling",
      rate_float: 3014.1854
    },
    EUR: {
      code: "EUR",
      symbol: "&euro;",
      rate: "3,445.2106",
      description: "Euro",
      rate_float: 3445.2106
    }
  }
};

// Mock any GET request to /posts
// arguments for reply are (status, data, headers)
mock.onGet("currentprice.json").reply(200, {
  data: fakeData
});

const fetchBitCoin = function() {
  return HTTP.get("currentprice.json").then(response => 
     response.data.data.bpi
  );
};

export default {
  fetchBitCoin: fetchBitCoin
};
