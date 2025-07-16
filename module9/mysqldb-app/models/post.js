const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnet");

const Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    published: DataTypes.DATE,
    share: DataTypes.STRING,
});

module.exports = Post;