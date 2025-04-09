
import React from 'react';
import { Link } from 'react-router-dom';
import chatbotImg from "../assets/chatbotImg.png";
import './Prompt.css';
import careerVideo from '../assets/career-video.mp4.mp4'; // Add a career counseling video in the project folder

const Prompt = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={careerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      <div className="container-prompt">
        <div className="header">
          <div className="text-prompt">Welcome to CareerIT
          <img src={chatbotImg} alt="new chat" className="chatbot" />
             </div>
        </div>
        <div className="forgot-password-prompt">Guiding IT Minds, Shaping Careers.🚀 
        </div>
        <div className="forgot-password">
        {/* Your ultimate career counseling platform designed for IT students. */}

        Get personalized career guidance,
        recommended courses, university options, and resume-building guidance support—all in one place.
        Sign up now to start your journey!
        </div>
        <div className="submit-container">
          <Link to="/login" className="submit">Login</Link>
          <Link to="/signup" className="submit">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
