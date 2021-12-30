const express = require("express");
const mongoose = require("mongoose");
const {
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct,
  getAllProduct,
} = require("../controllers/ProductController");

const { verifyTokenAndAdmin } = require("../middlewares/verifyToken");

const Router = express.Router();

Router.post("/", verifyTokenAndAdmin, createProduct);
Router.put("/:id", verifyTokenAndAdmin, updateProduct);
Router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
Router.get("/find/:id", getProduct);
Router.get("/", getAllProduct);

module.exports = Router;
