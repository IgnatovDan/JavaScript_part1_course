var assert = require('assert');

var sum = require('./index.js');

assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, '2'), 3);
assert.strictEqual(sum(1, ' 2'), 3);
assert.strictEqual(sum(1, '2 '), 3);
assert.strictEqual(sum(1, ' 2 '), 3);
assert.strictEqual(sum('3', 4), 7);
assert.strictEqual(sum('5', '6'), 11);
assert.strictEqual(sum(1, ''), 1);
assert.strictEqual(sum('1', ''), 1);
assert.strictEqual(sum('', 1), 1);
assert.strictEqual(sum(' ', 1), 1);
assert.strictEqual(sum('', '1'), 1);
assert.strictEqual(sum(' ', '1'), 1);
assert.strictEqual(sum('', ''), 0);
assert.strictEqual(sum(' ', ' '), 0);
assert.strictEqual(sum(0, 0), 0);
assert.strictEqual(sum(Number.MAX_SAFE_INTEGER, 0), Number.MAX_SAFE_INTEGER);
assert.strictEqual(sum(Number.MAX_SAFE_INTEGER, 1), Number.MAX_SAFE_INTEGER + 1);
assert.strictEqual(sum(Number.MAX_SAFE_INTEGER, 2), Number.MAX_SAFE_INTEGER + 2);

assert.strictEqual(sum(Number.MAX_VALUE, 1), Number.MAX_VALUE + 1);
assert.strictEqual(sum(Number.MIN_VALUE, -1), Number.MIN_VALUE -1);

assert.strictEqual(sum('0xFF', '0xFF'), 510);
assert.strictEqual(sum('0xFF', '255'), 510);
assert.strictEqual(sum('255', '0xFF'), 510);

assert.strictEqual(isNaN(sum("12 бегемотов", "38 попугаев")), true);
assert.strictEqual(isNaN(sum('a', 'a')), true);
assert.strictEqual(isNaN(sum(1, 'a')), true);
assert.strictEqual(isNaN(sum(1, '1a')), true);
assert.strictEqual(isNaN(sum(1, 'true')), true);
assert.strictEqual(isNaN(sum(1, 'false')), true);
assert.strictEqual(isNaN(sum(1, 'null')), true);
assert.strictEqual(isNaN(sum(1, 'NaN')), true);
assert.strictEqual(isNaN(sum('Infinity', '-Infinity')), true);
assert.strictEqual(isNaN(sum('NaN', 'NaN')), true);
assert.strictEqual(isNaN(sum('NaN', '-Infinity')), true);
assert.strictEqual(isNaN(sum('NaN', 'Infinity')), true);

assert.strictEqual(sum(1, 'Infinity'), Infinity);
assert.strictEqual(sum(1, '-Infinity'), -Infinity);

assert.strictEqual(sum(1, 1e1), 11);
assert.strictEqual(sum(1, '1e1'), 11);

assert.strictEqual(sum('101', '17'), 118);
assert.strictEqual(sum(' 101', ' 17'), 118);
assert.strictEqual(sum('+101', '+17'), 118);

assert.strictEqual(sum(-12, -33), -45, '12, 33');
assert.strictEqual(sum(-101, '-17'), -118);
assert.strictEqual(sum('-101', '-17'), -118);
assert.strictEqual(sum(' -101', ' -17'), -118);

assert.strictEqual(sum('023', '1'), 24);
assert.strictEqual(sum(023, 1), 24);

assert.strictEqual(sum(9999999999999999, 1), 10000000000000000);

//TODO: failures !!!
//assert.strictEqual(sum(0.1, 0.2), 0.3);
//assert.notStrictEqual(sum(9999999999999999, 1), 9999999999999999);
//assert.notStrictEqual(sum(9999999999999999, 1), 10000000000000001);

console.info('OK!');
