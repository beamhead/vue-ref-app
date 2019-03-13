import API from "@/services/mocks/currency.js";
//import API from "@/services/currency.js";

describe("/services/currency.js", () => {
  it('Should contain currencies matching some properties.', () => {
    return API.fetchBitCoin().then(data => {
      
      expect(typeof data).toEqual('object');
      expect(data.EUR.code).toMatch('EUR');
      expect(data.EUR.description).toMatch('Euro');
      expect(typeof data.EUR.rate_float).toEqual('number');

      expect(Object.keys(data).sort()).toEqual([
        'EUR',
        'GBP',
        'USD',
      ]);

    });
  });
});