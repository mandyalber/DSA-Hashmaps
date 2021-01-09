const Hashmap = require('./HashmapClass')

   const items = [
        { "Hobbit": "Bilbo" },
        { "Hobbit": "Frodo" },
        { "Wizard": "Gandalf" },
        { "Human": "Aragorn" },
        { "Elf": "Legolas" },
        { "Maiar": "The Necromancer" },
        { "Maiar": "Sauron" },
        { "RingBearer": "Gollum" },
        { "LadyOfLight": "Galadriel" },
        { "HalfElven": "Arwen" },
        { "Ent": "Treebeard" }
    ]

function main() {

    const lotr = new Hashmap()

    Hashmap.MAX_LOAD_RATIO = 0.5
    Hashmap.SIZE_RATIO = 3

 

    items.map(item => {
        let itemKey = Object.keys(item)[0]
        let itemValue = item[itemKey]
        lotr.set(itemKey, itemValue)
    })

    console.log(lotr)

    console.log(lotr.get('Maiar'))

    console.log(lotr.get('Hobbit'))
    //Missing Bilbo and The Necromancer (duplicate keys)
    //Capacity is 24 (started at 8, resized by factor of 3 when we hit 9th item)
}

main()

