import conn from "../db_conn.js";

// Create Order
export const createOrder = (req, res) => {
    const { items, total_amount } = req.body;
    const user_id = req.user.id;

    // Check items
    if (!items || items.length === 0) {
        return res.status(400).json({
            message: "Order must contain at least one product."
        });
    }

    // Check total
    if (!total_amount) {
        return res.status(400).json({
            message: "Total amount is required."
        });
    }

    const orderSql = `
        INSERT INTO orders (user_id, total_amount, status)
        VALUES (?, ?, 'pending')
    `;

    conn.query(
        orderSql,
        [user_id, total_amount],
        (err, orderResult) => {

            if (err) {
                console.log("Create order error:", err);

                return res.status(500).json({
                    message: "Unable to create order",
                    error: err.message
                });
            }

            const orderId = orderResult.insertId;

            // Prepare order items
            const orderItems = items.map((item) => [
                orderId,
                item.product_id,
                item.quantity,
                item.price
            ]);

            const itemSql = `
                INSERT INTO order_items
                (order_id, product_id, quantity, price)
                VALUES ?
            `;

            conn.query(
                itemSql,
                [orderItems],
                (itemErr) => {

                    if (itemErr) {
                        console.log(
                            "Create order items error:",
                            itemErr
                        );

                        return res.status(500).json({
                            message:
                                "Order created but items could not be saved.",
                            error: itemErr.message
                        });
                    }

                    return res.status(201).json({
                        message: "Order placed successfully.",
                        orderId: orderId
                    });
                }
            );
        }
    );
};


// Get My Orders
export const getMyOrders = (req, res) => {
    const user_id = req.user.id;

    const sql = `
        SELECT
            orders.id,
            orders.total_amount,
            orders.status,
            orders.created_at,
            COUNT(order_items.id) AS item_count
        FROM orders
        LEFT JOIN order_items
            ON orders.id = order_items.order_id
        WHERE orders.user_id = ?
        GROUP BY
            orders.id,
            orders.total_amount,
            orders.status,
            orders.created_at
        ORDER BY orders.created_at DESC
    `;

    conn.query(
        sql,
        [user_id],
        (err, result) => {

            if (err) {
                console.log("Get orders error:", err);

                return res.status(500).json({
                    message: "Unable to fetch orders",
                    error: err.message
                });
            }

            return res.status(200).json(result);
        }
    );
};