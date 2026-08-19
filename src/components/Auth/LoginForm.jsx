import { Link } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Welcome Back</h2>
        <p className="auth-subtitle">
          Sign in to continue
        </p>

        <form>

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

            <a href="#">Forgot Password?</a>

          </div>

          <button className="btn auth-btn">
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