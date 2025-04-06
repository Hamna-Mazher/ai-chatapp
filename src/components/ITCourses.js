import React from "react";
import "./ITCourses.css";
import codecademy from '../assets/codecademy.png'
import edx from '../assets/edx.jpg'
import cousera from '../assets/cousera.png'
import khanacademy from '../assets/khanacademy.png'
import udemy from '../assets/udemy.png'
import freecodecamp from '../assets/freecodecamp.png'
import udacity from   '../assets/udacity.png'
import odinproject from '../assets/odinproject.png'
import pluralsight from '../assets/pluralsight.png'
import treehouse from '../assets/treehouse.png'
import codeavengers from '../assets/codeavengers.png'
import codewars from '../assets/codewars.png'
import sololearn from '../assets/sololearn.png'
import codeorg from '../assets/codeorg.png'
import upskill from '../assets/upskill.png'
import mit from '../assets/mit.png'
import onemonth from '../assets/onemonth.png'
import dashGE from '../assets/dashGE.jpg'
import googledevelopers from '../assets/googledevelopers.png'
import envatotuts from '../assets/envatotuts.png'
import linkedin from '../assets/linkedin.png'
import sitepoint from '../assets/sitepoint.png'
import coderbyte from '../assets/coderbyte.jpg'
import edabit from '../assets/edabit.png'
import  sqlzoo from '../assets/sqlzoo.jpg'
import geeksforgeeks from '../assets/geeksforgeeks.png'
import codingbat from '../assets/codingbat.png'
import codeeasy from '../assets/codeeasy.png'

const platforms = [
  {
    name: "Codecademy",
    link: "https://www.codecademy.com",
    logo: codecademy,
  },
  {
    name: "edX",
    link: "https://www.edx.org",
    logo: edx,
  },
  {
    name: "Coursera",
    link: "https://www.coursera.org", 
    logo: cousera,
  },
  {
    name: "Khan Academy",
    link: "https://www.khanacademy.org",
    logo: khanacademy,
  },
  {
    name: "Udemy",
    link: "https://www.udemy.com",
    logo: udemy,
  },
  {
    name: "freeCodeCamp",
    link: "https://www.freecodecamp.org",
    logo: freecodecamp,
  },
  {
    name: "Udacity",
    link: "https://www.udacity.com",
    logo: udacity,
  },
  {
    name: "The Odin Project",
    link: "https://www.theodinproject.com",
    logo: odinproject,
  },
  {
    name: "W3Schools",
    link: "https://www.w3schools.com",
    logo: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
  },
  {
    name: "Pluralsight",
    link: "https://www.pluralsight.com",
    logo: pluralsight,
  },
  {
    name: "Team Treehouse",
    link: "https://teamtreehouse.com",
    logo:  treehouse,
  },
  {
    name: "Code Avengers",
    link: "https://www.codeavengers.com",
    logo: codeavengers,
  },
  {
    name: "Codewars",
    link: "https://www.codewars.com",
    logo: codewars,
  },
  {
    name: "Sololearn",
    link: "https://www.sololearn.com",
    logo: sololearn,
  },
  {
    name: "Code.org",
    link: "https://www.code.org",
    logo: codeorg,
  },
  {
    name: "Upskill",
    link: "https://upskillcourses.com",
    logo: upskill,
  },
  {
    name: "MIT OpenCourseWare",
    link: "https://ocw.mit.edu",
    logo: mit,
  },
  {
    name: "OneMonth",
    link: "https://www.onemonth.com",
    logo: onemonth,
  },
  {
    name: "Dash, by General Assembly",
    link: "https://dash.generalassemb.ly",
    logo: dashGE,
  },
  {
    name: "Learn, by Google Developers",
    link: "https://developers.google.com/learn",
    logo: googledevelopers,
  },
  {
    name: "Envato Tuts+",
    link: "https://tutsplus.com",
    logo: envatotuts,
  },
  {
    name: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning",
    logo: envatotuts,
  },
  {
    name: "SitePoint",
    link: "https://www.sitepoint.com",
    logo: sitepoint,
  },
  {
    name: "Coderbyte",
    link: "https://www.coderbyte.com",
    logo: coderbyte,
  },
  {
    name: "Edabit",
    link: "https://edabit.com",
    logo: edabit,
  },
  {
    name: "SQLZoo",
    link: "https://sqlzoo.net",
    logo: sqlzoo,
  },
  {
    name: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org",
    logo: geeksforgeeks,
  },
  {
    name: "Codingbat",
    link: "https://codingbat.com",
    logo: codingbat,
  },
  {
    name: "Bitdegree",
    link: "https://www.bitdegree.org",
    logo: "https://www.bitdegree.org/favicon.ico",
  },
  {
    name: "Codeasy",
    link: "https://codeasy.net",
    logo: codeeasy,
  },
];

const ITCourses = () => {
  return (
    <div className="main-container">
      <h1 className="heading">Course Platforms</h1>
      <div className="category-container">
        {platforms.map((platform, index) => (
          <div className="category-card" key={index}>
            <img
             src={platform.logo}
             alt={`${platform.name} logo`}
              className="category-logo"
             />

            <h3 className="category-title">{platform.name}</h3>
            <p className="category-description">
              Discover courses and resources at {platform.name}.
            </p>
            <div className="card-hover">
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-courses-btn"
              >
                Visit Platform
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  
export default ITCourses;