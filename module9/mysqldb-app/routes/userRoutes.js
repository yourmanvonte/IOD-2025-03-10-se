const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post('/', userController.createUser);
router.get('/:postId', userController.getAllUsers);

module.exports = router;