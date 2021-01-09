const Hashmap = require('./HashmapClass')

function isPalindrome(string) {
    hashmap = new Hashmap()
    Hashmap.MAX_LOAD_RATIO = 0.5
    Hashmap.SIZE_RATIO = 3

    let odd = 0
    string = string.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
    
    for (let i = 0; i < string.length; i++) {
        if (hashmap.get(string[i])) {
            let value = hashmap.get(string[i])
            hashmap.set(string[i], value += 1)
        }
        else {
            hashmap.set(string[i], 1)
        }
    }

    for (let j = 0; j < string.length; j++) {
        if ((hashmap.get(string[j])% 2) !== 0) {
            odd += 1
        }
        else {
            odd = odd
        }
    }
    return odd > 1 ? false : true
}
console.log(isPalindrome('acecarr'))//true
console.log(isPalindrome('north'))//false
console.log(isPalindrome(`I'm a lasagna hog, hang a salami. Go!`))//true