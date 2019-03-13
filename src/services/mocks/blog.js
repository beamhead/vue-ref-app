import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import mockData from "./blogData";

const baseURLDev = "http://jsonplaceholder.typicode.com/";
const baseURL = baseURLDev;

const HTTP = axios.create({
  baseURL: baseURL
});

// This sets the mock adapter on the default instance
var mock = new MockAdapter(HTTP);

// Mock any GET request to /posts
// arguments for reply are (status, data, headers)
mock.onGet("posts").reply(200, {
  data: mockData
});

const fetchPosts = function() {
  return HTTP.get("posts").then(
    response =>
      // data - is the response that was provided by the server
      response.data.data
  );
};

export default {
  fetchPosts: fetchPosts
};
