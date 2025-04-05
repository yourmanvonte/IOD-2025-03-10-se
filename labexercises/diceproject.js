document.getElementById("#dice1");
document.getElementById("#dice2");

// creates a function that rolls a dice with a specifc number of faces
function rollDice(faces) {
    const roll = Math.floor(Math.random() * faces) + 1; // generates a random number between 1 and the number of faces on the dice passed into it on html (6 or 10)
    document.getElementById("result").textContent = `You rolled a  ${roll}`; //displayes the result of the roll by using a template literal string
}
// function and result will be returned on the html page

// creates a function that refreshed the dice
function refreshDice() {
    document.getElementById("result").textContent = ""; // clears the result of the roll
}
// function will return a clear result on the html page