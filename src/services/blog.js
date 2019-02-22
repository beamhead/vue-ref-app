import axios from "axios";

const baseURLDev = "http://jsonplaceholder.typicode.com/";
const baseURL = baseURLDev;

const HTTP = axios.create({
  baseURL: baseURL
});

const fetchPosts = function() {
  return HTTP.get("posts").then(response =>
    response.data
  );
};

export default {
  fetchPosts: fetchPosts
};
