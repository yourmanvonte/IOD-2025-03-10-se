const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnet");

const User = sequelize.define("User", {
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
});

module.exports = User;