'use strict';
module.exports = input => {
	if (Object.prototype.toString.call(input) !== '[object Array]') {
		throw new TypeError(`Expected an array, got ${typeof input}`);
	}
	for (let i = input.length - 1; i >= 0; --i) {
		if (input[i] !== 0 && input[i] !== 1) {
			return false;
		}
	}
	return true;
};
