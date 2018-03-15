//------------------
//  Additional tests
//------------------


assert.deepEqual(lib.query(undefined), undefined);
assert.deepEqual(lib.query('1'), '1');
assert.deepEqual(lib.query(1), 1);
assert.deepEqual(lib.query(null), null);

assert.deepEqual(lib.query([]), []);
assert.deepEqual(lib.query([null]), [null]);
assert.deepEqual(lib.query([{}]), [{}]);
assert.deepEqual(lib.query([null, null]), [null, null]);
assert.deepEqual(lib.query([{}, {}]), [{}, {}]);
assert.deepEqual(lib.query([{}, , {}]), [{}, , {}]);
assert.deepEqual(lib.query(new Array(3)), new Array(3));

assert.deepEqual(lib.query(['1']), ['1']);
assert.deepEqual(lib.query([1]), [1]);

assert.deepEqual(lib.query([{name1: '1'}]), [{name1: '1'}]);
assert.deepEqual(lib.query([{name: '1'}, {name: '2'}]), [{name: '1'}, {name: '2'}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2'}]), [{name1: '1', name2: '2'}]);

//------------------

var items1 = [{name: '1'}];
var items1_ = lib.query(items1);

assert.deepEqual(items1, [{name: '1'}]);
assert.deepEqual(items1_, [{name: '1'}]);

items1.push({name: '2'});
items1_.push({name: '2_'});

assert.deepEqual(items1, [{name: '1'}, {name: '2'}]);
assert.deepEqual(items1_, [{name: '1'}, {name: '2_'}]);

//--------------------------------------------------------------------
// select
//--------------------------------------------------------------------

assert.deepEqual(lib.query(undefined, lib.select()), undefined);
assert.deepEqual(lib.query(undefined, lib.select('name1')), undefined);
assert.deepEqual(lib.query(null, lib.select()), null);
assert.deepEqual(lib.query(null, lib.select('name1')), null);

assert.deepEqual(lib.query(['1'], lib.select()), [{}]);
assert.deepEqual(lib.query(['1'], lib.select('name1')), [{}]);
assert.deepEqual(lib.query(['1'], lib.select('length')), [{length: 1}]);
assert.deepEqual(lib.query([1], lib.select()), [{}]);
assert.deepEqual(lib.query([1], lib.select('name1')), [{}]);

assert.deepEqual(lib.query([{name1: '1'}], lib.select()), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.select(), lib.select()), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.select(), lib.select('name1')), [{}]);

assert.deepEqual(lib.query([{name1: '1'}], lib.select(undefined)), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.select(null)), [{}]);

assert.deepEqual(lib.query([{name1: null}], lib.select('name1')), [{name1: null}]);
assert.deepEqual(lib.query([{name1: undefined}], lib.select('name1')), [{name1: undefined}]);

assert.deepEqual(lib.query([{name1: '1'}], lib.select('name1')), [{name1: '1'}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.select('name1'), lib.select('name1')), [{name1: '1'}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.select('name1'), lib.select()), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.select('name1'), lib.select('name2')), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.select('name2')), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.select('name2'), lib.select('name1')), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.select('toString')), [{}]);

assert.deepEqual(lib.query([{name1: 1}], lib.select('name1')), [{name1: 1}]);

assert.deepEqual(lib.query([{name1: '1', name2: '2'}], lib.select('name1')), [{name1: '1'}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2'}], lib.select('name1'), lib.select('name2')), [{}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2'}], lib.select('name1', 'name2')), [{name1: '1', name2: '2'}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2'}], lib.select('name1', 'name2'), lib.select()), [{}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2'}], lib.select('name1', 'name2'), lib.select('name1')), [{name1: '1'}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2'}], lib.select('name1', 'name2'), lib.select('name2')), [{name2: '2'}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2'}], lib.select('name2')), [{name2: '2'}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2'}], lib.select('name2'), lib.select('name1')), [{}]);

assert.deepEqual(lib.query([{name1: '1', name2: '2', name3: '3'}], lib.select('name1')), [{name1: '1'}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2', name3: '3'}], lib.select('name1'), lib.select('name2')), [{}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2', name3: '3'}], lib.select('name1'), lib.select('name2'), lib.select('name3')), [{}]);
assert.deepEqual(lib.query([{name1: '1', name2: '2', name3: '3'}], lib.select('name1', 'name2', 'name3')), [{name1: '1', name2: '2', name3: '3'}]);

assert.deepEqual(lib.query([{name1: '1_1', name2: '1_2'}, {name1: '2_1', name2: '2_2'}], lib.select('name1')), [{name1: '1_1'}, {name1: '2_1'}]);

//TODO: prototype inheritance
// assert.deepEqual(lib.query([Object.create({name1: '1'})], lib.select('name1')), [{name1:'1'}]);
// assert.deepEqual(lib.query([Object.create({name1: '1'})], lib.select('name2')), [{name2: '2'}]);
// assert.deepEqual(lib.query([Object.create({name1: '1'})], lib.select('name1', 'name2')), [{name1: '1', name2: '2'}]);

//--------------------------------------------------------------------
// filterIn
//--------------------------------------------------------------------

assert.deepEqual(lib.query(undefined, lib.filterIn()), undefined);
//assert.deepEqual(lib.query(undefined, lib.filterIn('name1')), undefined);
assert.deepEqual(lib.query(undefined, lib.filterIn('name1', ['1'])), undefined);
assert.deepEqual(lib.query(null, lib.filterIn()), null);
//assert.deepEqual(lib.query(null, lib.filterIn('name1')), null);
assert.deepEqual(lib.query(null, lib.filterIn('name1', ['1'])), null);

//assert.deepEqual(lib.query(['1'], lib.filterIn()), [{}]);
//assert.deepEqual(lib.query(['1'], lib.filterIn('name1')), [{}]);
//assert.deepEqual(lib.query(['1'], lib.filterIn('length', ['1'])), [{}]);
assert.deepEqual(lib.query(['1'], lib.filterIn('length', [])), []);
//assert.deepEqual(lib.query([1], lib.filterIn()), [{}]);
//assert.deepEqual(lib.query([1], lib.filterIn('name1')), [{}]);
assert.deepEqual(lib.query([1], lib.filterIn('name1', ['1'])), []);

//assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn()), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(undefined, [])), []);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(undefined, [undefined])), []);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(undefined, [null])), []);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(null, [])), []);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(null, [undefined])), []);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(null, [null])), []);

//assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(), lib.filterIn()), [{}]);
//assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(), lib.filterIn('name1')), [{}]);
//assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(), lib.filterIn('name1', ['1'])), [{}]);
//assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(), lib.filterIn('name1', ['2'])), []);
//assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(), lib.filterIn('name1', ['1', '2'])), [{}]);
//assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn(), lib.filterIn('name1', ['2', '1'])), [{}]);

assert.deepEqual(lib.query([{name1: null}], lib.filterIn('name1', [null])), [{}]);
assert.deepEqual(lib.query([{name1: null}], lib.filterIn('name1', ['1'])), []);
assert.deepEqual(lib.query([{name1: null}], lib.filterIn('name1', [undefined])), []);
assert.deepEqual(lib.query([{name1: undefined}], lib.filterIn('name1', [undefined])), [{}]);
assert.deepEqual(lib.query([{name1: undefined}], lib.filterIn('name1', [null])), []);
assert.deepEqual(lib.query([{name1: undefined}], lib.filterIn('name1', ['1'])), []);

assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn('name2', ['1'])), []);

assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn('name1', ['1'])), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn('name1', ['2'])), []);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn('name1', ['1', '2'])), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn('name1', ['2', '1'])), [{}]);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn('name1', [null])), []);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn('name1', [undefined])), []);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn('name1', ['1']), lib.filterIn('name1', ['2'])), []);
assert.deepEqual(lib.query([{name1: '1'}], lib.filterIn('name1', ['1']), lib.filterIn('name1', ['1', '2'])), [{}]);

assert.deepEqual(lib.query([{name1: '1'}, {name1: '2'}], lib.filterIn('name1', ['1'])), [{}]);
assert.deepEqual(lib.query([{name1: '1'}, {name1: '2'}], lib.filterIn('name1', ['1']), lib.filterIn('name1', ['2'])), []);
assert.deepEqual(lib.query([{name1: '1'}, {name1: '2'}], lib.filterIn('name1', ['1', '2'])), [{}, {}]);

assert.deepEqual(lib.query([{name1: 1}], lib.filterIn('name1', [1])), [{}]);
assert.deepEqual(lib.query([{name1: 1}], lib.filterIn('name1', ['1'])), []);
assert.deepEqual(lib.query([{name1: 1}], lib.filterIn('name1', [2])), []);
assert.deepEqual(lib.query([{name1: 1}], lib.filterIn('name1', ['2'])), []);
assert.deepEqual(lib.query([{name1: 1}], lib.filterIn('name1', [1, 2])), [{}]);
assert.deepEqual(lib.query([{name1: 1}], lib.filterIn('name1', [2, 1])), [{}]);
assert.deepEqual(lib.query([{name1: 1}], lib.filterIn('name1', [null])), []);
assert.deepEqual(lib.query([{name1: 1}], lib.filterIn('name1', [undefined])), []);

//--------------------------------------------------------------------
// filterIn + select
//--------------------------------------------------------------------

assert.deepEqual(lib.query([{name1: '1'}, {name1: '2'}], lib.filterIn('name1', ['1']), lib.select('name1')), [{name1: '1'}]);
assert.deepEqual(lib.query([{name1: '1'}, {name1: '2'}], lib.filterIn('name1', ['1']), lib.filterIn('name1', ['2']), lib.select('name1')), []);
assert.deepEqual(lib.query([{name1: '1'}, {name1: '2'}], lib.filterIn('name1', ['1', '2']), lib.select('name1')), [{name1: '1'}, {name1: '2'}]);

assert.deepEqual(lib.query([{name1: '1_1', name2: '1_2'}, {name1: '2_1', name2: '2_2'}], lib.filterIn('name1', ['1_1']), lib.select('name1')), [{name1: '1_1'}]);
assert.deepEqual(lib.query([{name1: '1_1', name2: '1_2'}, {name1: '2_1', name2: '2_2'}], lib.filterIn('name1', ['1_1']), lib.filterIn('name2', ['1_2']), lib.select('name1')), [{name1: '1_1'}]);
assert.deepEqual(lib.query([{name1: '1_1', name2: '1_2'}, {name1: '2_1', name2: '2_2'}], lib.filterIn('name1', ['1_1']), lib.filterIn('name2', ['2_2']), lib.select('name1')), []);

assert.deepEqual(lib.query([{name1: 'a'}, {name1: 'b'}, {name1: 'c'}], lib.filterIn('name1', ['a', 'b']), lib.filterIn('name1', ['b', 'c']), lib.select('name1')), [{name1: 'b'}]);

console.info('OK!');
