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
        <div className="products-page">

            {/* Page Header */}
            <div className="products-header">
                <p className="products-subtitle">
                    OUR COLLECTION
                </p>

                <h1>Our Products</h1>

                <p>
                    Premium fitness essentials to help you train harder,
                    recover better and stay strong.
                </p>
            </div>

            {/* Products Grid */}
            <div className="products-grid">

                {products.map((product) => (
                    <div
                        className="product-card"
                        key={product.id}
                    >

                        {/* Image */}
                        <div className="product-image">

                            {/* Wishlist */}
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

                        {/* Product Details */}
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

                                <div>
                                    <span className="product-price">
                                        ₹{product.price}
                                    </span>

                                    <p className="stock">
                                        {product.stock > 0
                                            ? `${product.stock} in stock`
                                            : "Out of stock"}
                                    </p>
                                </div>

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

        </div>
    );
};

export default Products;