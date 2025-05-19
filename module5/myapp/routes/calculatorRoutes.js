const express = require('express');
const router = express.Router();

// new route for adding two numbers
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum);
    res.status(200) // sets the value to 200 (Complete), this is used to give extra info to devs
    res.json({result:sum}) // instead of send, json to send data in json format instead of jsut strings
});

// new route for subtracting two numbers
router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 - number2
    console.log(sum);
    res.status(200)
    res.json({result:sum})
});

// new route for multiplying two numbers
router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 * number2
    console.log(sum);
    res.status(200);
    res.json({result:sum})
});

// new route for dividing two numbers
router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 / number2
    console.log(sum);
    res.status(200);
    res.json({result:sum})
});

module.exports = router;
// This code creates a new router object using the express.Router() method