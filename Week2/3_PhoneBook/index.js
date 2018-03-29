// Телефонная книга
var phoneBook = {
    persons: {},

    ADD: function(personName, newPhones) {
        var phones = this.persons[personName] || [];
        Array.prototype.push.apply(phones, newPhones.split(',').filter(function(item, itemIndex, source) { return !phones.includes(item) && (source.indexOf(item) === itemIndex); }));
        this.persons[personName] = phones;
    },
    REMOVE_PHONE: function(phone) {
        var removeResult = false;
        for(var personName in this.persons) {
            this.persons[personName] = (this.persons[personName] || []).filter(
                function(item) {
                    if(item === phone) {
                        removeResult = true;
                        return false;
                    }                
                    return true;
                });
        }
        return removeResult;
    },
    SHOW: function() {
        var result = [];
        for(var personName in this.persons) {
            var phones = this.persons[personName] || [];
            if(phones.length > 0) {
                result.push(personName + ': ' + phones.join(', '));
            }
        }
        return result.sort();
    },
    CLEAR: function() {
        this.persons = {};
    }
};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var params = command.split(' ');
    return phoneBook[params[0]](params[1], params[2]);
};
