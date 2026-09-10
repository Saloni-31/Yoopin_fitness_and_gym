import express from "express";
import multer from "multer";

import {
    addProduct,
    getProducts
} from "../controllers/productController.js";

const router = express.Router();

// Image storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post("/addproducts", upload.single("image"), addProduct);

router.get("/", getProducts);

export default router;