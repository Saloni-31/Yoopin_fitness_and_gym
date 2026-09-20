import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    if (!email || !password) {
      setErrors({
        general: "Email and password are required."
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password
        }
      );

      console.log("Login response:", response.data);

      login(response.data);

      navigate("/");
    } catch (error) {
      console.log("Login error:", error);

      setErrors({
        general:
          error.response?.data?.message ||
          "Login failed. Please try again."
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Welcome Back</h2>

        <p className="auth-subtitle">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-3">

            <label className="form-label">
              Email Address
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          {/* Password */}
          <div className="mb-3">

            <label className="form-label">
              Password
            </label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                <i
                  className={`bi ${
                    showPassword
                      ? "bi-eye-slash"
                      : "bi-eye"
                  }`}
                ></i>
              </button>

            </div>

          </div>

          {/* Error */}
          {errors.general && (
            <p className="auth-error">
              {errors.general}
            </p>
          )}

          {/* Remember + Forgot */}
          <div className="auth-options">

            <div className="form-check">

              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
              />

              <label
                className="form-check-label"
                htmlFor="remember"
              >
                Remember Me
              </label>

            </div>

            <a href="#">
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="btn auth-btn"
          >
            Sign In
          </button>

        </form>

        <p className="switch-page">

          Don't have an account?

          <Link to="/signup">
            Sign Up
          </Link>

        </p>

      </div>
    </div>
  );
}

export default LoginForm;