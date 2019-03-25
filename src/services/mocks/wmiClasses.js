import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import mockData from "./wmiClasses.json";

const baseURLDev = "http://jsonplaceholder.typicode.com/";
const baseURL = baseURLDev;

const HTTP = axios.create({
  baseURL: baseURL
});

// This sets the mock adapter on the default instance (with delay)
var mock = new MockAdapter(HTTP, { delayResponse: 2000 });

// Mock any GET request to /posts
// arguments for reply are (status, data, headers)
mock.onGet("classes").reply(200, {
  data: mockData
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

