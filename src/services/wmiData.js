import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://api.coindesk.com/v1/bpi/"
});

const fetchWmiData = function(wmiClassName, wqlId) {
  //console.log("wmiData.js: "+ wmiClassName);
  return HTTP.get("class/"+wmiClassName + "/" +wqlId).then(
    response =>
      // data - is the response that was provided by the server
      response.data.data
  );
};

export default {
  fetchWmiData: fetchWmiData
};