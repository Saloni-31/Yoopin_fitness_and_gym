import express from "express";
import dotenv from'dotenv';
dotenv.config();
const app = express();
import cors from "cors";
import db from './db_conn.js';
import conn from "./db_conn.js";
import authRoutes from "./routes/authRoutes.js"
import testRoutes from "./routes/testRoutes.js";

const PORT = 8080;
app.use(express.json());

app.use(cors({'origin':'http:localhost:5173'}));
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

app.post("/addcategories",(req,res)=>{
    const {name,description}=req.body;   
    conn.query("insert into categories(name,description) values(?,?)",[name,description],function(err,result){
        if (err){
            console.log(err);
            return res.json({error:"unable to add categories, try again", msg:err.message})
        }
        else if(result.insertId>0)
            return res.json({"msg":"category added"});
    });
});

app.post("/addproducts",(req,res)=>{
    const {name,description,price,image,category_id,stock}=req.body;
    conn.query("insert into products(name,description,price,image,category_id,stock) values(?,?,?,?,?,?)",[name,description,price,image,category_id,stock],function(err,result){
        if (err){
            console.log(err);
           return res.json({error:"unable to add products, try again",msg:err.message});
        }
           else if(result.insertId>0)
           return res.json({"msg":"product added"});
    });
    });

app.get("/addcategories", (req, res) => {
    db.query("SELECT * FROM categories", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Database error");
        } else {
            res.json(result);
        }
    });
});


app.get("/", (req, res) => {
    res.send("Yoopin Backend is running!");
});

app.get("/addproducts", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Database error");
        } else {
            res.json(result);
        }
    });
});

app.listen(PORT, () => console.log("server running at port no 8080"));