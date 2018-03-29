/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    var hours_ = Number(hours);
    if(Number.isNaN(hours_) || !Number.isSafeInteger(hours_) || hours_ < 0 || hours_ > 23) {
        return false;
    }
    var minutes_ = Number(minutes);
    if(Number.isNaN(minutes_) || !Number.isSafeInteger(minutes_) || minutes_ < 0 || minutes_ > 59) {
        return false;
    }
    return true;
}; 
