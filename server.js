require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const auth = require("./routes/authRoutes");
const user = require("./routes/userRoutes");
const product = require ("./routes/productRoutes");
const order = require ("./routes/orderRoutes");
const cart = require ("./routes/cartRoutes");
const cors = require('cors');





const app = express();

app.use(express.json(),);

connectDB();

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/products", product);
app.use("/api/orders", order);
app.use("/api/carts", cart);
app.use(cors({
  origin: '*'
}));



// Server connection
app.listen(process.env.PORT, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log(`💻 is connected on 🚪 ${process.env.PORT}`);
});
