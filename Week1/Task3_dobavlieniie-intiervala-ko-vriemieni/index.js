/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
     //var date = new Date(0, 0, 0, hours, minutes + interval, 0, 0);
     //return numberToStringWithLeadingZero(date.getHours()) + ":" + numberToStringWithLeadingZero(date.getMinutes());

    var resultHours = (Math.floor((interval + minutes) / 60) + hours) % 24;
    var resultMinutes = (interval + minutes) % 60;
    return numberToStringWithLeadingZero(resultHours) + ":" + numberToStringWithLeadingZero(resultMinutes);
};

var numberToStringWithLeadingZero = function (number) {
    return (number <= 9) ? ("0" + number.toString()) : number.toString();
} 
