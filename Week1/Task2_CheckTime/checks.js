var assert = require('assert');

var isValidTime = require('./index.js');

assert.equal(isValidTime(23, 1), true);
assert.equal(isValidTime(24, 1), false);

assert.equal(isValidTime(1, 59), true);
assert.equal(isValidTime(1, 60), false);

assert.equal(isValidTime(0, 0), true);

assert.equal(isValidTime('12', '30'), true);
assert.equal(isValidTime('023', '023'), true);
assert.equal(isValidTime(023, 023), true);

assert.equal(isValidTime(0x17, 1), true);
assert.equal(isValidTime(0x18, 1), false);
assert.equal(isValidTime(1, 0x3B), true);
assert.equal(isValidTime(1, 0x3C), false);

assert.equal(isValidTime('a', 1), false);
assert.equal(isValidTime(1, 'a'), false);

assert.equal(isValidTime(-1, 1), false);
assert.equal(isValidTime(1, -1), false);

assert.equal(isValidTime(Number.MAX_SAFE_INTEGER, 1), false);
assert.equal(isValidTime(1, Number.MAX_SAFE_INTEGER), false);

assert.equal(isValidTime(Number.POSITIVE_INFINITY, 1), false);
assert.equal(isValidTime(1, Number.POSITIVE_INFINITY), false);

assert.equal(isValidTime(Number.NEGATIVE_INFINITY, 1), false);
assert.equal(isValidTime(1, Number.NEGATIVE_INFINITY), false);

assert.equal(isValidTime(NaN, 1), false);
assert.equal(isValidTime(1, NaN), false);

console.info('OK!');
