// import all user routes
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// map the user routes to our app
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/headers", (req, res) => {
  res.send(req.headers);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
