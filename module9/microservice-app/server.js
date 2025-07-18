const express = require("express");
const app = express();
const bibleRoutes = require("./routes/bibleRoutes");

app.use(express.json());
app.use("/api/bible", bibleRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
