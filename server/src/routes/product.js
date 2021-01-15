import express from "express";
import {
  fetchProducts,
  submitProduct,
  fetchProduct,
  fetchProductsByCategory,
} from "../controllers/product.js";

const router = express.Router();

router.get("/products", fetchProducts);
router.get("/products/:category", fetchProductsByCategory);
router.post("/product", submitProduct);
router.get("/product/:name", fetchProduct);

export default router;
