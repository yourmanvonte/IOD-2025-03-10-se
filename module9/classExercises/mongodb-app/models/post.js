const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postTitle: String,
  description: String,
  image: String,
  published: Date,
  share: String,
  time: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
