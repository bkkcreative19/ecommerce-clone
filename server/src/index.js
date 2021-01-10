import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
dotenv.config();

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
app.use("/api/users", userRouter);

// Error Handler

app.use(notFound);
app.use(errorHandler);

app.listen("5000", () => console.log("listening on port 5000"));
