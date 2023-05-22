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

    // Front

    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    front() {
        // if list is empty, return null
        if (this.head === null) {
            return null
        }

        return this.head.value
    }

    // Create display() that uses a while loop and a runner to return a string containing all list values.
    // Build what you wish console.log(myList) did!

    display() {
        // declare a list variable that will hold list value
        var list = ""

        if (this.head === null) {
            return "No values in list"
        }
        // add to the list the current head value
        list = list + this.head.value
        // declare a runner variable that will hold the next head value
        var runner = this.head.next
        // create a while loop that will run only when the runner value is not empty
        while (runner !== null) {
            // add to the list the value held in the runner head variable
            list = list + " | " + runner.value
            // move the runner head variable to the next node
            runner = runner.next
        }

        return list
    }
    
}

// instantiate SLL class with empty list
var testSLL = new SLL()

// // add value to front
// testSLL.addFront(8)
// console.log(testSLL)
// testSLL.addFront(21)
// console.log(testSLL)
// // remove node at front
// testSLL.removeFront()
// console.log(testSLL)
// testSLL.addFront(7)
// testSLL.addFront(31)
// console.log(testSLL)
// testSLL.removeFront()
// // return value at head of list
// console.log("Head value:")
// console.log(testSLL.front())
// testSLL.removeFront()
// console.log("Head value:")
// console.log(testSLL.front())

// return list values from display
console.log(testSLL.display())
testSLL.addFront(76)
console.log(testSLL.display())
// Node { data: 76, next: null }
testSLL.addFront(2)
console.log(testSLL.display())
// Node { data: 2, next: Node { data: 76, next: null } }
testSLL.display()
console.log(testSLL.display())
// "2, 76"
testSLL.addFront(11.41)
console.log(testSLL.display())
// Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
console.log(testSLL.display())
testSLL.display()
// "11.41, 2, 76"