/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    return hashtags.map(ToLower).filter(IsUnique).join(', ');
};

function IsUnique(entry, entryIndex, source) {
    return source.indexOf(entry) === entryIndex;
}

function ToLower(entry) {
    return entry.toLowerCase();
}
