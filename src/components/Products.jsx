import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext";
import "../styles/Product.css";

const Products = () => {
    const [products, setProducts] = useState([]);

    const {
        addToWishlist,
        removeFromWishlist,
        isInWishlist
    } = useWishlist();

    useEffect(() => {
        axios.get("http://localhost:8080/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section className="home-products">

            {/* Section Heading */}
            <div className="products-header">
                <p className="products-subtitle">
                    OUR COLLECTION
                </p>

                <h1>Featured Products</h1>

                <p>
                    Premium fitness essentials designed to support
                    your strength, training and everyday performance.
                </p>
            </div>

            {/* Products */}
            <div className="products-grid">

                {products.slice(0, 6).map((product) => (
                    <div
                        className="product-card"
                        key={product.id}
                    >

                        {/* Product Image */}
                        <div className="product-image">

                            {/* Wishlist Button */}
                            <button
                                className="wishlist-button"
                                onClick={() => {
                                    if (isInWishlist(product.id)) {
                                        removeFromWishlist(product.id);
                                    } else {
                                        addToWishlist(product);
                                    }
                                }}
                                aria-label="Wishlist"
                            >
                                <i
                                    className={
                                        isInWishlist(product.id)
                                            ? "bi bi-heart-fill"
                                            : "bi bi-heart"
                                    }
                                ></i>
                            </button>

                            {product.image ? (
                                <img
                                    src={`http://localhost:8080/uploads/${product.image}`}
                                    alt={product.name}
                                />
                            ) : (
                                <div className="no-image">
                                    No Image
                                </div>
                            )}

                        </div>

                        {/* Product Information */}
                        <div className="product-info">

                            <p className="product-category">
                                {product.category_name || "Fitness"}
                            </p>

                            <h3>
                                {product.name}
                            </h3>

                            <p className="product-description">
                                {product.description}
                            </p>

                            <div className="product-bottom">

                                <span className="product-price">
                                    ₹{product.price}
                                </span>

                                <Link
                                    to={`/products/${product.id}`}
                                >
                                    <button className="view-btn">
                                        View Details →
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

            {/* View All Button */}
            <div className="view-all-products">
                <Link to="/products">
                    <button className="view-all-btn">
                        View All Products
                    </button>
                </Link>
            </div>

        </section>
    );
};

export default Products;