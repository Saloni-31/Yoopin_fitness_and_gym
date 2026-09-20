import express from "express";
import dotenv from "dotenv";
import cors from "cors";


import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    res.send("Yoopin Backend is running!");
});

app.listen(PORT, () => {
    console.log("Server running at port 8080");
});

app.use("/uploads", express.static("uploads"));

app.use(cors({
    origin: "http://localhost:5173"
}));