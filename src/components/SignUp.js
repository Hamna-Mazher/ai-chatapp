import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullName = (formData.fullName || "").trim();
    const email = (formData.email || "").trim();
    const password = (formData.password || "").trim();

    console.log("Form Values →", { fullName, email, password });

    if (!fullName || !email || !password) {
      setErrors("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors("Enter a valid email address!");
      return;
    }

    setErrors("");
    setLoading(true);
    console.log("📤 Sending to backend →", { fullName, email, password });

    try {
      const response = await fetch("https://backend-production-6b24.up.railway.app/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Signup failed:", data);
        setErrors(data.message || "Signup failed.");
      } else {
        alert("Sign Up Successful! 🎉");
setFormData({ fullName: "", email: "", password: "" });
navigate("/chat"); // ✅ redirect user to chat after signup

      }
    } catch (error) {
      console.error("Network error:", error);
      setErrors("Network error or server is down.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Your Account</h2>
        {errors && <p className="error-text">{errors}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <p className="password-text">
            <FontAwesomeIcon icon={faLock} className="password" />
            Password must be 8 characters
          </p>
          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
