require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const auth = require("./routes/authRoutes");
const user = require("./routes/userRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", auth);
app.use("/api/user", user);

// Server connection
app.listen(process.env.PORT, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log(`💻 is connected on 🚪 ${process.env.PORT}`);
});
