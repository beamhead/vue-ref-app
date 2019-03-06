import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const baseURLDev = "http://jsonplaceholder.typicode.com/";
const baseURL = baseURLDev;

const HTTP = axios.create({
  baseURL: baseURL
});

// This sets the mock adapter on the default instance
var mock = new MockAdapter(HTTP);

let fakeData = [
  {
    userId: 1,
    id: 1,
    title:
      "MOCK MOCK MOCK sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
];

// Mock any GET request to /posts
// arguments for reply are (status, data, headers)
mock.onGet("posts").reply(200, {
  data: fakeData
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
