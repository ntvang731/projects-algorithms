// Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

console.log("Remove Blanks:")

function removeBlanks(string) {
    // declare a new string to hold string with non-space characters
    let newString = ''

    for(let i = 0; i < string.length; i++) {
        // loop through each character in string;
        // if non-space character, then add that
        // character to newString
        if(string[i] != ' ') {
            newString += string[i]
        }
    }
    return newString
}

console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

console.log("--------------------")

// Get Digits

// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
// You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

console.log("Get Digits:")

function getDigits(string) {
    // declare a new string to hold number-string
    let newString2 = ''

    for(let i = 0; i < string.length; i++) {
        // isNaN checks for non-number character
        // loop through each character in string;
        // if character is not a non-number character (i.e. is a number),
        // then add to newString2
        if(!isNaN(string[i])) {
            newString2 += string[i]
        }
    }
    return Number(newString2)
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

console.log("--------------------")

// Acronyms

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).
// You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

console.log("Acronyms:")

function acronyms(string) {
    // split method takes each set of characters in a string that is not separated by a space
    // and place it as a listed element in an array
    // e.g. "Live from New York, it's Saturday Night!" --> ['Live','from','New','York,',"it's",'Saturday','Night!']
    let string3 = string.split(' ')
    console.log(string3)
    // declare string4 to hold acronym
    let string4 = ''

    // for each word in string 3 array
    // check if word holds a value element (i.e. undefined) by comparing its length to greater than 0
    // if true, then capitalize and add the first letter of the word (i.e. at index 0 of that word) to string4 container
    for(let word in string3) {
        if(string3[word].length > 0) {
            string4 += string3[word][0].toUpperCase()
        }
    }
    return string4
}

console.log(acronyms("Live from New York, it's Saturday Night!"))

console.log("--------------------")

// Count Non-Spaces

// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

console.log("Count Non-Spaces:")

function countNonSpaces(string) {
    // declare total variable to keep track of number of non-space characters
    let total = 0

    // loop through each character in the string;
    // if the character is not a space character
    // then add 1 to the total 
    for(let i = 0; i < string.length; i++) {
        if(string[i] != ' ') {
            total += 1
        }
    }
    return total
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))

console.log("--------------------")

// Remove Shorter Strings

// Create a function that, given an array of strings and a numerical value, returns an array that only contains
// strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

console.log("Remove Shorter Strings:")

function removeShorterStrings(array, number) {
    // declare array container to hold new string elements
    let stringArray = []
    // declare a variable for indexing through stringArray
    let index = 0

    // for each word in given array
    // check the legnth if greater than or equal to given number
    // if true, then add the word to the stringArray container starting at index 0
    // for each word that is added to stringArray, increase the index by 1 to hold next possible word
    for(let word in array) {
        if(array[word].length >= number) {
            stringArray[index++] = array[word]
        }
    }
    return stringArray
}

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))