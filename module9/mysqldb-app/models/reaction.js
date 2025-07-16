const { DataTypes } = require("sequelize");
const sequelize = require("../dbConnet");

const Reaction = sequelize.define("Reaction", {
    type: {
        type: DataTypes.STRING,
        defaultValue: "like",
    },
});

module.exports = Reaction;