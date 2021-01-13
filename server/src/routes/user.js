import express from "express";
import { auth } from "../middlewares/authMiddleware.js";
const router = express.Router();
import { signup, signin, getProfile, isValid } from "../controllers/user.js";
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile", auth, getProfile);
router.post("/tokenIsValid", isValid);
export default router;
