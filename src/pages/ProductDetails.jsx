import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import "../styles/ProductDetail.css";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/products")
            .then((res) => {
                const foundProduct = res.data.find(
                    (item) => item.id === Number(id)
                );

                setProduct(foundProduct);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    if (!product) {
        return (
            <div className="product-loading">
                <h2>Product not found</h2>
            </div>
        );
    }

    const increaseQuantity = () => {
        if (quantity < (product.stock ?? 0)) {
            setQuantity(quantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
    };

    const handleBuyNow = () => {
    navigate("/checkout", {
        state: {
            product: product,
            quantity: quantity
        }
    });
};

    return (
        <div className="product-details-page">

            <div className="product-details-container">

                {/* LEFT - PRODUCT IMAGE */}
                <div className="product-image-section">

                    <span className="product-badge">
                        YOOPIN
                    </span>

                    {product.image ? (
                        <img
                            src={`http://localhost:8080/uploads/${product.image}`}
                            alt={product.name}
                            className="product-detail-image"
                        />
                    ) : (
                        <div className="no-image">
                            No Image Available
                        </div>
                    )}

                </div>

                {/* RIGHT - PRODUCT INFORMATION */}
                <div className="product-info-section">

                    <span className="product-category">
                        {product.category_name || "Fitness"}
                    </span>

                    <h1>{product.name}</h1>

                    <div className="product-price">
                        ₹{product.price}
                    </div>

                    <div className="product-stock">
                        {product.stock > 0 ? (
                            <>
                                <span className="stock-dot"></span>
                                In Stock
                                <span className="stock-count">
                                    ({product.stock} available)
                                </span>
                            </>
                        ) : (
                            <span className="out-of-stock">
                                ✕ Out of Stock
                            </span>
                        )}
                    </div>

                    <div className="product-divider"></div>

                    {/* DESCRIPTION */}
                    <p className="product-short-description">
                        {product.description}
                    </p>

                    {/* QUANTITY */}
                    {product.stock > 0 && (
                        <div className="quantity-section">

                            <span>Quantity</span>

                            <div className="quantity-control">

                                <button onClick={decreaseQuantity}>
                                    −
                                </button>

                                <span>{quantity}</span>

                                <button onClick={increaseQuantity}>
                                    +
                                </button>

                            </div>

                        </div>
                    )}

                    {/* ACTIONS */}
                    <div className="product-actions">

                        <button
                            className="add-cart-btn"
                            disabled={!product.stock}
                            onClick={handleAddToCart}
                        >
                            🛒 Add to Cart
                        </button>

                        <button
                            className="buy-now-btn"
                            disabled={!product.stock}
                            onClick={handleBuyNow}
                        >
                            ⚡ Buy Now
                        </button>

                        <button
                            className={`wishlist-btn ${
                                isInWishlist(product.id) ? "wishlist-active" : ""
                            }`}
                            onClick={() => {
                                if (isInWishlist(product.id)) {
                                    removeFromWishlist(product.id);
                                } else {
                                    addToWishlist(product);
                                }
                            }}
                        >
                            {isInWishlist(product.id) ? "♥" : "♡"}
                        </button>

                    </div>

                    {/* BENEFITS */}
                    <div className="product-benefits">

                        <div className="benefit-item">
                            <span>🚚</span>
                            <div>
                                <strong>Free Shipping</strong>
                                <small>On eligible orders</small>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <span>↩️</span>
                            <div>
                                <strong>Easy Returns</strong>
                                <small>7 days return policy</small>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <span>🛡️</span>
                            <div>
                                <strong>Quality Guarantee</strong>
                                <small>Trusted YOOPIN products</small>
                            </div>
                        </div>

                        <div className="benefit-item">
                            <span>🔒</span>
                            <div>
                                <strong>Secure Payment</strong>
                                <small>Safe & secure checkout</small>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* PRODUCT DETAILS */}
            <div className="product-information">

                <div className="information-section">

                    <h2>Product Description</h2>

                    <p>
                        {product.description}
                    </p>

                </div>

                <div className="information-section">

                    <h2>Shipping & Returns</h2>

                    <p>
                        We provide secure packaging and reliable delivery
                        for all YOOPIN products. Eligible products can be
                        returned within 7 days of delivery, subject to
                        our return policy.
                    </p>

                </div>

            </div>

        </div>
    );
};

export default ProductDetails;