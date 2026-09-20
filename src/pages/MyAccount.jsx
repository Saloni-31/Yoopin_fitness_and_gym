import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../styles/MyAccount.css";

function MyAccount() {
    const { user, isLoggedIn, isAdmin, logout } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        return (
            <div className="account-page">
                <div className="account-login-box">

                    <h1>My Account</h1>

                    <p>
                        Please login to access your account.
                    </p>

                    <Link to="/login" className="account-login-btn">
                        Login
                    </Link>

                </div>
            </div>
        );
    }

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="account-page">

            <div className="account-container">

                <div className="account-header">
                    <h1>My Account</h1>

                    <p>
                        Welcome, {user.name} 👋
                    </p>
                </div>

                <div className="account-grid">

                    <Link to="/orders" className="account-card">
                        <span>📦</span>
                        <h3>My Orders</h3>
                        <p>View your orders and order history</p>
                    </Link>

                    <Link to="/wishlist" className="account-card">
                        <span>
                            <i className="bi bi-heart"></i>
                        </span>
                        <h3>My Wishlist</h3>
                        <p>View your saved products</p>
                    </Link>

                    <div className="account-card">
                        <span>👤</span>
                        <h3>My Profile</h3>
                        <p>{user.email}</p>
                    </div>

                    <div
                        className="account-card logout-card"
                        onClick={handleLogout}
                    >
                        <span>
                            <i className="bi bi-box-arrow-right"></i>
                        </span>
                        <h3>Logout</h3>
                        <p>Sign out of your account</p>
                    </div>

                    {isAdmin && (
                        <div className="admin-section">

                            <h2>Admin Panel</h2>

                            <div className="account-grid">

                                <Link
                                    to="/addproducts"
                                    className="account-card admin-card"
                                >
                                    <span>➕</span>
                                    <h3>Add Product</h3>
                                    <p>Add new products to YOOPIN</p>
                                </Link>

                                <Link
                                    to="/addcategory"
                                    className="account-card admin-card"
                                >
                                    <span>📂</span>
                                    <h3>Manage Categories</h3>
                                    <p>Add and manage categories</p>
                                </Link>

                            </div>

                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}

export default MyAccount;