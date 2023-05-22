// Fronts

// Use classes, attributes, and methods in the JavaScript language for all challenges.
// Use only a single JavaScript file for this assignment. All examples are done in order,
// starting with a new instance of the SLL class.

// Add Front

// Write a method that accepts a value and create a new node, assign it to the list head, and return
// a pointer to the new head node.

class SinglyLinkedNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLL {
    // constructor
    constructor() {
        this.head = null
    }
    addFront(value) {
        // create a node that will hold the value
        var newNode = new SinglyLinkedNode(value)
        newNode.next = this.head
        this.head = newNode

        return this.head
    }
    // Examples:
    
    // SLL1 = new SLL()
    // SLL1.addFront(18) => Node { data: 18, next: null }
    // SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
    // SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
    // Remove Front

    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    
    removeFront() {
        // need to check if head is already empty
        if (this.head === null) {
            return this.head
        }
        // need variable to hold value
        var deletedNode = this.head
        // moves head to next node
        this.head = deletedNode.next
        // set node to be deleted to null
        deletedNode.next = null

        return this.head
    }

    // Examples:
    
    // SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
    // SLL1.removeFront() => Node { data: 18, next: null }
    // Front

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    front() {
        // if list is empty, return null
        if (this.head === null) {
            return null
        }

        return this.head.value
    }

    // Examples:
    
    // SLL1.front() => 18
    // SLL1.removeFront() => null
    // SLL1.front() => null
}

// instantiate SLL class with empty list
var testSLL = new SLL()

// add value to front
testSLL.addFront(8)
console.log(testSLL)
testSLL.addFront(21)
console.log(testSLL)
// remove node at front
testSLL.removeFront()
console.log(testSLL)
testSLL.addFront(7)
testSLL.addFront(31)
console.log(testSLL)
testSLL.removeFront()
// return value at head of list
console.log("Head value:")
console.log(testSLL.front())
testSLL.removeFront()
console.log("Head value:")
console.log(testSLL.front())