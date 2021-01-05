import express from "express";
import { fetchProducts, submitProduct } from "../controllers/product.js";

const router = express.Router();

router.get("/products", fetchProducts);
router.post("/product", submitProduct);

export default router;
