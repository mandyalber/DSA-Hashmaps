const Hashmap = require('./HashmapClass')

function removeDuplicates(string) {
    string = string.toLowerCase()
    let result = ''
    let duplicates = new Hashmap()
    Hashmap.MAX_LOAD_RATIO = 0.5;
    Hashmap.SIZE_RATIO = 3;

    for (let i = 0; i < string.length; i++) {
        //if the character is in the hashmap, don't do anything
        if (duplicates.get(string[i])) {
            continue
        }
        //if it isn't, set key and value to the character in the hashmap
        else {
            duplicates.set(string[i], string[i])
            result += string[i]
        }
    }
    return result
}
console.log(removeDuplicates('Google'))
console.log(removeDuplicates('Google all that you think can think of'))