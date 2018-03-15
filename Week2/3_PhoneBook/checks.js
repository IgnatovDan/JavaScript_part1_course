var assert = require('assert');

var phoneBook = require('./index.js');

phoneBook('ADD Mark 111-11-11');
assert.deepEqual(phoneBook('SHOW'), ['Mark: 111-11-11']);

phoneBook('CLEAR');
phoneBook('ADD Mark 111-11-11');
phoneBook('ADD Mark 111-11-12');
assert.deepEqual(phoneBook('SHOW'), ['Mark: 111-11-11, 111-11-12']);

phoneBook('CLEAR');
phoneBook('ADD Mark 111-11-11');
phoneBook('ADD Mark 111-11-11');
assert.deepEqual(phoneBook('SHOW'), ['Mark: 111-11-11']);

phoneBook('CLEAR');
phoneBook('ADD Mark 111-11-11');
assert.equal(phoneBook('REMOVE_PHONE 111-11-12'), false);
assert.deepEqual(phoneBook('SHOW'), ['Mark: 111-11-11']);
assert.equal(phoneBook('REMOVE_PHONE 111-11-11'), true);
assert.deepEqual(phoneBook('SHOW'), []);

phoneBook('CLEAR');
phoneBook('ADD Mark 111-11-11');
phoneBook('ADD John 111-11-11');
assert.deepEqual(phoneBook('SHOW'), ['John: 111-11-11', 'Mark: 111-11-11']);
assert.equal(phoneBook('REMOVE_PHONE 111-11-11'), true);
assert.deepEqual(phoneBook('SHOW'), []);

phoneBook('CLEAR');
phoneBook('ADD Mark 111-11-11,111-11-12');
assert.deepEqual(phoneBook('SHOW'), ['Mark: 111-11-11, 111-11-12']);
assert.equal(phoneBook('REMOVE_PHONE 111-11-11'), true);
assert.deepEqual(phoneBook('SHOW'), ['Mark: 111-11-12']);

phoneBook('CLEAR');
phoneBook('ADD Mark 111-11-11,111-11-11');
assert.deepEqual(phoneBook('SHOW'), ['Mark: 111-11-11']);

console.info('OK!');
