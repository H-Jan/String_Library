const str = 'hello world this is me'

// CHALLENGE 1 

function capitalize(string) {
    const first = string[0].toUpperCase()
    const rest = string.slice(1)
    return first + rest
}

console.log( capitalize(str) )

// CHALLENGE 2 - Function allCaps

function allCaps(str) {
    return str.toUpperCase()
}

console.log(allCaps(str))

// CHALLENGE 3 - capitalizeWords makes the first character of each word uppercase, each word separated by a string

function capitalizeWords(str) {
    const array = str.split(' ')
    // split between each space, i.e. each word
    const upperWords = array.map( word => capitalize(word) )
    return upperWords.join(' ')
}

console.log(capitalizeWords(str))
console.log(capitalizeWords('Where did everyone go'))
// Tests show successful capitalization of words

// Challenge 4 - Remove all spaces from the beginning and end of a string with any extra spaces in the middle.
// Created as function extraSpacesErase()

function extraSpacesErase(str) {
    const trimmed = str.trim()
    const chars = trimmed.split(' ')
    const filtered = chars.filter( (char) => char != '' )
    const result = filtered.join(' ')
    return(result)
}

const example_spaces = '    Hello        World!     '

console.log( extraSpacesErase(example_spaces) )

// Challenge 5 - Filter out unwanted characters

function preciseFilter(str, separator = '-'){
    const lower = str.toLowerCase()
    const chars = lower.split('')
    const filtered = chars.filter((char) => {
        const code = char.charCodeAt(0)
        if (code > 96 && code < 123) {
            return true
        } else if (code > 47 && code < 58) {
            return true
        } else if (code == 32 || code == 45) {
            return true
        }
        return false
    })
    const freeSpace = extraSpacesErase(filtered.join(''))
    return freeSpace.split(' ').join(separator)
}
    
const example_filter_char = '    Hello World!!!   hypo-alo-genic    1, 2, 3, 4, 99     '

console.log(preciseFilter(example_filter_char))

// Challenge 6 - create snakeCase() that removes extra space and replaces spaces with underscore and makes all characters lowercase
// Will be a modification on above preciseFilter function

function snakeCase(str) {
    return preciseFilter(str, '_')
}
console.log(snakeCase(example_filter_char))

// Challenge 7 - Lowercase the first character of the first word and uppercase the first character of all other words
// while removing all spaces
// Example: Camel Case -> camelCase

function camelCase(str) {
    // Capitalize all words. If we have a long string, all words will have first letter capitalized
    const words = capitalizeWords(str)
    // trim off white spaces
    const trimmed = words.trim()
    // Split the words into an array
    const camel_array = trimmed.split(' ')
    // Lowercase the first index of our array
    const first_lower = camel_array[0].toLowerCase()
    // Join with split array of all capitalized words and return
    const remainder = camel_array.slice(1)
    const all_words = remainder.join('')
    return first_lower + all_words
    
}

camel_example = "camel case censor here"

console.log(camelCase(camel_example))

// Challenge 8 - shift() takes the first character of a string and moves to the end of a string
// Example: Hello World -> ello WorldH

function shift(str) {
    firstChar = str[0]
    string = str.slice(1)
    return string + firstChar
}

shift_example = "Hello World"
console.log(shift(shift_example))

// Challenge 9 - makeHashTag(str) converts a given string to a hash tag (#ThisChallenge)
// Each word in the phrase begins with an uppercase letter
// Example: input = "Amazing bongo drums for sale". output = "['#Amazing', '#Bongo', '#Drums']"

function makeHashTag(str) {
    // First lowercase all words for hash tag as per example
    const capital = capitalizeWords(str)
    // Split into an array
    const cap_array = capital.split(' ')
    // Define empty array to store hashtags
    const tags_array = []
    // Create for loop that iterates through each index by factor of 1 for full length of 
    // current strings array. At each index, ads a '#' symbol
    for (let i = 0; i < cap_array.length; i += 1) {
        const hashtag = `#${cap_array[i]}`
        tags_array.push(hashtag)
    }
    return tags_array
}

hash_tag_example = "Amazing bongo drums"
console.log(makeHashTag(hash_tag_example))

// Challenge 10 - isEmpty(str) returns 'true' if given string is empty or contains only whitespace (spaces, line returns, tabs)
// Example: input = "ABC DEF   G". output = false

function isEmpty(str) {
    // Set isEmpty to true. This is our base case
    let empty = true
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ' || str[i] == '\n' || str[i] == '\r' || str[i] == '\t'){
            return true
        } else {
            empty = false
        }
    }
    return empty
}

isEmpty_example = "    "
console.log(isEmpty(isEmpty_example))