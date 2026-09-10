import { Link } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext";
import "../styles/Wishlist.css";

function Wishlist() {
    const {
        wishlist,
        removeFromWishlist
    } = useWishlist();

    return (
        <div className="wishlist-page">

            {/* Header */}
            <div className="wishlist-header">
                <p>YOUR COLLECTION</p>

                <h1>My Wishlist</h1>

                <span>
                    Products you love, saved in one place.
                </span>
            </div>

            {/* Empty Wishlist */}
            {wishlist.length === 0 ? (

                <div className="wishlist-empty">

                    <div className="wishlist-heart">
                        ♡
                    </div>

                    <h2>Your Wishlist is Empty</h2>

                    <p>
                        Save your favourite fitness products here
                        and come back to them anytime.
                    </p>

                    <Link
                        to="/products"
                        className="wishlist-shop-btn"
                    >
                        Explore Products
                    </Link>

                </div>

            ) : (

                /* Wishlist Products */
                <div className="wishlist-grid">

                    {wishlist.map((product) => (

                        <div
                            className="wishlist-card"
                            key={product.id}
                        >

                            {/* Image */}
                            <div className="wishlist-image">

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

                            {/* Details */}
                            <div className="wishlist-info">

                                <p className="wishlist-category">
                                    {product.category_name || "Fitness"}
                                </p>

                                <h3>
                                    {product.name}
                                </h3>

                                <p className="wishlist-price">
                                    ₹{product.price}
                                </p>

                                <div className="wishlist-actions">

                                    <Link
                                        to={`/products/${product.id}`}
                                        className="wishlist-view-btn"
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        className="wishlist-remove-btn"
                                        onClick={() =>
                                            removeFromWishlist(product.id)
                                        }
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default Wishlist;