class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head
            while (tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    remove(item) {
        if (!this.head) {
            return null
        }
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        let currentNode = this.head
        let previousNode = this.head

        while ((currentNode !== null) && (currentNode.value !== item)) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        if (currentNode === null) {
            console.log('item not found')
            return
        }
        previousNode.next = currentNode.next
    }

    find(item) {
        let currentNode = this.head
        if (!this.head) {
            return null
        }
        while (currentNode.value !== item) {
            if (currentNode.next === null) {
                return null
            }
            else {
                currentNode = currentNode.next
            }
        }
        return currentNode
    }
}

class HashMapSeparate {
    constructor(initialCapacity = 8) {
        this.length = 0
        this._hashTable = []
        this._capacity = initialCapacity
        this._deleted = 0
    }



    get(key) {
        const index = this._findSlot(key)

        if (this._hashTable[index] === undefined) {
            return null
        }
        let chain = []
        let currentItem = this._hashTable[index].value.head

        while (currentItem) {
            chain.push(currentItem.value)
            currentItem = currentItem.next
        }
        return chain
    }


    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity

        if (loadRatio > HashMapSeparate.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMapSeparate.SIZE_RATIO)
        }

        let index = this._findSlot(key)

        if (!this._hashTable[index]) {
            this._hashTable[index] = {
                key,
                value: new LinkedList(),
                DELETED: false
            }
            this.length++
        }
        this._hashTable[index].value.insertLast(value)
    }

    delete(key) {
        const index = this._findSlot(key)
        const slot = this._hashTable[index]

        if (slot === undefined) {
            throw new Error('Key error')
        }

        slot.DELETED = true
        this.length--
        this._deleted++
    }

    _findSlot(key) {
        const hash = HashMapSeparate._hashString(key)
        const start = hash % this._capacity

        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity
            const slot = this._hashTable[index]

            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable
        this._capacity = size
        this.length = 0
        this._deleted = 0
        this._hashTable = []

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                let currentValue = slot.value.head
                while (currentValue) {
                    this.set(slot.key, currentValue.value)
                    currentValue = currentValue.next
                }
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }
}

module.exports = {
    HashMapSeparate,
    LinkedList,
    _Node
}
