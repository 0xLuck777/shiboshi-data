# shiboshis

Install:

```bash
npm i shiboshis
```

Usage:

```javascript
const shiboshis = require('shiboshis');

console.log(shiboshis.all); // get all shiboshi data
console.log(shiboshis.getShiboshiById(2601)); // get by specific ID
console.log(shiboshis.getShiboshiById([2601, 3405, '9999', 0])); // you can pass an array of strings/numbers as well
```
