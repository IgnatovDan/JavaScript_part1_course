var assert = require('assert');

var addTime = require('./index.js');

assert.equal(addTime(0, 0, 0), '00:00');
assert.equal(addTime(0, 0, 24*60), '00:00');

assert.equal(addTime(0, 0, 24*60 + 1), '00:01');

assert.equal(addTime(0, 0, 150000000000), '16:00');
assert.equal(addTime(0, 0, Number.MAX_SAFE_INTEGER), '00:31');

assert.equal(addTime(9, 9, 0), '09:09');
assert.equal(addTime(8, 8, 0), '08:08');
assert.equal(addTime(7, 7, 0), '07:07');
assert.equal(addTime(6, 6, 0), '06:06');
assert.equal(addTime(5, 5, 0), '05:05');
assert.equal(addTime(4, 4, 0), '04:04');
assert.equal(addTime(3, 3, 0), '03:03');
assert.equal(addTime(2, 2, 0), '02:02');
assert.equal(addTime(1, 1, 0), '01:01');
assert.equal(addTime(0, 0, 0), '00:00');

console.info('OK!');
