/**
 * @param {String} date
 * @returns {Object}
 */

function _ToDate(val) {
    var date_time_array = val.split(' ');
    var date_array = date_time_array[0].split('-');
    var time_array = date_time_array[1].split(':');
    return new Date(date_array[0], Number(date_array[1]) - 1, date_array[2], time_array[0], time_array[1]);
}

function _ToStr(number) {
    return (number <= 9) ? ("0" + number.toString()) : number.toString(); 
}

function _ModifyMyDate(myDate, count, itemName) {
    var parsedDate = _ToDate(myDate);
    itemName = itemName || '';
    if(itemName === 'years') {
        parsedDate.setFullYear(parsedDate.getFullYear() + count);
    }
    else if(itemName === 'months') {
        parsedDate.setMonth(parsedDate.getMonth() + count);
    }
    else if(itemName === 'days') {
        parsedDate.setDate(parsedDate.getDate() + count);
    }
    else if(itemName === 'hours') {
        parsedDate.setHours(parsedDate.getHours() + count);
    }
    else if(itemName === 'minutes') {
        parsedDate.setMinutes(parsedDate.getMinutes() + count);
    }
    else if(itemName === 'seconds') {
        parsedDate.setSeconds(parsedDate.getSeconds() + count);
    }
    else {
        throw new TypeError();
    }
    return _MyDate(parsedDate.getFullYear() + '-' + _ToStr(parsedDate.getMonth() + 1) + '-' + _ToStr(parsedDate.getDate())
        + ' ' + _ToStr(parsedDate.getHours()) + ':' + _ToStr(parsedDate.getMinutes()));
}

function _MyDate(date) {
    var result = {
        value: date,
        add : function(count, itemName) {
            if(count >= 0) {
                return _ModifyMyDate(this.value, count, itemName);
            }
            throw new TypeError();
        },
        subtract : function(count, itemName) {
            if(count >= 0) {
                return _ModifyMyDate(this.value, -count, itemName);
            }
            throw new TypeError();
        }
    };
    return result;
};

module.exports = function (date) {
    return _MyDate(date);
}; 
