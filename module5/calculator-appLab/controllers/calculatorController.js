const calculator = require('../models/calculator');
const { generateId } = require('../models/idGenerator');
const logger = require('../models/logger');


// new route for adding two numbers
exports.add = (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculator.add(parseFloat(num1), parseFloat(num2));
    const id = generateId();
    logger(`Add request - ID: ${id}, Result: ${result}`);
    res.json({ id, result });
};

exports.subtract = (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculator.subtract(parseFloat(num1), parseFloat(num2));
    const id = generateId();
    logger(`Subtract request - ID: ${id}, Result: ${result}`);
    res.json({ id, result });
};

exports.multiply = (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculator.multiply(parseFloat(num1), parseFloat(num2));
    const id = generateId();
    logger(`Multiply request - ID: ${id}, Result: ${result}`);
    res.json({ id, result });
};

exports.divide = (req, res) => {
    const { num1, num2 } = req.query;
    try {
        const result = calculator.divide(parseFloat(num1), parseFloat(num2));
        const id = generateId();
        logger(`Divide request - ID: ${id}, Result: ${result}`);
        res.json({ id, result });
    } catch (error) {
        logger(`Divide request error - ID: ${generateId()}, Error: ${error.message}`);
        res.status(400).json({ error: error.message });
    }
};