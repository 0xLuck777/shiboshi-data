const expect = require('chai').expect;
const shiboshis = require('./index');

describe('shiboshis', () => {
  describe('all', () => {
    it('should be an array of shoboshi objects', () => {
      function isArrayOfShiboshis(array) {
        const shiboshiKeys = ['id', 'token_id', 'image_url', 'traits'];
        return array.every((shiboshi) => {
          return JSON.stringify(Object.keys(shiboshi)) === JSON.stringify(shiboshiKeys);
        });
      }
      expect(shiboshis.all).to.satisfy(isArrayOfShiboshis);
    });

    it('should be exactly 10,000 in length', () => {
      expect(shiboshis.all).to.have.length(10000);
    });
  });

  describe('getShiboshiById', () => {
    it('should return the correct shioboshi based on given token_id', () => {
      const shiboshiById = shiboshis.getShiboshiById(2601);
      expect(shiboshiById).to.have.property('token_id', '2601');
    });
  });
});
