const Reaction = require("../models/reaction");

const createReaction = async (req, res) => {
    try {
        const reaction = await Reaction.create(req.body);
        res.status(201).json(reaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getReactionsByPost = async (req, res) => {
    const reactions = await Reaction.find({ postId: req.params.postId });
    res.status(200).json(reactions);
};

const likePost = async (req, res) => {
    try {
        const { userId, postId } = req.body;
        const reaction = await Reaction.create({ userId, postId, type: "like" });
        res.status(201).json(reaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getLikesForPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const likes = await Reaction.find({ postId, type: "like" }).populate("userId", "first last");
        res.status(201).json({ count: likes.length, users: likes });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createReaction,
    getReactionsByPost,
    likePost,
    getLikesForPost
}