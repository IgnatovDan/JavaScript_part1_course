var assert = require('assert');

var normalizeHashTags = require('./index.js');

assert.deepEqual(normalizeHashTags([]), '');
assert.deepEqual(normalizeHashTags(['a']), 'a');
assert.deepEqual(normalizeHashTags(['A']), 'a');
assert.deepEqual(normalizeHashTags(['a', 'a']), 'a');
assert.deepEqual(normalizeHashTags(['a', 'A']), 'a');
assert.deepEqual(normalizeHashTags(['A', 'a']), 'a');
assert.deepEqual(normalizeHashTags(['a', 'b']), 'a, b');
assert.deepEqual(normalizeHashTags(['a', 'b', 'a']), 'a, b');
assert.deepEqual(normalizeHashTags(['A', 'b', 'a']), 'a, b');
assert.deepEqual(normalizeHashTags(['a', 'b', 'A']), 'a, b');
assert.deepEqual(normalizeHashTags(['A', 'b', 'A']), 'a, b');

console.info('OK!');
