// const express = require("express");
// const mongoose = require("mongoose");
// const {
//   updateUser,
//   deleteUser,
//   getUser,
//   getAllUsers,
//   getUserStats,
// } = require("../controllers/userController");
// const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");
// const isAuth = require("../middlewares/passport-setup");

// const Router = express.Router();

// Router.put("/:_id", isAuth(), updateUser);
// Router.delete("/delete/:_id", isAuth(), deleteUser);
// Router.get("/find/:id",verifyTokenAndAdmin,isAuth(), getUser);
// Router.get("/", verifyTokenAndAdmin, isAuth(),getAllUsers);
// Router.get("/stats", verifyTokenAndAdmin, getUserStats);

// module.exports = Router;
