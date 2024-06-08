import React from "react";
import { Link } from 'react-router-dom';
import google from "../assets/google.png";
export default function Login() {
  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <i className="bx bx-hide eye-icon" />
            </div>
            <div className="form-link">
              <a href="#" className="forgot-pass">
                Forgot password?
              </a>
            </div>
            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <Link to="/signup">Signup</Link>
            </span>
          </div>
        </div>
        <div className="line" />
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon" />
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <img src={google} alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
