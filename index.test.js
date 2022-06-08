
const sp = require('./index')

test('Capitalize Function Test', () => {
    expect(sp.capitalize('hello world')).toBe('Hello world')
})

test('All Caps Function Test', () => {
    expect(sp.allCaps('hello world')).toBe('HELLO WORLD')
})

test('Capitalize Words Function Test', () => {
    expect(sp.capitalizeWords('hello world')).toBe('Hello World')
})

test('Extra Spaces Erase Function Test', () => {
    expect(sp.extraSpacesErase('    hello world!     ')).toBe('hello world!')
})

test('Precise Filter Function Test', () => {
    expect(sp.preciseFilter('hello world how are you')).toBe('hello-world-how-are-you')
})

test('Snake Case Function Test', () => {
    expect(sp.snakeCase('hello world')).toBe('hello_world')
})

test('Camel Case Function Test', () => {
    expect(sp.camelCase('hello world there')).toBe('helloWorldThere')
})

test('Shift Function Test', () => {
    expect(sp.shift('Hello World')).toBe('ello WorldH')
})

test('Hash Tag Function Test', () => {
    expect(sp.makeHashTag('hello world')).toStrictEqual(['#Hello', '#World'])
})

test('Is Empty Function Test', () => {
    expect(sp.isEmpty("     ")).toBe(true)
})