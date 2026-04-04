import React, { useState } from "react";
import "./signup.css";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css";

function SignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">

      {/* LOGIN FORM */}
      {isLogin && (
        <div className="form active" id="loginForm">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            maxLength="25"
            required
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            maxLength="10"
          />

          <i
            className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer" }}
          ></i>

          <button>Sign in</button>

          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setIsLogin(false)}
              className="link_text"
              style={{ cursor: "pointer" }}
            >
              Sign Up
            </span>
          </p>
        </div>
      )}

      {/* SIGNUP FORM */}
      {!isLogin && (
        <div className="form" id="signupForm">
          <h2>Sign Up</h2>

          <input
            type="text"
            placeholder="Full Name"
            maxLength="50"
          />

          <input
            type="email"
            placeholder="Email"
            maxLength="25"
          />

          <input
            type="password"
            placeholder="Password"
            maxLength="10"
          />

          <button>Sign Up</button>

          <p>
            Already have an account?{" "}
            <span
              onClick={() => setIsLogin(true)}
              className="linkk_text"
              style={{ cursor: "pointer" }}
            >
              Login
            </span>
          </p>
        </div>
      )}

    </div>
  );
}

export default SignUp;