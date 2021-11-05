const shiboshiData = require('./shiboshis.json');

function getShiboshiById(id) {
  return shiboshiData.find((shiboshi) => shiboshi.token_id == id);
}

module.exports = {
  all: shiboshiData,
  getShiboshiById,
};
