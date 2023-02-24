# Ordered Count of Characters

The application counts the number of occurrences of each chaacter and returns it as a list of arrays in order of appearance. 

Example: 
- "abracadabra" ---->  [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

- "Code Wars -----> [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]

## Implementation

We create a new Map object to store the character counts. Then we loop over each character in the input string and increment its count in the Map. 

If the character is not in the Map yet, we initialize its count to zero before incrementing.

We then convert the Map to an array of `[char, count]` pairs using the `Array.from()` method and a destructuring assignment. This gives us the desired output in the order of appearance of the characters.

## How to Use

Uncomment the code in the solution file to test its functionality. Expect a response similar to the ones listed below. 

- `console.log(countChars("abracadabra"));` // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
- `console.log(countChars("Code Wars"));`  // [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
- `console.log(countChars("233312"));`    // [['2', 2], ['3', 3], ['1', 1]]