function add(a, b) {
    return a + b;
}

console.log(add(5, 1)); 

function subtract(a, b) {
    return a - b;
}

console.log(subtract(10, 8));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 6));

function division(a, b) {
    return a / b;
}

console.log(division(22, 4));

function negative(a, b) {
    return a - b;
}

console.log(negative(-50, -25));

function printHello(name) {
    console.log("Hello " + name);
}

printHello("Sharkeisha");

    function calculateTriangleArea(base, height) {
        return 0.5 * base * height;
    }

const base = 5;
const height = 10;
const area = calculateTriangleArea(base, height);
console.log("The area of the triangle is: " + area);
