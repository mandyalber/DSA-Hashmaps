const Hashmap = require('./HashmapClass')

function anagrams(array) {
    let anagramHash = new Hashmap()

    for (let i = 0; i < array.length; i++) {
        let sortedItem = array[i].split('').sort().join()
        if (!anagramHash.get(sortedItem)) {
            anagramHash.set(sortedItem, [array[i]])
        }
        else {
            anagramHash.set(sortedItem, [...anagramHash.get(sortedItem), array[i]])
        }
    }

    let result = []
    anagramHash._hashTable.map(slot => {
        if (slot) {
            result.push(slot.value)
        }
    })
    return result
}
console.log(anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
//output: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]
