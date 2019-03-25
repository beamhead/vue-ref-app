import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://api.coindesk.com/v1/bpi/"
});

const fetchWQL = function(wmiClass) {
  return HTTP.get("class/wql/" +wmiClass).then(
    response =>
      // data - is the response that was provided by the server
      response.data.data
  );
};

export default {
  fetchWQL: fetchWQL
};

