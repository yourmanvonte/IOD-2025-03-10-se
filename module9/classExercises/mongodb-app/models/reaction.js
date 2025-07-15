const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
    content: String,
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: {
        type: String,
        enum: ["like"],
        default: "like"
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Reaction", reactionSchema);