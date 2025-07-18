const { Post } = require("../models");

const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createPost = async (req, res) => {
    try {
        const { userId, postTitle, description } = req.body;
        const newPost = await Post.create({ userId, postTitle, description });
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    getAllPosts,
    createPost
};