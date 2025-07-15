const Comment = require("../models/comment");

const createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getCommentsByPost = async (req, res) => {
    try {
    const comments = await Comment.find({ postId: req.params.postId }).populate("userId", "first last");
    res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createComment,
    getCommentsByPost
};