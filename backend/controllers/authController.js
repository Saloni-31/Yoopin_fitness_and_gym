import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import conn from "../db_conn.js";

const SECRET_KEY = process.env.JWT_SECRET;

export const signup = (req,res)=>{
    const {name, email, password}=req.body;

    if(!name|| !email||!password){
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const checkSql = "SELECT * FROM users WHERE email = ?";

    conn.query(checkSql,[email], async (err,result) =>{
        if (err){
            console.log(err);
            return res.status(500).json({
                message: "Database error"
            });
        }

        if (result.length>0){
            return res.status(409).json({
                message: "Email already registered"
            });
        }

        const hasedPassword= await bcrypt.hash(password, 10);

        const insertSql="INSERT INTO users (name, email, password) VALUES(?,?,?)";

        conn.query(
            insertSql,
            [name, email, hasedPassword],
            (err, result)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        message: "signup failed"
                    });
                }

                res.status(201).json({
                    message:"Signup successful",
                    userId: result.insertId
                });
            }
        );
    });
};

export const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and Password required"
        });
    }

    const sql = "SELECT * FROM users WHERE email = ?";

    conn.query(sql, [email], async (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({
                message: "Database error"
            });
        }

        if (result.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = result[0];

        // Check password
        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Generate JWT token
        console.log("LOGIN USER:", user.name);
console.log("JWT SECRET EXISTS:", !!SECRET_KEY);
console.log("TOKEN EXPIRY: 1h");
        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            SECRET_KEY,
            {
                expiresIn: "1h"
            }
        );

        // Send response
        res.json({
            message: "Login successful",
            token: token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    });
};