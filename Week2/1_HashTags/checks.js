var assert = require('assert');

var getHashTags = require('./index.js');

assert.deepEqual(getHashTags(''), []);
//assert.deepEqual(getHashTags('#'), []); //incorrect???
//assert.deepEqual(getHashTags('# '), []); //incorrect???
//assert.deepEqual(getHashTags('#  '), []); //incorrect???
//assert.deepEqual(getHashTags(' #'), []); //incorrect???
//assert.deepEqual(getHashTags(' # '), []); //incorrect???
//assert.deepEqual(getHashTags('  #'), []); //incorrect???

//assert.deepEqual(getHashTags('##'), []); //incorrect???
//assert.deepEqual(getHashTags('## '), []); //incorrect???
//assert.deepEqual(getHashTags(' ##'), []); //incorrect???
//assert.deepEqual(getHashTags(' ## '), []); //incorrect???
//assert.deepEqual(getHashTags('  ##'), []); //incorrect???

assert.deepEqual(getHashTags('a'), []);
assert.deepEqual(getHashTags('a '), []);
assert.deepEqual(getHashTags(' a'), []);
assert.deepEqual(getHashTags(' a '), []);

assert.deepEqual(getHashTags('a a'), []);
assert.deepEqual(getHashTags('a a '), []);
assert.deepEqual(getHashTags(' a a'), []);
assert.deepEqual(getHashTags(' a a '), []);

assert.deepEqual(getHashTags('#a'), ['a']);
assert.deepEqual(getHashTags('#a '), ['a']);
assert.deepEqual(getHashTags(' #a'), ['a']);
assert.deepEqual(getHashTags(' #a '), ['a']);

assert.deepEqual(getHashTags('#a #b'), ['a', 'b']);
assert.deepEqual(getHashTags('#a #b '), ['a', 'b']);
assert.deepEqual(getHashTags(' #a #b'), ['a', 'b']);
assert.deepEqual(getHashTags(' #a #b '), ['a', 'b']);

assert.deepEqual(getHashTags('# a'), []);
assert.deepEqual(getHashTags('a #'), []);

console.info('OK!');
