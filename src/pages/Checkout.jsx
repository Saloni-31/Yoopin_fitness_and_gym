import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { CartContext } from "../Context/CartContext";
import { useContext, useState } from "react";
import "../styles/Checkout.css";

function Checkout() {
    const navigate = useNavigate();
    const location = useLocation();

    const { isLoggedIn, user } = useAuth();
    const { cart, setCart } = useContext(CartContext);

    const buyNowProduct = location.state?.product;
    const buyNowQuantity = location.state?.quantity || 1;

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        phone: "",
        address: "",
        city: "",
        pinCode: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /* ================================
       TOTAL
    ================================= */

    const total = buyNowProduct
        ? Number(buyNowProduct.price) * buyNowQuantity
        : cart.reduce(
              (sum, item) =>
                  sum + Number(item.price) * (item.quantity || 1),
              0
          );

    const handlePlaceOrder = async () => {

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.address ||
            !formData.city ||
            !formData.pinCode
        ) {
            alert("Please fill all delivery details.");
            return;
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        if (!/^\d{6}$/.test(formData.pinCode)) {
            alert("Please enter a valid 6-digit PIN code.");
            return;
        }

        try {
            const token = localStorage.getItem("yoopin-token");

            if (!token) {
                alert("Please login again.");
                navigate("/login");
                return;
            }

            const orderItems = buyNowProduct
                ? [
                      {
                          product_id: buyNowProduct.id,
                          quantity: buyNowQuantity,
                          price: Number(buyNowProduct.price),
                      },
                  ]
                : cart.map((item) => ({
                      product_id: item.id,
                      quantity: item.quantity || 1,
                      price: Number(item.price),
                  }));

            const response = await fetch(
                "http://localhost:8080/api/orders",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify({
                        items: orderItems,
                        total_amount: total,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Unable to place order.");
                return;
            }

            /* ================================
               CLEAR CART
            ================================= */

            if (!buyNowProduct) {
                setCart([]);
            }

            alert("Order placed successfully! 🎉");

            navigate("/orders");

        } catch (error) {
            console.error("Place Order Error:", error);

            alert(
                "Something went wrong while placing the order."
            );
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="checkout-page">

                <div className="checkout-login-box">

                    <h2>Login Required</h2>

                    <p>
                        Please login to continue with checkout.
                    </p>

                    <button
                        onClick={() => navigate("/login")}
                        className="checkout-btn"
                    >
                        Login to Continue
                    </button>

                </div>

            </div>
        );
    }

    if (!buyNowProduct && cart.length === 0) {
        return (
            <div className="checkout-page">

                <div className="checkout-login-box">

                    <h2>Your Cart is Empty</h2>

                    <p>
                        Add some products before proceeding to checkout.
                    </p>

                    <button
                        onClick={() => navigate("/products")}
                        className="checkout-btn"
                    >
                        Continue Shopping
                    </button>

                </div>

            </div>
        );
    }

    return (
        <div className="checkout-page">

            <div className="checkout-container">

                <h1>Checkout</h1>

                <div className="checkout-content">

                    <div className="checkout-form">

                        <h2>Delivery Information</h2>

                        <div className="checkout-field">

                            <label>Full Name</label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                            />

                        </div>

                        <div className="checkout-field">

                            <label>Email Address</label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />

                        </div>

                        <div className="checkout-field">

                            <label>Phone Number</label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                maxLength="10"
                            />

                        </div>

                        <div className="checkout-field">

                            <label>Address</label>

                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Enter your complete address"
                                rows="4"
                            ></textarea>

                        </div>

                        <div className="checkout-row">

                            <div className="checkout-field">

                                <label>City</label>

                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                />

                            </div>

                            <div className="checkout-field">

                                <label>PIN Code</label>

                                <input
                                    type="text"
                                    name="pinCode"
                                    value={formData.pinCode}
                                    onChange={handleChange}
                                    placeholder="PIN Code"
                                    maxLength="6"
                                />

                            </div>

                        </div>

                    </div>

                    {/* ================================
                        ORDER SUMMARY
                    ================================= */}

                    <div className="checkout-summary">

                        <h2>Order Summary</h2>

                        {buyNowProduct ? (

                            <div className="checkout-product">

                                <div>

                                    <h4>
                                        {buyNowProduct.name}
                                    </h4>

                                    <p>
                                        Qty: {buyNowQuantity}
                                    </p>

                                </div>

                                <span>
                                    ₹
                                    {(
                                        Number(
                                            buyNowProduct.price
                                        ) *
                                        buyNowQuantity
                                    ).toLocaleString("en-IN")}
                                </span>

                            </div>

                        ) : (

                            cart.map((item) => (

                                <div
                                    className="checkout-product"
                                    key={item.id}
                                >

                                    <div>

                                        <h4>
                                            {item.name}
                                        </h4>

                                        <p>
                                            Qty:{" "}
                                            {item.quantity || 1}
                                        </p>

                                    </div>

                                    <span>
                                        ₹
                                        {(
                                            Number(item.price) *
                                            (item.quantity || 1)
                                        ).toLocaleString("en-IN")}
                                    </span>

                                </div>

                            ))

                        )}

                        <div className="checkout-total">

                            <span>Total</span>

                            <strong>
                                ₹{total.toLocaleString("en-IN")}
                            </strong>

                        </div>

                        <button
                            className="place-order-btn"
                            onClick={handlePlaceOrder}
                        >
                            Place Order
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Checkout;
