var assert = require('assert');

var date = require('./index.js');
var myundefined;

assert.deepEqual(date('2017-01-01 01:01').add(1, 'years').value, '2018-01-01 01:01');
assert.deepEqual(date('2017-01-01 01:01').add(1, 'months').value, '2017-02-01 01:01');
assert.deepEqual(date('2017-01-01 01:01').add(1, 'days').value, '2017-01-02 01:01');
assert.deepEqual(date('2017-01-01 01:01').add(1, 'hours').value, '2017-01-01 02:01');
assert.deepEqual(date('2017-01-01 01:01').add(1, 'minutes').value, '2017-01-01 01:02');
assert.deepEqual(date('2017-01-01 01:01').add(120, 'minutes').value, '2017-01-01 03:01');
assert.deepEqual(date('2017-01-01 01:01').add(1, 'years').add(1, 'years').value, '2019-01-01 01:01');
assert.deepEqual(date('2018-02-28 01:01').add(1, 'days').value, '2018-03-01 01:01');
assert.deepEqual(date('2017-01-01 00:00').add(0, 'minutes').value, '2017-01-01 00:00');
assert.deepEqual(date('2016-09-26 15:00').add(525600, 'minutes').value, '2017-09-26 15:00');

try { date('2017-01-01 01:01').add(1, 'unknown'); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }
try { date('2017-01-01 01:01').add(1, 10); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }
try { date('2017-01-01 01:01').add(1, NaN); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }
try { date('2017-01-01 01:01').add(1, myundefined); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }
try { date('2017-01-01 01:01').add(-1, 'years'); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }

assert.deepEqual(date('2017-02-02 02:02').subtract(1, 'years').value, '2016-02-02 02:02');
assert.deepEqual(date('2017-02-02 02:02').subtract(1, 'months').value, '2017-01-02 02:02');
assert.deepEqual(date('2017-02-02 02:02').subtract(1, 'days').value, '2017-02-01 02:02');
assert.deepEqual(date('2017-02-02 02:02').subtract(1, 'hours').value, '2017-02-02 01:02');
assert.deepEqual(date('2017-02-02 02:02').subtract(1, 'minutes').value, '2017-02-02 02:01');
assert.deepEqual(date('2017-02-02 23:02').subtract(120, 'minutes').value, '2017-02-02 21:02');
assert.deepEqual(date('2017-02-02 02:02').subtract(1, 'years').subtract(1, 'years').value, '2015-02-02 02:02');
assert.deepEqual(date('2018-03-01 01:01').subtract(1, 'days').value, '2018-02-28 01:01');
assert.deepEqual(date('2017-01-01 00:00').subtract(0, 'minutes').value, '2017-01-01 00:00');
assert.deepEqual(date('2017-01-26 15:00').subtract(4, 'months').value, '2016-09-26 15:00');
assert.deepEqual(date('2017-09-26 15:00').subtract(525600, 'minutes').value, '2016-09-26 15:00');

try { date('2017-02-02 02:02').subtract(1, 'unknown'); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }
try { date('2017-02-02 02:02').subtract(1, 10); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }
try { date('2017-02-02 02:02').subtract(1, NaN); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }
try { date('2017-02-02 02:02').subtract(1, myundefined); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }
try { date('2017-02-02 02:02').subtract(-1, 'years'); assert.fail(); } catch(err) { assert.deepEqual(err.name, 'TypeError'); }

assert.deepEqual(date('2017-01-01 01:01').add(2, 'years').subtract(1, 'years').value, '2018-01-01 01:01');
assert.deepEqual(date('2017-02-02 02:02').subtract(2, 'years').add(1, 'years').value, '2016-02-02 02:02');

var time1 = date('2017-01-01 01:01');
var time2 = date('2017-02-02 02:02');
var time1_ = time1.add(1, 'years');
assert.deepEqual(time1.value, '2017-01-01 01:01');
assert.deepEqual(time2.value, '2017-02-02 02:02');
assert.deepEqual(time1_.value, '2018-01-01 01:01');

console.info('OK!');
