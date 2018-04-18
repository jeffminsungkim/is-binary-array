# is-binary-array [![Build Status]][Travis URL] [![Node Version Required][Node Version]][Node URL]

> The fastest way to check if an array contains binary digits only


## Install

```
$ npm install is-binary-array
```


## Usage

```js
const isBinaryArray = require('is-binary-array');

isBinaryArray([0]);
//=> true

isBinaryArray([0, 1, 1, 0]);
//=> true

isBinaryArray([0, 1, 1, 8]);
//=> false

isBinaryArray([100]);
//=> false

isBinaryArray([-1, 0, 1]);
//=> false

isBinaryArray(123);
//=> 'Expected an array, got number'
```

## License

MIT © [JeffMinsungKim](https://jeffminsungkim.com)

[Build Status]: https://travis-ci.org/jeffminsungkim/is-binary-array.svg?branch=master
[Travis URL]: https://travis-ci.org/jeffminsungkim/is-binary-array
[Node Version]: https://img.shields.io/node/v/is-binary-array.svg?label=works%20on%20node
[Node URL]: https://www.npmjs.com/package/is-binary-array
