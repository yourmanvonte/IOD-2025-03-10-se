// Q1
function makeCounter(startFrom, incrementBy) {
    let currentCount = 0; // initial value
        currentCount = startFrom; // sets initial value to startFrom

    return function() {
        currentCount+= incrementBy; // increments current count by the second argument in call function
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter(4, 2); // counters starts from 4 and increments by 1
counter1(); // 1
counter1(); // 2

// creates a second counter
function makeCounter2(startFrom, incrementBy) {
    let currentCount = 0;
        currentCount = startFrom;

    return function() { 
        currentCount+= incrementBy; // increments current count by the second argument in call function
        console.log(currentCount)
        return currentCount;
    };
}

let counter2 = makeCounter2(7, 3); // counter starts from 7 and increments by 1
counter2();
counter2();
// output does remain independent from counter1

// Q2
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}

const timeoutID = setTimeout(delayMsg, 12000, '#5: Delayed by 12000ms'); // this prints last since delay is 12000ms

setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); // this prints fourth since delay is 100ms
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); // this prints third since delay is 20ms
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); // this prints second since delay is 0ms
delayMsg('#4: Not delayed at all'); // this prints first immediately since it is not delayed

clearTimeout(timeoutID); // this prevents the last message from being printed

// Q3
const debounce = (func, ms) => {
    let timeoutID; // variable stores the timeout ID

    return function(...args) {
        clearTimeout(timeoutID); // clears any active timer

        timeoutID = setTimeout(() => { // sets a new timer that calls the function after the timeout
            func.apply(this, args); // calls the function after the timeout
        }, ms); // sets the timeout to the value passed in the second argument
    };
}; // this function will be called with the arguments passed to it, this one being 2000ms

function printMe(msg) {
    console.log('printing debounced message' + msg); // this function prints the message passed into it
};

printMe = debounce(printMe, 2000); // debounces the function with a 2000ms delay
   
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout(() => printMe(' #1: First message'), 100);
setTimeout(() => printMe(' #2: Second message'), 200);
setTimeout(() => printMe(' #3: Third message'), 300); // printing debounced message #3: Third message, will print


// Q4
const printFibonacci = () => {
    let a = 0;
    let b = 1; // initial values of the Fibonacci sequence

    setInterval(() => {
        console.log(a);
        [a, b] = [b, a + b];  // calculates the next Fibonacci number
    }, 1000); // sets interval to 1000ms
}

printFibonacci(); // this will print the Fibonacci sequence every second

const printFibonacciTimeouts = (limit) => {
    let a = 0;
    let b = 1;
    let count = 0; // counter keeps track of the number of Fibonacci numbers printed

    const printNext = () => {
        if (count >= limit) {
            return; // stops printing if the limit is reached
        }

        console.log(a);
        [a, b] = [b, a + b];
        count++;

        setTimeout(printNext, 700); // sets timeout to 700ms
    };

    printNext(); 
}
printFibonacciTimeouts(5);

// Q5
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
 };

let clonedCar = Object.assign({}, car, { 
    year: 2020,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
});

let anotherCloneCar = Object.assign({}, car, {
    model: '718 Cayman',
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
});
// this clone does Not override the from the bound car object

// using bind so that it can be called without a wrapper function
let boundCarDescription = car.description.bind(car);
setTimeout(boundCarDescription, 200); // works because the context of 'this' is bound to the car object

let boundClonedDescription = clonedCar.description.bind(clonedCar); 
setTimeout(boundClonedDescription, 400);

clonedCar.description(); // overrides to: This car is a Porsche 911 from 2020
car.description(); // works

setTimeout(() => car.description(), 200); 
// works because the arrow function keeps the context of 'this' from the function
//failed initially because the context of 'this' is lost in the setTimeout function
// the delayed uses the orginal car object, because the context of 'this' is lost in the setTimeout function


// Q6
Function.prototype.delay = function(ms) {
    const func = this; // stores the function in a variable
    return function(...args) {
        setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
};

function multiply(a, b, c, d) {
    console.log( a * b * c * d);
}

multiply.delay(500)(5, 5, 5, 5); // prints 25 after 500 milliseconds
// prints out 625 after 500 milliseconds

// Q7
class DigitalClock {
    constructor(prefix) {
        this.prefix = prefix;
    }

    display() {
    const date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        if (secs < 10) secs = '0' + secs;

        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.display();
        this.timer = setInterval(() => this.display(), 1000);
    }
}

class PrecisionClock extends DigitalClock { // extends the DigitalClock class
    constructor(prefix, precision = 1000) {
        super(prefix);
        this.precision = precision;
    } // this constructor calls the parent class constructor
}

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeUpTime = '07:00') {
        super(prefix);
        this.wakeUpTime = wakeUpTime;
    }

    display() {
        const date = new Date();
        let [hours, mins] = [date.getHours(), date.getMinutes()];

        if ( hours < 10) {
            hours = '0' + hours;
        }
        if ( mins < 10) {
            mins = '0' + mins;
        }
        const currentTime = `${hours}:${mins}`;
        console.log(`${this.prefix} ${currentTime}`);

        if (currentTime === this.wakeUpTime) {
            console.log('Alarm ringing! Time to wake up!');
        }
    }
}

const alarmClock = new AlarmClock("Alarm", "07:00");
alarmClock.start(); // starts the alarm clock

const myClock = new DigitalClock('my clock:');
myClock.start();

setTimeout(() => myClock.stop(), 5000); // stops the clock after 5 seconds

const preciseClock = new PrecisionClock('Precision Clock:', 500); // creates a new instance of the PrecisionClock class
preciseClock.start();

setTimeout(() => preciseClock.stop(), 5000); // stops the clock after 5 seconds

// Q8
const validateStringArg = (fn) =>{ // extends the decorator function to validate all arguments passed to fn as strings
    return function(...args) { 
            if (!args.every(arg => typeof arg  === 'string')) {
            throw new Error('Argument must be a string!');
            }
        return fn(arg);
    }; // this function returns a new function that takes the argument and checks if it is a string
}; // this function takes a function as an argument and return a new function

function orderItems(...itemNames) { // this function takes a variable number of arguments
    return `Order placed for: ${itemNames.join(", ")}`;
}
    // create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

try {
    console.log(validatedOrderItem("Apple Watch")); //  runs the function since its a string
    console.log(validatedOrderItem(123)); // should throw an error since its not a string
} catch (error) {
    console.error(error.message); // prints out the error message
};


// Q9
function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20000) + 1000; // generates a random delay between 1000ms and 2000ms
        console.log(`Random delay: ${delay}ms`);

        setTimeout(() => {
            if ((delay / 1000) % 2 === 0) {
                resolve({ message: 'Successful delay!', delay});
            } else {
                reject({ message :'Failed delay! The random delay was odd!', delay}); // rejects the promise if the delay is odd
            }
        }, delay);
    });
};

randomDelay().then(( message) => console.log(message)).catch((error) => console.error(error));
// this function returns a promise that resolves after a random delay 


// Q10
import fetch from 'node-fetch'; // 

globalThis.fetch = fetch;

async function fetchURLData(url) { // this function fetches data from the given URL
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`); // throws an error is the response is not ok
        }
        return await response.json(); // 
    } catch (error) {
        throw new Error(`Error fetching data from ${url}: ${error.message}`); // throws an error is the request fails
    }
} 
// this function fetches data from the given URL and returns it as a JSON object
// an error is thrown if the request fails or if the response is not ok


fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error.message));

fetchURLData('https://invalid-url.example.com')
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error.message));