const str = 'hello world this is me'

// CHALLENGE 1 

/* const arr = str.split('')
arr[0] = arr[0].toUpperCase()
console.log( arr.join('-') )
*/

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
