# Strings Library

### Functions of Library Include

capitalize()
 - Makes the **first character** of a given string uppercase
 > hello world -> Hello world

allCaps()
 - Makes **all** characters uppercase
 > hello world -> HELLO WORLD

capitalizeWords()
 - Makes the **first character of each word uppercase**
 > what is an array -? What Is An Array

extraSpacesErase()
 - Removes **all** spaces from the **beginning and end** of a string **along with** any extra spaces in the middle
 > "     Hello     World     " -> "Hello World"

preciseFilter()
 - Similar to kebobCase formatting, it removes extra spaces and **replaces with the hyphen**, and makes all characters lowercase.
 > Hello World! -> hello-world

snakeCase()
 - Removes extra space and replaces spaces **with an underscore**, and makes all characters lowercase
 > What In The World -> what_in_the_world

camelCase()
 - Lowercases the **first character** of the **first word** then uppercases the first character of **all other words** and removes all spaces
 > Camel Case Function -> camelCaseFunction

shift() 
 - Takes the first character of a string and **moves it to the end of a string**
 > Hello World -> ello WorldH

makeHashTag() 
 - Converts a given string to a hash tag, beginning with the hashtag symbol (#) and no spaces.
 > Hello World -> ['#Hello', '#World']

isEmpty()
 - Returns *true* if the gien string is empty or contains only white space.
 > "     " -> *true*