const str = 'hello world'

console.log( str[0] )
console.log( str.length )
console.log( str.toUpperCase() )
console.log( str.slice(0) )


function capitalize(string) {
    const first = string[0].toUpperCase()
    const rest = string.slice(1)
    return first + rest
}

console.log( capitalize(str) )