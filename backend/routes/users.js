import express from "express";

import { signin, signup } from "../controllers/user-controller.js";

const router = express.Router();

// It's post because we must send auth formData from frontend to backend
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
