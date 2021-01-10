const { HashMapSeparate } = require('./HashmapClassSepChain')

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

    const lotr = new HashMapSeparate()

    HashMapSeparate.MAX_LOAD_RATIO = 0.5
    HashMapSeparate.SIZE_RATIO = 3

    items.map(item => {
        let itemKey = Object.keys(item)[0]
        let itemValue = item[itemKey]
        lotr.set(itemKey, itemValue)
    })

    console.log(lotr)

    console.log(lotr.get('Maiar'))

    console.log(lotr.get('Hobbit'))
}

main()