'use strict';
module.exports = input => {
	if (Object.prototype.toString.call(input) !== '[object Array]') {
		throw new TypeError(`Expected an array, got ${typeof input}`);
	}
	for (let i = 0; i < input.length; i++) {
		if (input[i] !== 0 && input[i] !== 1) {
			return false;
		}
	}
	return true;
};
