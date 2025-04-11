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
const animals = ['Tiger', 'Giraffe']
console.log(animals)