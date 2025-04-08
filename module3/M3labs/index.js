// Q1
// 1.
"" + 1 + 0; // adds strings and numbers then combines them together by concatenation

console.log("" + 1 + 0); // Result = "10", type String

// 2.
"" - 1 + 0; //subtract 1 from empty string which is converted to 0 then adds 0 to it

console.log("" - 1 + 0); // Result = -1, type Number

// 3.
true + false; // adds true and false together
 
console.log(true + false); // Result = 1 type Number, because boolean true is equal to 1 and false is equal to 0

// 4.
!true; // deems the boolean true to be false

console.log(!true); // Result = false, type Boolean

// 5.
6 / "3"; // divides 6 by the string "3", number type takes priority over string

console.log(6 / "3"); // Result = 2, type Number

// 6.
"2" * "3"; // multiplies the strings together, number type takes priority over string

console.log("2" * "3"); // Result = 6, type Number

// 7.
4 + 5 + "px"; // adds 4 and 5 together then concatenates the string "px" to the end of it, thus convertings the number to a string

console.log(4 + 5 + "px"); // Result = "9px", type String

// 8.
"$" + 4 + 5; // adds the string "$" to the number 4 then concatenates the number 5 to 4. Converts the number to a string

console.log("$" + 4 + 5); // Result = "$45", type String

// 9.
"4" - 2; // subtracts 3 from the string "4", converts the string to a number since there is no concatenation

console.log("4" - 2); // Result = 2, type Number

//10.
"4px" - 2; // subtracts 2 from the string "4px", converts the string to a number since there is no concatenation, but returns Nan since there is px in the string

console.log("4px" - 2); // Result = NaN, type Number

// 11.
" -9 " + 5; // adds the number 5 to the string " -9 ", converts the number to a string and concatenates it

console.log(" -9 " + 5); // Result = " -9 5", type String

//12.
" -9 " - 5; // subtracts 5 from the string " -9", converts the string to a number since there is no concatenation

console.log(" -9 " - 5); // Result = -14, type Number

// 13.
null + 1; // adds 1 to null, null converts to 0

console.log(null + 1); // Result = 1, type Number

// 14.
undefined + 1; // adds 1 to undefined, undefined converts to NaN or 0

console.log(undefined + 1); //Result = NaN, type Number

// 15.
undefined == null; // checks if undefined is equal to null, which they are 

console.log(undefined == null); // Result = true, type Boolean

// 16.
undefined === null; // checks if undefined is stricly equal to null, which they are not

console.log(undefined === null); // Result = false, type Boolean

// 17.
" \t \n" - 2; // subtracts 2 from the string " \t \n", converts the string to a number since there is no concatenation, but returns NaN since there is no numbers in the initial string

console.log(" \t \n" - 2); // Result = NaN, type Number


// Q2
let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four; // addition variable would = "34" because it concatenates the two strings together. 
let multiplication = three * four; // multiplication variable would = 12 because it converts the strings to numbers and multiplies them together. No concatenation occurs.
let division = three / four; // division variable would = 0.75 because it converts the strings to numbers and divides them together. No concatenation occurs.
let subtraction = three - four; // subtraction variable would = -1 because it converts the strings to numbers and subtracts them. No concatenation occurs.
let lessThan1 = three < four; // lessThan1 variable would = true because it checks if 3 is less than 4, which it is.
let lessThan2 = thirty < four; // lessThan2 variable would = false because it checks if 30 is less than 4, which it is not. To make this statement true, we could change the operator to > greater than.


// Q3
    if (0) console.log('#1 zero is true'); 
    if ("0") console.log('#2 zero is true'); // This prints true because a string is truthy, even if the value is 0
    if (null) console.log('null is true'); // 
    if (-1) console.log('negative is true'); // negative number is a truthy value, so this prints to true
    if (1) console.log('positive is true'); // positive number is a truthy value, so this prints to true

// Q4
let a = 5, b = 10;
let result = `${a} + ${b} is `;

// this is the ternary conditional statement
console.log(  result += (a + b > 10) ? 'greater than 10' : 'less than or equal to 10' ); // if a + b is the condition, and the first expression after the ? is the truthy return value, while the second is the false return value for the if condition
// prints '5 + 10 is greater than 10'

// this is the regular if conditional statement
if (a + b > 10 ) {
    result += 'greater than 10';
} else {
    result += 'less than or equal to 10';
}