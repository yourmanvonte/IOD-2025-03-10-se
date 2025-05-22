const express = require('express');
const router = express.Router();

const users = [
    { id: 1, name: 'Anthony Albanese', country: 'Au'},
    { id: 2, name: 'Joe Biden', country: 'US'},
    { id: 3, name: 'Chris Hipkins', country: 'NZ'},
    { id: 4, name: 'Lee Hsien Loong', country: 'SG'},
];

// a POST request with data sent in the body of the request, representing a new user
router.post('/', (req, res) => {
    let newUser = req.body;
    console.log(newUser)

    if (!newUser.name || !newUser.country) {
        res.status(500).json({error: 'User must contain a name and location'});
        return;
    } 
    else if (!newUser.id) { // if no ID, generate one
        newUser.id = users.length + 1;
    }

    users.push(newUser);
    res.status(200).json({newUser});
});


router.get('/headers', (req, res) => {
    console.log(req.headers);
    res.json(req.headers);
});

// Dynamic request parameter endpoint - get the user matching the specific ID ie. /user/3
router.get('/:id', (req, res) => {
    console.log(req.params)

    let userId = req.params.id; // 'id' will be a value matching anything after the / in the request path
    let user = users.find(user => user.id == userId); // find the user with the matching id

    user ? res.status(200).json({result: user}) 
        : res.status(404).json({results: `User ${userId} not found`});
});

router.get('/', (req, res) => {
  res.json({ message: 'Users route is working' });
});

module.exports = router;