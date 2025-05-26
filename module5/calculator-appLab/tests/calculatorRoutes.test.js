const request = require('supertest');
const express = require('express');
const calculatorRoutes = require('../routes/calculatorRoutes');

const app = express();
app.use('/calculator', calculatorRoutes);

describe('Calculator Routes', () => {
    //Test for addition
    test('GET /calculator/add?num1=5&num2=3 should return 8', async () => {
        const res = await request(app).get('/calculator/add?num1=5&num2=3');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(8); // 5 + 3 = 8
    });
    // Test for subtraction
    test('GET /calculator/subtract?num1=10&num2=4 should return 6', async () => {
        const res = await request(app).get('/calculator/subtract?num1=10&num2=4');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(6); // 10 - 4 = 6
    });
    // Test for multiplication
    test('GET /calculator/multiply?num1=7&num2=3 should return 21', async () => {
        const res = await request(app).get('/calculator/multiply?num1=7&num2=3');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(21); // 7 * 3 = 21
    });

    // Test for division
    test('GET /calculator/divide?num1=8&num2=2 should return 4', async () => {
        const res = await request(app).get('/calculator/divide?num1=8&num2=2');
        expect(res.statusCode).toBe(200); 
        expect(res.body.result).toBe(4); // 8 / 2 = 4
    });
});