import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/user",authMiddleware,(req,res) => {
        res.json({
            message: "You are logged in",
            user: req.user
        });
    }
);

router.get("/admin",authMiddleware,adminMiddleware,(req,res)=>{
    res.json({
        message: "Welcome Admin",
        user:req.user
    });
    }
);

export default router;