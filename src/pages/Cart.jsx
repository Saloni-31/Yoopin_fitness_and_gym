import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    const increaseQuantity = (index) => {
        const updatedCart = [...cart];

        updatedCart[index] = {
            ...updatedCart[index],
            quantity: (updatedCart[index].quantity || 1) + 1,
        };

        setCart(updatedCart);
    };

    const decreaseQuantity = (index) => {
        const updatedCart = [...cart];
        const currentQuantity = updatedCart[index].quantity || 1;

        if (currentQuantity > 1) {
            updatedCart[index] = {
                ...updatedCart[index],
                quantity: currentQuantity - 1,
            };

            setCart(updatedCart);
        }
    };

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    };

    const totalPrice = cart.reduce((total, product) => {
        return total + Number(product.price) * (product.quantity || 1);
    }, 0);

    return (
        <div className="cart-page">
            <div className="cart-container">

                <div className="cart-heading">
                    <h2>My Cart</h2>
                    <p>
                        {cart.length > 0
                            ? `${cart.length} item${cart.length > 1 ? "s" : ""} in your cart`
                            : "Your fitness essentials are waiting for you"}
                    </p>
                </div>

                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛒</div>

                        <h2>Your Cart is Empty</h2>

                        <p>
                            Looks like you haven't added anything to your cart yet.
                        </p>

                        <button
                            className="shop-now-btn"
                            onClick={() => navigate("/products")}
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="cart-layout">

                        {/* CART ITEMS */}
                        <div className="cart-items">

                            {cart.map((product, index) => (
                                <div
                                    key={index}
                                    className="cart-item"
                                >

                                    {/* Product Image */}
                                    <div className="cart-product-image">
                                        {product.image ? (
                                            <img
                                                src={`http://localhost:8080/uploads/${product.image}`}
                                                alt={product.name}
                                            />
                                        ) : (
                                            <span>No Image</span>
                                        )}
                                    </div>

                                    {/* Product Information */}
                                    <div className="cart-product-info">

                                        <h3>{product.name}</h3>

                                        <p className="cart-description">
                                            {product.description}
                                        </p>

                                        <p className="cart-price">
                                            ₹{Number(product.price).toLocaleString("en-IN")}
                                        </p>

                                        {/* Quantity */}
                                        <div className="quantity-control">

                                            <button
                                                onClick={() => decreaseQuantity(index)}
                                            >
                                                −
                                            </button>

                                            <span>
                                                {product.quantity || 1}
                                            </span>

                                            <button
                                                onClick={() => increaseQuantity(index)}
                                            >
                                                +
                                            </button>

                                        </div>

                                        {/* Remove */}
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeItem(index)}
                                        >
                                            Remove
                                        </button>

                                    </div>

                                    {/* Item Total */}
                                    <div className="cart-item-total">
                                        ₹
                                        {(
                                            Number(product.price) *
                                            (product.quantity || 1)
                                        ).toLocaleString("en-IN")}
                                    </div>

                                </div>
                            ))}

                        </div>

                        {/* ORDER SUMMARY */}
                        <div className="cart-summary">

                            <h3>Order Summary</h3>

                            <div className="summary-row">
                                <span>Subtotal</span>
                                <strong>
                                    ₹{totalPrice.toLocaleString("en-IN")}
                                </strong>
                            </div>

                            <div className="summary-row">
                                <span>Shipping</span>
                                <strong className="free">
                                    FREE
                                </strong>
                            </div>

                            <div className="summary-divider"></div>

                            <div className="summary-total">
                                <span>Total</span>

                                <strong>
                                    ₹{totalPrice.toLocaleString("en-IN")}
                                </strong>
                            </div>

                            <button
                                className="checkout-btn"
                                onClick={() => navigate("/checkout")}
                            >
                                Proceed to Checkout
                            </button>

                            <button
                                className="continue-btn"
                                onClick={() => navigate("/products")}
                            >
                                ← Continue Shopping
                            </button>

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
