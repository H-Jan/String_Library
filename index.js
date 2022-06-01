const str = 'hello world this is me'

// Challenge 1 
const arr = str.split('')
arr[0] = arr[0].toUpperCase()
console.log( arr.join('-') )

function capitalize(string) {
    const first = string[0].toUpperCase()
    const rest = string.slice(1)
    return first + rest
}

console.log( capitalize(str) )

// Challenge 2

