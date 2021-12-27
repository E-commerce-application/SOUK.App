require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");


const app = express();

app.use(express.json());

connectDB();



// Server connection
app.listen(process.env.PORT, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log(`💻 is connected on 🚪 ${process.env.PORT}`);
});