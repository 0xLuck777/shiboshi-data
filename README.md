# shiboshis

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![PRs Welcome][prs-badge]][prs]
[![MIT License][license-badge]][license]

## Install:

```bash
npm i shiboshis
```

## Usage:

```javascript
const shiboshis = require('shiboshis');

console.log(shiboshis.all); // get all shiboshi data
console.log(shiboshis.getShiboshiById(2601)); // get by specific ID
console.log(shiboshis.getShiboshiById([2601, 3405, '9999', 0])); // you can pass an array of strings/numbers as well
```

[build-badge]: https://img.shields.io/github/workflow/status/0xLuck777/shiboshis/publish?logo=github
[build]: https://github.com/0xLuck777/shiboshis/actions?query=workflow%3Apublish
[coverage-badge]: https://img.shields.io/codecov/c/github/0xLuck777/shiboshis.svg?style=flat-square
[coverage]: https://codecov.io/github/0xLuck777/shiboshis
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com
[license-badge]: https://img.shields.io/npm/l/shiboshis.svg
[license]: https://github.com/0xLuck777/shiboshis/blob/master/LICENSE
