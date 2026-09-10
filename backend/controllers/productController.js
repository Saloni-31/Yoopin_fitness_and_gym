import conn from "../db_conn.js";

export const addProduct = (req, res) => {

    const {
        name,
        description,
        price,
        category_id,
        stock
    } = req.body;

    const image = req.file ? req.file.filename : null;

    conn.query(
        "INSERT INTO products(name,description,price,image,category_id,stock) VALUES(?,?,?,?,?,?)",
        [name, description, price, image, category_id, stock],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    error: "Unable to add product",
                    msg: err.message
                });
            }

            return res.status(201).json({
                msg: "Product added",
                productId: result.insertId,
                image: image
            });
        }
    );
};

export const getProducts = (req, res) => {
    const sql = `
        SELECT 
            products.*,
            categories.name AS category_name
        FROM products
        LEFT JOIN categories
        ON products.category_id = categories.id
        ORDER BY products.id DESC
    `;

    conn.query(sql, (err, result) => {
        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Unable to fetch products"
            });
        }

        return res.status(200).json(result);
    });
};