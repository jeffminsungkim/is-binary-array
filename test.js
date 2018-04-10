import test from 'ava';
import m from '.';

test('title', t => {
	const err = t.throws(() => {
		m(123);
	}, TypeError);
	t.is(err.message, 'Expected an array, got number');

	t.true(m([0]));
	t.true(m([0, 1, 1, 0]));
	t.true(m([1, 1, 1, 0]));
	t.false(m([0, 1, 1, 8]));
	t.false(m([8]));
	t.false(m([100]));
	t.false(m([-1, 0, 0]));
});
