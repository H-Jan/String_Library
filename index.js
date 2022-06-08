// CHALLENGE 1 
function capitalize(string) {
    const first = string[0].toUpperCase();
    const rest = string.slice(1);
    return first + rest;
}

// CHALLENGE 2 - Function allCaps
function allCaps(str) {
    return str.toUpperCase();
}

// CHALLENGE 3 - capitalizeWords makes the first character of each word uppercase, each word separated by a string
function capitalizeWords(str) {
    const array = str.split(' ');
    // split between each space, i.e. each word
    const upperWords = array.map( word => capitalize(word) );
    return upperWords.join(' ');
}

// CHALLENGE 4 - Remove all spaces from the beginning and end of a string with any extra spaces in the middle.
// Created as function extraSpacesErase()
function extraSpacesErase(str) {
    const trimmed = str.trim();
    const chars = trimmed.split(' ');
    const filtered = chars.filter( (char) => char != '' );
    const result = filtered.join(' ');
    return(result);
}

// CHALLENGE 5 - Filter out unwanted characters
function preciseFilter(str, separator = '-'){
    const lower = str.toLowerCase();
    const chars = lower.split('');
    const filtered = chars.filter((char) => {
        const code = char.charCodeAt(0)
        if (code > 96 && code < 123) {
            return true;
        } else if (code > 47 && code < 58) {
            return true;
        } else if (code == 32 || code == 45) {
            return true;
        }
        return false;
    })
    const freeSpace = extraSpacesErase(filtered.join(''));
    return freeSpace.split(' ').join(separator);
}
    
// CHALLENGE 6 - create snakeCase() that removes extra space and replaces spaces with underscore and makes all characters lowercase
// Will be a modification on above preciseFilter function
function snakeCase(str) {
    return preciseFilter(str, '_');
}

// CHALLENGE 7 - Lowercase the first character of the first word and uppercase the first character of all other words
// while removing all spaces
// Example: Camel Case -> camelCase
function camelCase(str) {
    // Capitalize all words. If we have a long string, all words will have first letter capitalized
    const words = capitalizeWords(str);
    // trim off white spaces
    const trimmed = words.trim();
    // Split the words into an array
    const camel_array = trimmed.split(' ');
    // Lowercase the first index of our array
    const first_lower = camel_array[0].toLowerCase();
    // Join with split array of all capitalized words and return
    const remainder = camel_array.slice(1);
    const all_words = remainder.join('');
    return first_lower + all_words;
    
}


// CHALLENGE 8 - shift() takes the first character of a string and moves to the end of a string
// Example: Hello World -> ello WorldH
function shift(str) {
    const firstChar = str[0];
    const string = str.slice(1);
    return string + firstChar;
}

// CHALLENGE 9 - makeHashTag(str) converts a given string to a hash tag (#ThisChallenge)
// Each word in the phrase begins with an uppercase letter
// Example: input = "Amazing bongo drums for sale". output = "['#Amazing', '#Bongo', '#Drums']"
function makeHashTag(str) {
    // First lowercase all words for hash tag as per example
    const capital = capitalizeWords(str);
    // Split into an array
    const cap_array = capital.split(' ');
    // Define empty array to store hashtags
    const tags = cap_array.map(tag => `#${tag}`)
    return tags;
}

// CHALLENGE 10 - isEmpty(str) returns 'true' if given string is empty or contains only whitespace (spaces, line returns, tabs)
// Example: input = "ABC DEF   G". output = false
function isEmpty(str) {
    // Set isEmpty to true. This is our base case
    let empty = true;
    for (let i = 0; i < str.length; i += 1) {
        if (str[i] == ' ' || str[i] == '\n' || str[i] == '\r' || str[i] == '\t'){
            return true;
        } else {
            empty = false;
        }
    }
    return empty;
}

// ------------------- Function Returns ------------------ //

const str = 'hello world this is me'
//capitalize()
console.log( "Capitalize Function: ", capitalize(str) );

//allCaps()
console.log("All Caps Function: ", allCaps(str));

//capitalizeWords()
console.log(capitalizeWords(str));
console.log("Capitalize Words Function: ", capitalizeWords('Where did everyone go'));

//extraSpacesErase()
const example_spaces = '    Hello        World!     '
console.log( "Extra Spaces Erase Function: ", extraSpacesErase(example_spaces) );

//preciseFilter()
const example_filter_char = '    Hello World!!!   hypo-alo-genic    1, 2, 3, 4, 99     '
console.log("Precise Filter Function: ", preciseFilter(example_filter_char));

//snakeCase()
console.log("Snake Case Function: ", snakeCase(example_filter_char));

//camelCase()
const camel_example = "camel case censor here"
console.log("Camel Case Function: ", camelCase(camel_example));

//shift()
const shift_example = "Hello World"
console.log("Shift Case Function: ", shift(shift_example));

//makeHashTag
const hash_tag_example = "Amazing bongo drums"
console.log("Make Hash Tag Function: ", makeHashTag(hash_tag_example));

//isEmpty()
const isEmpty_example = "    "
console.log("Is Empty Function: ", isEmpty(isEmpty_example));

// --------- Exports -------- //

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords,
    extraSpacesErase,
    preciseFilter,
    snakeCase,
    camelCase,
    shift,
    makeHashTag,
    isEmpty,
}

