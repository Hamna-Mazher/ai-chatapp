import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.password) {
      setErrors("All fields are required!");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors("Enter a valid email address!");
      return;
    }
  
    try {
      const response = await fetch("https://backend-production-6b24.up.railway.app/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        // Display backend error message if sign-up failed
        setErrors(data.message || "Something went wrong!");
      } else {
        // Success 🎉
        setErrors("");
        alert("Sign Up Successful! 🚀");
        // Optionally redirect to login page
      }
    } catch (error) {
      setErrors("Network error or server is down.");
      console.error("Error:", error);
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Your Account</h2>
        {errors && <p className="error-text">{errors}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>
          <p className="password-text">
          <FontAwesomeIcon icon={faLock} className="password" />
          Password must be 8 characters
        </p>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
      
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;