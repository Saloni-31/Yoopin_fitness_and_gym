import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

let conn = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

conn.connect(function (err) {

    if (err) {
        throw err;
    }

    console.log("Connected!");
});

export default conn;