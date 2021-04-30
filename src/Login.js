import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login-left">
        <h3>Internship</h3>
        <div className="login-leftImages"></div>
      </div>
      <div className="login-right">
        <h1>Sign-In</h1>
        <input type="email" placeholder="Your mail" />
        <input type="password" placeholder="Your password" />
        <p className="forget">Forgot your password?</p>
        <button type="submit">Sign In</button>
        <p className="account">Don't have an account?</p>
        <Link className="signUp" to="signup">
          <p className="signUp">Register Now!</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
