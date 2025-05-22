const express = require("express");
const router = express.Router();
const friends = require('../public/js/friends.js');

// default endpoint, gets all friends
router.get('/', (req, res) => {
    res.json(friends)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get('/filter', (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter; // 1) filters friends by the first letter of their name
    let matchingFriends = [...friends];
    
    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterLetter));
    };

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    };
    
    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends)
    } else {
        res.status(404).json({error: "No friends matching gender "+filterGender})
    };
});

// 2. Get information about this request from the headers
router.get('/info', (req, res) => {
    const userAgent = req.headers['user-agent'];  
    const contentType = req.headers['content-type'];
    const accept = req.headers['accept'];

    // Modified to return a JSON object with the headers
    res.json({
        'user-agent': userAgent, 
        'content-type': contentType,
        'accept': accept
    }); 
});

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get('/:id', (req, res) => {
    const friendId = parseInt(req.params.id);
    const friend = friends.find(friend => friend.id === friendId);
    
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({error: 'Friend with ID ' + friendId + ' not found'});
    }

    res.json({result: 'Finding friend with ID ' + friendId})
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    friends.push(newFriend)
    res.status(200).json(newFriend)
})

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    const friendId = parseInt(req.params.id);
    const updatedFriend = req.body;
    const index = friends.findIndex(friend => friend.id === friendId);
    
    if (index !== -1) {
        friends[index] = {...friends[index], ...updatedFriend, id: friendId};
        res.status(200).json(friends[index]);
    } else {
        res.status(404).json({error: 'Friend with ID ' + friendId + ' not found'});
    }
});


// 5. Create a DELETE request to delete a frined from the list
router.delete('/:id', (req, res) => {
    const friendId = parseInt(req.params.id);
    const index = friends.findIndex(friend => friend.id === friendId);
    
    if (index !== -1) {
        friends.splice(index, 1)[0]; // remove the friend from the array
        res.status(200).json({message: 'Friend with ID ' + friendId + ' deleted'});
    } else {
        res.status(404).json({error: 'Friend with ID ' + friendId + ' not found'});
    }
});
module.exports = router;