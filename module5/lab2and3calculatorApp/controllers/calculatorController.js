// new route for adding two numbers
exports.add = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum);
    res.status(200) // sets the value to 200 (Complete), this is used to give extra info to devs
    res.json({result:sum}) // instead of send, json to send data in json format instead of jsut strings
};

exports.subtract = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 - number2
    console.log(sum);
    res.status(200)
    res.json({result:sum})
};

exports.multiply = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 * number2
    console.log(sum);
    res.status(200);
    res.json({result:sum})
};

exports.divide = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    if (number2 === 0) {
        return res.status(400).json({ error: "Cannot divide by zero" });
    }
    let result = number1 / number2;
    console.log(result);
    res.status(200).json({ result });
};