import conn from "../db_conn.js";

export const addProduct = (req, res) => {

    const {
        name,
        description,
        price,
        image,
        category_id,
        stock
    } = req.body;

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
                productId: result.insertId
            });
        }
    );
};

export const getProducts = (req,res)=>{
    const sql = "SELECT *  FROM products";

    conn.query(sql,(err,result)=>{
        if(err){
            console.log(err);

            return res.status(500).json({
                message: "Unable to fetch products"
            });
        }
        return res.status(200).json(result);
    });
};

