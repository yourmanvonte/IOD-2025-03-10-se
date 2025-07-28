require("dotenv").config();
const express = require("express");
const connectDB = require("./dbConnect");

const app = express();
connectDB();
app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/reactions", require("./routes/reactionRoutes"));

app.get("/", (req, res) => res.send("Blog backend is running"));

app.listen(process.env.PORT || 8080, '0.0.0.0', () => {
  console.log(`Server running on port ${process.env.PORT || 8080}`);
});
