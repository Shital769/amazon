import express from "express";
import data from "../data.js";
import Product from "../models/productModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  try {
    await Product.deleteMany({}); // Remove all documents in the collection
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  } catch (error) {
    res.status(500).json({ message: "Error seeding data." });
  }
});

export default seedRouter;
