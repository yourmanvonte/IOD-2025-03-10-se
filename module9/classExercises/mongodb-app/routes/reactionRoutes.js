const router = require("express").Router();
const { createReaction, getReactionsByPost, likePost, getLikesForPost } = require("../controllers/reactionController");

router.post("/", createReaction);
router.post("/like", likePost);
router.get("/:postId", getReactionsByPost);
router.get("/likes/:postId", getLikesForPost);

module.exports = router;
