import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import productRouter from "./routes/product.js";

// app
const app = express();

// Database
connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// Routes
app.use("/api", productRouter);

app.listen("5000", () => console.log("listening on port 5000"));
