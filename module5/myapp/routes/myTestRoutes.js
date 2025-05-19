const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Test route root from myTestRoutes.js');
});

module.exports = router;
// This code creates a new router object using the express.Router() method.