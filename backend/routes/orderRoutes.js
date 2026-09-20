import express from "express";
import {
    createOrder,
    getMyOrders
} from "../controllers/ordercontroller.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Place a new order
router.post("/", authMiddleware, createOrder);

// Get logged-in user's orders
router.get("/", authMiddleware, getMyOrders);

export default router;