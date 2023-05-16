// Push Front

// Given an array and an additional value, insert this value at the beginning of the array.
// You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

console.log("Push Front:")

function pushFront(array, value) {
    for(let i = array.length; i >= 0; i--) {
        // console.log(array[i])
        // example: [5,7,2,3]
        // set array at index 4 (undefined in first loop) to value of array at index 3
        // this will shift each array value to the right, leaving array index 0 to be undefined
        array[i] = array[i-1]
    }
    // set array at index 0 (currently undefined) to a value (i.e. 8)
    array[0] = value
    return array
}

console.log(pushFront([5,7,2,3], 8))

console.log("--------------------")

// Pop Front

// Given an array, remove and return the value at the beginning of the array. Prove the value
// is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

console.log("Pop Front:")

function popFront(array) {
    // hold the value at index 0 for returning
    let value = array[0]

    for(let i = 0; i < array.length; i++) {
        // first loop, set array at index 0 to value at index 1
        // loop shifts each value in the array to left, leaving value at final index (i.e. array.length) undefined
        // get rid of undefined value by decreasing the array.length
        array[i] = array[i+1]
    }
    array.length = array.length - 1
    console.log(array)
    return value
}

console.log(popFront([0,5,10,15]))

console.log("--------------------")

// Insert At

// Given an array, index, and additional value, insert the value into array at given index.
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(),
// you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

console.log("Insert At:")

function insertAt(array, index, value) {
    for(let i = array.length; i >= index; i--) {
        array[i] = array[i-1]
        console.log(array)
        // example: [9,33,7], index = 1, value = 42
        // first loop --> [9,33,7,7] --> i = 3 (i.e. array.length)
        // second loop --> [9,33,33,7] --> i = 2
        // third loop --> [9,9,33,7] --> i = 1
        // loop stops after third iteration b/c i = 0 --> i is not >= index (i.e. 1)
    }
    // console.log(array)
    array[index] = value
    // set array at specified index to specified value --> [9,42,33,7]
    return array
}

console.log(insertAt([9,33,7], 1, 42))