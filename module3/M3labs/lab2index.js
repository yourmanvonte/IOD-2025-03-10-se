// Q1
function getUpperCase(newCity) { // declares a function called getUpperCase that passes in a parameter of newCity
    newCity = "las vegas"; // reassigns newCity variable with a string of las vegas
    return newCity.split(' ') .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
console.log(getUpperCase()); // Las Vegas
// split() method separates the string into an array of two words
// map() is used to iterate over each word in the array, charAt() is used to target the first index('l', 'v') in each array(the array being ["las", "vegas"]) created by the split() method, then uppercases the the array with toUperCase() method.

// .slice() method extracts everything excepts the first character indexes
// then both arrays are joined back together with .join()


// Q2
function truncate(str, max) { // truncate function takes in two parameters str, max
    if (str.length > max) { // if str exceeds the max length, then the output will be truncated
        return str.slice(0, max) + '...'; // .slice is used to extract the first max characters of the string and concatenate ellipsis(...)
    } 
    return str; // will return output if string does not exceed max length
}

console.log(truncate("Las Vegas is a great place to visit!", 20)); // Las Vegas is a great...
console.log(truncate("Las Vegas is fun", 20)); // Las Vegas is fun

function truncate(str, max) { 
    return str.length > max ? str.slice(0, max) + '...' : str; // ternary condition: if condition ? true return : false return;
}
console.log(truncate("Las Vegas is a great place to visit!", 20)); // Las Vegas is a great...
console.log(truncate("Las Vegas is fun", 20)); // Las Vegas is fun

// Q3
const animals = ['Tiger', 'Giraffe'];
animals.push('Lion', 'Elephant'); // push() adds lion and elephant at the end of the array
animals.unshift('Hyena', 'Meerkat'); // unshift() adds hyena and meerkat to the beginning of the array
console.log(animals.sort()); // [ 'Elephant', 'Giraffe', 'Hyena', 'Lion', 'Meerkat', 'Tiger' ]
// sort() in this instance with strings will sort the array alphabetically but can be used in a variety of cases

const replaceMiddleAnimal = (newValue) => { // used arrow syntax function for replaceMiddleAnimal function
    let index = 2; // targets index position 2 in the array "Hyena"
    animals.splice(index, 1, newValue); // target animal and use splice method to target index, 1 element to be replaced, then input newValue
    return animals;
}
console.log(replaceMiddleAnimal('Monkey')); // [ 'Elephant', 'Giraffe', 'Monkey', 'Lion', 'Meerkat', 'Tiger' ] 'Moneky' is now in the middle

function findMatchingAnimals(beginsWith) { // declares a findMatchingAnimals function with the beginsWith parameter passed in
    return animals.filter(animal => // call the filter() method on a callback function to loop through each animal in the array and return it
        animal.toLowerCase().startsWith(beginsWith.toLowerCase())        
    ); 
}
// converts animal to lowercase and uses the startWith() and toLowerCase() methods to compare for case-insensitivity.
console.log(findMatchingAnimals('L')); // Lion
console.log(findMatchingAnimals('lion')); // Lion
console.log(findMatchingAnimals('t')); // Tiger

// Q4
function camelCase(cssProp) { // define a camelCase function that takes in a cssProp parameter
    return cssProp.split('-').map((word, index) => 
        index = 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}
// splits the string at each dash so margin-Left becomes margin left then .map to iterate through the array with a callback function
// create a ternary condition with index = 0 as the condition, return word if true(keeps the first word as is), then false statement will capitalize the first letter of the rest
// finally we call the .join method to to bring the words(arrays) backs togethers

console.log(camelCase('marginLeft')); // MarginLeft
console.log(camelCase('background-color')); // BackgroundColor
console.log(camelCase('font-weight')); // FontWeight

// for...of loop (without conditional operator)
function camelCase(cssProp) {
    const words = cssProp.split('-');
    let result = '';
    let isFirstWord = true;
    for (const word of words) {
        if (isFirstWord) {
            result += word;
            isFirstWord = false;
        } else {
            result += word.charAt(0).toUpperCase() + word.slice(1);
        }
    }
    return result;
}
console.log(camelCase('background-color')); // backgroundColor

// Q5
let twentyCents = 0.20;
let tenCents = 0.10;

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(`${fixedTwenty} + ${fixedTen}`); // the original statement wouldn't work because the + is trying to concatenate instead of add

function currencyAddition(float1, float2) { // declares a currencyAddition function that takes in two parameters of float1 & float2
   let numbers = float1 + float2; // assign a new variable the values of float1 and float 2 then add them together
   return numbers; // will return one parseFloat number
}
console.log(currencyAddition(20.23, 15.37)); // 35.6

function currencyOperation (float1, float2, operation) {
    const num1 = parseFloat(float1.toFixed(2)); // floats are round to two decimal places
    const num2 = parseFloat(float2.toFixed(2));
    let result;
    switch (operation) { // switch allows your code to perform a variety of operations
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2; // ensures that if division is done without a 0, then it is acceptable
            } else {
                throw new Error("Division by zero is not allowed."); // ensures division by 0 will not be allowed to avoid errors
            }
            break;
        default:
            throw new Error("Invalid operation. Please use '+', '-', '*', or '/'")
    }
    return parseFloat(result.toFixed(2));
}
console.log(currencyOperation(0.20, 0.10, '+')); // 0.3
console.log(currencyOperation(1.50, 0.50, '-')); // 1
console.log(currencyOperation(0.25, 0.25, '*')); // 0.06
console.log(currencyOperation(1.00, 0.20, '/')); // 5

// Q6