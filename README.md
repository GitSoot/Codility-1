# Codility-1

This JavaScript function evaluates two numbers, providing a concise comparison and returning an informative string result – whether the first number is greater than, smaller than or equal to the second.

## Code Utilization

Uncomment the code block in the test.js file to confirm its functionality. Replace the numbers to find out which number is greater. 

- `console.log(compare(8, 3));   // "8 is greater than 3"`
- `console.log(compare(-2, -8)); // "-2 is greater than -8"`
- `console.log(compare(2, 2));   // "2 is equal to 2"`

 ## Implementation

### `Math.sign()`
 The function uses the Math.sign() method to determine the sign of the difference between the two numbers. It returns -1 if the argument is negative, 0 if it is zero, and 1 if it is positive.

 ### `Switch Case`

 The function then uses a switch statement to match the Math.sign() result with the appropriate string message. 
 
 - Case 1 execution is when the first number is greater than the second number 
 - Case -1 branch execution occurs when the first number is smaller than the second number
 - Case 0 branch is executed when the two numbers are equal.

 The function concatenates the two numbers with the appropriate string message using the + operator and returns the resulting string as output.

 ## Challenges

 The function does not use if statements or the ternary operator ? to compare the two numbers. This restriction makes the function more challenging to implement, but also more concise and elegant.