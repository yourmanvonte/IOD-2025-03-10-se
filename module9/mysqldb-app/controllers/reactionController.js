const { Reaction } = require("../models");

const createReaction = async (req, res) => {
    try {
        const reaction = await Reaction.create(req.body);
        res.status(201).json(reaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getReactionByPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const reactions = await Reaction.findAll({ where: { postId } });
        res.json(reactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createReaction,
    getReactionByPost
};