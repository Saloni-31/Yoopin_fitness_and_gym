import mysql2 from 'mysql2'

let conn = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Riya@123',
    database: 'yoopin'
});

conn.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Connected!");
});

export default conn;