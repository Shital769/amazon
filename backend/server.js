import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import data from "./data.js";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected.");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Your Server is running at http://localhost:${port}`);
});
