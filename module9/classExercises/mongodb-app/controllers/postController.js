const Post = require("../models/post");

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getPosts = async (req, res) => {
  const posts = await Post.find().populate("userId", "first last");
  res.status(200).json(posts);
};

module.exports = {
  createPost,
  getPosts
};