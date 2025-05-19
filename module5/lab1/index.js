const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('First backend app!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page!');
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page!');
});

app.listen(port, () => {
    console.log(`First example app listening at http://localhost:${port}`);
});

// Second server
const app2 = express();
const port2 = 3000;

app2.get('/', (req, res) => {
    res.send('Second backend app!');
});

app2.get('/products', (req, res) => {
    res.send('This is the products page!');
});

app2.get('/service', (req, res) => {
    res.send('This is the services page!');
});

app2.listen(port2, () => {
    console.log(`Second example app listening at http://localhost:${port2}`);
});