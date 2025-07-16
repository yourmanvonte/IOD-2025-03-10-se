const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnet");

const Comment = sequelize.define("Comment", {
    content: DataTypes.TEXT,
    parentId: DataTypes.INTEGER
});

module.exports = Comment;