const express = require("express");
const router = express.Router();
const reactionController = require("../controllers/reactionController");

router.post("/", reactionController.createReaction);
router.get("/", reactionController.getReactionByPost);

module.exports = router;