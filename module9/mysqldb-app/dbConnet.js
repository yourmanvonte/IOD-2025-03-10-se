const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_host,
        dialect: "mysql",
        prort: process.env,DB_PORT,
        logging: false,
    }
);

module.exports = sequelize;