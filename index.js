const shiboshiData = require('./shiboshis.json');

function getShiboshiById(arg) {
  if (typeof arg === 'number' || typeof arg === 'string') {
    const id = arg;
    return shiboshiData.find((shiboshi) => shiboshi.token_id == id);
  } else {
    const arr = arg;
    return arr.map((id) => shiboshiData.find((shiboshi) => shiboshi.token_id == id));
  }
}

module.exports = {
  all: shiboshiData,
  getShiboshiById,
};
