import express from "express";
import {
  fetchProducts,
  submitProduct,
  fetchProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/products", fetchProducts);
router.post("/product", submitProduct);
router.get("/product/:name", fetchProduct);

export default router;
