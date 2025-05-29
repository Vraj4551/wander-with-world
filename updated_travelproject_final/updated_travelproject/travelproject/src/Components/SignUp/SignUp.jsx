import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import Video1 from "../../Assets/Video1.mp4";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.scss"; // Make sure to import the SCSS file

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      navigate("/"); // Automatically redirect to home if already logged in
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/signup",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Force reload to update navbar state
      window.location.href = "/";
    } catch (error) {
      setError(error.response?.data?.msg || "Login failed. Please try again.");
      console.error(
        "Login failed:",
        error.response?.data?.msg || error.message
      );
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/google",
        {
          token: credentialResponse.credential, // This matches backend parameter name
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Force page reload to ensure navbar updates
      window.location.href = "/";
    } catch (error) {
      setError("Google login failed. Please try again.");
      console.error("Google Login failed:", error);
    }
  };

  if (user) {
    return <div>Redirecting to home page...</div>;
  }

  return (
    <div className="wrapper">
      <div className="videoBg">
        <video src={Video1} autoPlay loop muted></video>
      </div>

      <form onSubmit={handleLogin}>
        <h1>Login</h1>
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaUser className="icon" />
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

        <button type="submit">Login</button>

        <div
          className="google-login-container"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => setError("Google Login Failed")}
          />
        </div>

        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
