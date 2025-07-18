const { Comment } = require("../models");

const createComment = async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        res.status(201).json(newComment); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCommentsByPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await Comment.findAll({ where: { postId }});
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createComment,
    getCommentsByPost
}