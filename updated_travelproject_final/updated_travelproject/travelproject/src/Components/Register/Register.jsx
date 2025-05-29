import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Video1 from "../../Assets/Video1.mp4";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss"; // Make sure to import the SCSS file

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      navigate("/"); // Redirect to home if already logged in
    }
  }, [navigate]);

  // Validate email domain
  const validateEmail = (email) => {
    if (!email) return false;

    // Check if the email ends with @gmail.com
    return email.toLowerCase().endsWith("@gmail.com");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Clear email error when field is empty
    if (!value) {
      setEmailError("");
      return;
    }

    // Set error if not a Gmail address
    if (!validateEmail(value)) {
      setEmailError("Only Gmail addresses (@gmail.com) are allowed");
    } else {
      setEmailError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Validate email before submission
    if (!validateEmail(email)) {
      setEmailError("Only Gmail addresses (@gmail.com) are allowed");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        { name, email, password }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Force reload to update navbar state
      window.location.href = "/";
    } catch (error) {
      setError(
        error.response?.data?.msg || "Registration failed. Please try again."
      );
      console.error(
        "Registration failed:",
        error.response?.data?.msg || error.message
      );
    }
  };

  // Handle Google SignUp
  const handleGoogleSignup = async (credentialResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/google",
        {
          token: credentialResponse.credential,
        }
      );

      // Check if the email from Google is a Gmail address
      // (This is actually redundant since Google login will always have a Gmail address,
      // but included for completeness)
      const user = response.data.user;
      if (user && user.email && !validateEmail(user.email)) {
        setError("Only Gmail addresses (@gmail.com) are allowed");
        return;
      }

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Force reload to update navbar state
      window.location.href = "/";
    } catch (error) {
      setError("Google signup failed. Please try again.");
      console.error("Google Signup failed:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="videoBg">
        <video src={Video1} autoPlay loop muted></video>
      </div>

      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        {error && (
          <div
            className="error-message"
            style={{ color: "red", marginBottom: "10px" }}
          >
            {error}
          </div>
        )}

        <div className="input-box">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email (Gmail only)"
            value={email}
            onChange={handleEmailChange}
            required
            className={emailError ? "error-input" : ""}
          />
          <FaEnvelope className="icon" />
          {emailError && (
            <div
              className="email-error"
              style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}
            >
              {emailError}
            </div>
          )}
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <button type="submit" disabled={!!emailError}>
          Register
        </button>
        <div
          className="google-login-container"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GoogleLogin
            onSuccess={handleGoogleSignup}
            onError={() => setError("Google Signup Failed")}
          />
        </div>
        <div className="login-link">
          <p>
            Already have an account? <Link to="/signup">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
