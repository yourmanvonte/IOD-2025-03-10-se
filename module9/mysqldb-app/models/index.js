const sequelize = require("../dbConnet");
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
const Reaction = require("./reaction");

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.hasMany(Reaction);
Reaction.belongsTo(User);

Post.hasMany(Reaction);
Reaction.belongsTo(Post);

Comment.hasMany(Reaction);
Reaction.belongsTo(Comment);

module.exports = {
  sequelize,
  User,
  Post,
  Comment,
  Reaction,
};