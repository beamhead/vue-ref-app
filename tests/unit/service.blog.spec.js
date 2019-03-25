import API from "@/services/blog.js";
//import API from "@/services/mocks/blog.js";
//import API from "api-client/blog.js";

describe("/services/blog.js", () => {
  it("Should contain an array of objects matching the intended shape.", () => {
    return API.fetchPosts().then(data => {
      expect(Array.isArray(data)).toEqual(true);
      
      data.forEach((dataPoint) => {
        // Ensure each data point is an object with an exact set of keys.
        expect(typeof dataPoint).toEqual('object');
        expect(Object.keys(dataPoint).sort()).toEqual([
          'body',
          'id',
          'title',
          'userId',
        ]);
   
        // Validate simple property types.
        expect(typeof dataPoint.body).toEqual('string');
        expect(typeof dataPoint.title).toEqual('string');
        expect(typeof dataPoint.id).toEqual('number');
        expect(typeof dataPoint.userId).toEqual('number');
   
        // Ensure that the footnotes property is an array of strings.
        //expect(Array.isArray(dataPoint.footnotes)).toEqual(true);
        //dataPoints.footnotes.forEach((footnote) => {
        //  expect(typeof footnote).toEqual('string');
        //});

      });
    });
  });
});