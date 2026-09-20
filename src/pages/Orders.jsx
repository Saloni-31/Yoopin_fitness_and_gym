import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Orders.css";

const Orders = () => {
    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem("yoopin-token");

                if (!token) {
                    navigate("/login");
                    return;
                }

                const response = await fetch(
                    "http://localhost:8080/api/orders",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    console.error("Orders error:", data);
                    return;
                }

                setOrders(data);

            } catch (error) {
                console.error("Fetch orders error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [navigate]);

    if (loading) {
        return (
            <div className="orders-page">
                <div className="orders-container">
                    <p className="orders-loading">
                        Loading your orders...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="orders-page">
            <div className="orders-container">

                {/* Heading */}
                <div className="orders-heading">
                    <h1>My Orders</h1>
                    <p>
                        Track and manage your YOOPIN orders
                    </p>
                </div>

                {/* No Orders */}
                {orders.length === 0 ? (
                    <div className="no-orders">

                        <div className="no-orders-icon">
                            📦
                        </div>

                        <h2>No Orders Yet</h2>

                        <p>
                            You haven't placed any orders yet.
                        </p>

                        <button
                            onClick={() => navigate("/products")}
                            className="shop-orders-btn"
                        >
                            Start Shopping
                        </button>

                    </div>
                ) : (

                    /* Orders List */
                    <div className="orders-list">

                        {orders.map((order) => (

                            <div
                                className="order-card"
                                key={order.id}
                            >

                                {/* Top */}
                                <div className="order-top">

                                    <div>
                                        <p className="order-label">
                                            ORDER ID
                                        </p>

                                        <h3>
                                            #YOOPIN-{order.id}
                                        </h3>
                                    </div>

                                    <span
                                        className={`order-status ${order.status}`}
                                    >
                                        {order.status}
                                    </span>

                                </div>

                                {/* Details */}
                                <div className="order-details">

                                    <div>
                                        <span>
                                            Order Date
                                        </span>

                                        <strong>
                                            {new Date(
                                                order.created_at
                                            ).toLocaleDateString(
                                                "en-IN",
                                                {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                }
                                            )}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            Items
                                        </span>

                                        <strong>
                                            {order.item_count}
                                        </strong>
                                    </div>

                                    <div>
                                        <span>
                                            Total
                                        </span>

                                        <strong>
                                            ₹
                                            {Number(
                                                order.total_amount
                                            ).toLocaleString(
                                                "en-IN"
                                            )}
                                        </strong>
                                    </div>

                                </div>

                                {/* Bottom */}
                                <div className="order-bottom">

                                    <span>
                                        Thank you for shopping with
                                        YOOPIN 💙
                                    </span>

                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/orders/${order.id}`
                                            )
                                        }
                                    >
                                        View Details
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>
                )}

            </div>
        </div>
    );
};

export default Orders;