import conn from "../db_conn.js";

export const addCategory = (req, res) => {
    const { name, description } = req.body;

    if (!name) {
        return res.status(400).json({
            message: "Category name is required"
        });
    }

    const sql = "INSERT INTO categories (name, description) VALUES (?, ?)";

    conn.query(sql, [name, description], (err, result) => {
        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "unable to add category",
                error: err.message
            });
        }

        return res.status(201).json({
            message: "category added successfully",
            category_id: result.insertId
        });
    });
};

export const getCategories = (req, res) => {

    const sql = "SELECT * FROM categories";

    conn.query(sql, (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Unable to fetch categories"
            });
        }

        return res.status(200).json(result);
    });
};