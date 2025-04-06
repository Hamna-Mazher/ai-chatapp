import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaUserCircle, FaPen, FaListUl, FaUniversity, FaLaptopCode, FaBook, FaExternalLinkAlt } from "react-icons/fa";
import "./ResumeTemplate.css";
import {Link} from "react-router-dom" ;
const ResumeTemplate = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    { title: "Header", icon: <FaUserCircle />, content: "Include your name, phone number, email, LinkedIn profile, and location.", example: `John Doe\n+123 456 7890\njohn.doe@email.com\nlinkedin.com/in/johndoe` },
    { title: "Summary", icon: <FaPen />, content: "A concise 2-3 sentence introduction summarizing your career goals.", example: `Passionate Frontend Developer with 3+ years of experience in web development.` },
    { title: "Skills", icon: <FaListUl />, content: "List your most relevant hard skills that match the job description.", example: `HTML, CSS, JavaScript, React, Node.js, UX/UI Design` },
    { title: "Experience", icon: <FaPen />, content: "Highlight relevant past job experiences with key achievements.", example: `Frontend Developer | XYZ Corp | 2021 - Present\n- Developed responsive interfaces, increasing engagement by 20%.` },
    { title: "Education", icon: <FaUniversity />, content: "Include your degrees, certifications, and distinctions.", example: `BSc in Computer Science\nUniversity of XYZ, 2021\nFull Stack Web Developer (Udemy)` },
    { title: "Projects", icon: <FaLaptopCode />, content: "Mention key projects with brief descriptions and links.", example: `Portfolio Website\nBuilt using React and deployed on Netlify.\nGitHub: github.com/johndoe/portfolio` },
    { title: "Courses", icon: <FaBook />, content: "List relevant courses you have completed.", example: `JavaScript Essentials (Udemy) - March 2022\nAdvanced CSS (Coursera) - June 2021` },
  ];

  const atsTools = [
    { name: "Overleaf", link: "https://www.overleaf.com/", icon: "📝" },
    { name: "Jobscan", link: "https://www.jobscan.co/", icon: "🔍" },
    { name: "Resumake", link: "https://resumake.io/", icon: "📄" },
    { name: "Canva", link: "https://www.canva.com/resumes/templates/", icon: "🎨" },
    { name: "Zety", link: "https://zety.com/resume-builder", icon: "📑" },
    { name: "Novoresume", link: "https://novoresume.com/", icon: "🚀" },
  ];
  const section = [
    { title: "Header", icon: <FaUserCircle />, content: "Include your name, phone number, email, LinkedIn profile, and location." },
    { title: "Summary", icon: <FaPen />, content: "A concise 2-3 sentence introduction summarizing your career goals." },
    { title: "Skills", icon: <FaListUl />, content: "List your most relevant hard skills that match the job description." },
    { title: "Experience", icon: <FaPen />, content: "Highlight relevant past job experiences with key achievements." },
    { title: "Education", icon: <FaUniversity />, content: "Include your degrees, certifications, and distinctions." },
    { title: "Projects", icon: <FaLaptopCode />, content: "Mention key projects with brief descriptions and links." },
    { title: "Courses", icon: <FaBook />, content: "List relevant courses you have completed." },
  ];

  return (
    <>
      {/* Heading */}
      <h1 className="resume-heading">Resume Guidance</h1>

      {/* ATS Explanation */}
      <section className="ats-section">
        <h2>What is an ATS-Friendly Resume?</h2>
        <p>
          Many companies use Applicant Tracking Systems (ATS) to filter resumes before hiring managers see them.<br></br>
          Ensure your resume has proper formatting and keywords to pass ATS scans.
        </p>
      </section>

      {/* Resume Sections */}
     
<section className="resume-tools-container">
  <h2>Resume Sections</h2>
  <div className="resume-tools-grid">
    {section.map((section, index) => (
      <div key={index} className="resume-tool-item">
        <span className="tool-icon">{section.icon}</span>
        <h3 className="section-title">{section.title}</h3>
        <p>{section.content}</p>
      </div>
    ))}
  </div>
</section>
      {/* ATS Explanation */}
      <section className="ats-example">
  <h2>ATS-Friendly Resume</h2>

  <a href="/Demo_Resume.pdf" target="_blank" rel="noopener noreferrer">
    <button className="resume-btn">Open Resume</button>
  </a>

  <a href="/Demo_Resume.pdf" download>
    <button className="resume-btn download-btn">Download Resume</button>
  </a>
</section>


    
     

      {/* Tools for ATS-Friendly Resume */}
      <section className="ats-tools-container">
        <h2>Tools for Creating an ATS-Friendly Resume</h2>
        <p>Use these tools to create resumes that pass ATS scans:</p>
        <div className="ats-tools-grid">
          {atsTools.map((tool, index) => (
            <div key={index} className="ats-tool-item">
              <span className="tool-icon">{tool.icon}</span>
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                {tool.name} <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ResumeTemplate;