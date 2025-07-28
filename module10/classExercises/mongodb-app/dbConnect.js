const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/Blogging";
    await mongoose.connect(mongoURI);

    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

console.log("MONGO_URI:", process.env.MONGO_URI);
module.exports = connectDB;
