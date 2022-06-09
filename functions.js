function capitalize(strng) {
    var first = strng[0].toUpperCase();
    var rest = strng.slice(1);
    return first + rest;
}
function allCaps(str) {
    return str.toUpperCase();
}
function capitalizeWords(str) {
    var array = str.split(' ');
    var upperWords = array.map(function (word) { return capitalize(word); });
    return upperWords.join(' ');
}
function extraSpacesErase(str) {
    var trimmed = str.trim();
    var chars = trimmed.split(' ');
    var filtered = chars.filter(function (char) { return char != ''; });
    var result = filtered.join(' ');
    return (result);
}
function preciseFilter(str, separator) {
    if (separator === void 0) { separator = '-'; }
    var lower = str.toLowerCase();
    var chars = lower.split('');
    var filtered = chars.filter(function (char) {
        var code = char.charCodeAt(0);
        if (code > 96 && code < 123) {
            return true;
        }
        else if (code > 47 && code < 58) {
            return true;
        }
        else if (code == 32 || code == 45) {
            return true;
        }
        return false;
    });
    var freeSpace = extraSpacesErase(filtered.join(''));
    return freeSpace.split(' ').join(separator);
}
function snakeCase(str) {
    return preciseFilter(str, '_');
}
function camelCase(str) {
    var words = capitalizeWords(str);
    var trimmed = words.trim();
    var camel_array = trimmed.split(' ');
    var first_lower = camel_array[0].toLowerCase();
    var remainder = camel_array.slice(1);
    var all_words = remainder.join('');
    return first_lower + all_words;
}
function shift(str) {
    var firstChar = str[0];
    var string = str.slice(1);
    return string + firstChar;
}
function makeHashTag(str) {
    var capital = capitalizeWords(str);
    var cap_array = capital.split(' ');
    var tags = cap_array.map(function (tag) { return "#".concat(tag); });
    return tags;
}
function isEmpty(str) {
    var empty = true;
    for (var i = 0; i < str.length; i += 1) {
        if (str[i] == ' ' || str[i] == '\n' || str[i] == '\r' || str[i] == '\t') {
            return true;
        }
        else {
            empty = false;
        }
    }
    return empty;
}
// ------------------- Function Returns ------------------ //
var str = 'hello world this is me';
console.log("Capitalize Function: ", capitalize(str));
console.log("All Caps Function: ", allCaps(str));
console.log(capitalizeWords(str));
console.log("Capitalize Words Function: ", capitalizeWords('Where did everyone go'));
var example_spaces = '    Hello        World!     ';
console.log("Extra Spaces Erase Function: ", extraSpacesErase(example_spaces));
var example_filter_char = '    Hello World!!!   hypo-alo-genic    1, 2, 3, 4, 99     ';
console.log("Precise Filter Function: ", preciseFilter(example_filter_char));
console.log("Snake Case Function: ", snakeCase(example_filter_char));
var camel_example = "camel case censor here";
console.log("Camel Case Function: ", camelCase(camel_example));
var shift_example = "Hello World";
console.log("Shift Case Function: ", shift(shift_example));
var hash_tag_example = "Amazing bongo drums";
console.log("Make Hash Tag Function: ", makeHashTag(hash_tag_example));
var isEmpty_example = "    ";
console.log("Is Empty Function: ", isEmpty(isEmpty_example));
// --------- Exports -------- //
module.exports = {
    capitalize: capitalize,
    allCaps: allCaps,
    capitalizeWords: capitalizeWords,
    extraSpacesErase: extraSpacesErase,
    preciseFilter: preciseFilter,
    snakeCase: snakeCase,
    camelCase: camelCase,
    shift: shift,
    makeHashTag: makeHashTag,
    isEmpty: isEmpty
};
