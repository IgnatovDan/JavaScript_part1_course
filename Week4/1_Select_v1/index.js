/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
var opSelect = 'select';
var opFilterIn = 'filterIn';

function query(collection) {
    if(collection === undefined) {
        return;
    }
    if(collection === null) {
        return null;
    }
    if(!Array.isArray(collection)) {
        return collection;
    }
    var result;

    if(arguments.length === 1) {
        //Если в функцию 'query' передать только коллекцию, то вернётся её копия.
        result = collection.slice();
    }
    else {
        //После выполнения функции 'query' не должна измениться исходная коллекция.
        var operations = Array.from(arguments).slice(1);
        var filteredCollection = _filterCollection(collection, operations);
        result = _selectProperties(filteredCollection, _joinPropertyNamesFromSelectOperations(operations));
    }
    return result;
}

/**
 * @params {String[]}
 */
function select() {
    var result = {
        operation: opSelect,
        propertyNames: Array.from(arguments)
    };
    return result;
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    //Гарантируется, что функция 'query' будет вызываться корректно. Дополнительную проверку аргументов делать не нужно.
    //filterIn()
    //filterIn('')
    var result = {
        operation: opFilterIn,
        propertyName: property,
        values: values
    };
    return result;
}

function _filterCollection(items, operations) {
    var filterOperations = operations.filter(_isFilterInOperation);
    var result = items.filter(
        currentItem => {
            var evaluateFilterResult = true;
            filterOperations.forEach(
                currentFilterOperation => {
                    if(evaluateFilterResult) { //TODO: break on the first 'false' ???
                        //if(currentFilterOperation.propertyName === null || currentFilterOperation.propertyName === undefined) {
                        //if(propertyName in currentCollectionObj) { - process properties in prototype.
                        if(currentItem.hasOwnProperty(currentFilterOperation.propertyName)) { //ignore properties in prototype.
                            evaluateFilterResult = currentFilterOperation.values.includes(currentItem[currentFilterOperation.propertyName]);
                        }
                        else {
                            evaluateFilterResult = false;
                        }
                    }
                }
            )
            return evaluateFilterResult;
        }
    );
    return result;
}

function _isItemFitsFilter() {

}

function _isFilterInOperation(operation) {
    return operation !== undefined && operation !== null && operation.operation === opFilterIn;
}

function _joinPropertyNamesFromSelectOperations(operations) {
    return operations.reduce(
        (result, currentOperation) => {
            if(currentOperation !== undefined && currentOperation !== null && currentOperation.operation === opSelect) {
                if(result === null) {
                    result = currentOperation.propertyNames;
                }
                else {
                    result = result.filter(
                        currentPropertyName => { return currentOperation.propertyNames.includes(currentPropertyName); }
                    );
                }
            }
            return result;
        },
        null
    );
}

function _selectProperties(items, propertyNames) {
    result = items.map((currentItem) => {
        var resultItem = {};
        if(propertyNames !== undefined && propertyNames !== null) {
            propertyNames.forEach(propertyName => {
                //Несколько операций 'select' должны отработать как одна с пересечёнными аргументами. Например, если мы выбираем поля a и b, а затем b и c, то в результате должно выбраться только поле b.
                //Операция 'select' должна игнорировать несуществующие в объекте поля.
                //if(propertyName in currentCollectionObj) { - process properties in prototype.
                if(currentItem.hasOwnProperty(propertyName)) { //ignore properties in prototype.
                    resultItem[propertyName] = currentItem[propertyName];
                }
            });
        }
        return resultItem;
    });
    return result;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
