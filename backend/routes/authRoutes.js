import { Router } from "express";
import { register, verify, status } from "../controllers/authController.js";

const router = Router();

router.post("/register", register);
router.get("/verify-email", verify);
router.get("/status", status);

export default router;
