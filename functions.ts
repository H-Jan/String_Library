
function capitalize(strng: string): string{
    const first: string = strng[0].toUpperCase();
    const rest: string = strng.slice(1);
    return first + rest;
}

function allCaps(str: string): string{
    return str.toUpperCase();
}

function capitalizeWords(str: string): string{
    const array: string[] = str.split(' ');
    const upperWords: string[] = array.map( word => capitalize(word) );
    return upperWords.join(' ');
}

function extraSpacesErase(str: string): string {
    const trimmed: string = str.trim();
    const chars: string[] = trimmed.split(' ');
    const filtered: string[] = chars.filter( (char) => char != '' );
    const result: string = filtered.join(' ');
    return(result);
}

function preciseFilter(str: string, separator = '-'): string{
    const lower: string= str.toLowerCase();
    const chars: string[] = lower.split('');
    const filtered: string[] = chars.filter((char) => {
        const code: number = char.charCodeAt(0)
        if (code > 96 && code < 123) {
            return true;
        } else if (code > 47 && code < 58) {
            return true;
        } else if (code == 32 || code == 45) {
            return true;
        }
        return false;
    })
    const freeSpace: string = extraSpacesErase(filtered.join(''));
    return freeSpace.split(' ').join(separator);
}
    
function snakeCase(str: string): string{
    return preciseFilter(str, '_');
}

function camelCase(str: string): string {
    const words: string = capitalizeWords(str);
    const trimmed: string = words.trim();
    const camel_array: string[] = trimmed.split(' ');
    const first_lower: string = camel_array[0].toLowerCase();
    const remainder: string[] = camel_array.slice(1);
    const all_words: string = remainder.join('');
    return first_lower + all_words;
    
}

function shift(str: string): string {
    const firstChar: string = str[0];
    const string: string = str.slice(1);
    return string + firstChar;
}

function makeHashTag(str: string): string[]{
    const capital: string = capitalizeWords(str);
    const cap_array: string[] = capital.split(' ');
    const tags: string[] = cap_array.map(tag => `#${tag}`)
    return tags;
}

function isEmpty(str: string): boolean{
    let empty: boolean = true;
    for (let i: number = 0; i < str.length; i += 1) {
        if (str[i] == ' ' || str[i] == '\n' || str[i] == '\r' || str[i] == '\t'){
            return true;
        } else {
            empty = false;
        }
    }
    return empty;
}

// ------------------- Function Returns ------------------ //

const str: string = 'hello world this is me'
console.log( "Capitalize Function: ", capitalize(str) );

console.log("All Caps Function: ", allCaps(str));

console.log(capitalizeWords(str));
console.log("Capitalize Words Function: ", capitalizeWords('Where did everyone go'));

const example_spaces: string = '    Hello        World!     '
console.log( "Extra Spaces Erase Function: ", extraSpacesErase(example_spaces) );

const example_filter_char: string = '    Hello World!!!   hypo-alo-genic    1, 2, 3, 4, 99     '
console.log("Precise Filter Function: ", preciseFilter(example_filter_char));

console.log("Snake Case Function: ", snakeCase(example_filter_char));

const camel_example: string = "camel case censor here"
console.log("Camel Case Function: ", camelCase(camel_example));

const shift_example: string = "Hello World"
console.log("Shift Case Function: ", shift(shift_example));

const hash_tag_example: string = "Amazing bongo drums"
console.log("Make Hash Tag Function: ", makeHashTag(hash_tag_example));

const isEmpty_example: string = "    "
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