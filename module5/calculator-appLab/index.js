const express = require('express'); // require the express package
const app = express(); // create an app usint the express package function
const port = 3000; // set the port to 3000

const testRoutes = require('./routes/myTestRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes'); // import the calculator routes

// This imports swagger, creates a swagger document, and create a route specfically for the swagger API docs
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // 

app.use('/',express.static('public')); // serve static files from the public directory
app.use('/calculator', calculatorRoutes); // use the calculator routes for any requests to /calculator
app.use('/test', testRoutes);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

// listen function activates the server and makes it listen for requests
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});