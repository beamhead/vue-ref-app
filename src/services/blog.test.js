import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { shallowMount } from "@vue/test-utils";

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

describe('Blog', () => {
  it('returns data when sendMessage is called', done => {

      mock.onGet("posts").reply(200, {
        data: fakeData
      });

      HTTP.get("posts").then(response => {
          expect(response).toEqual(data);
          done();
      });
  });
});

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});