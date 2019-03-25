import axios from "axios";

const HTTP = axios.create({
  baseURL:"https://api.coindesk.com/v1/bpi/"
});

const fetchClasses = function() {
  return HTTP.get("classes").then(
    response =>
      // data - is the response that was provided by the server
      response.data.data
  );
};

export default {
  fetchClasses: fetchClasses
};

