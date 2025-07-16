const express = require("express");
require("dotenv").config();
const { sequelize } = require("./models");

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Blog API is running."));

app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 8080;
sequelize.sync({ alter: true }).then(() => {
  console.log("MySQL Connected & Synced");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});