import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ITFields.css"; // Import the CSS file

const itFields = [
  { title: "Frontend Web Development", category: "Software Development & Engineering", description: "Develop the visual part of websites that users interact with using HTML, CSS, JavaScript, and frameworks like React.js, Vue.js, or Angular.", icon: "🌐", link: "/frontend-development" },
  { title: "Backend Web Development", category: "Software Development & Engineering", description: "Handle the server-side logic, databases, and APIs using languages like Node.js, Python, PHP, or Java.", icon: "💻", link: "/backend-development" },
  { title: "Full-Stack Web Development", category: "Software Development & Engineering", description: "Combine frontend and backend skills to build complete web applications from UI to database management.", icon: "⚙️", link: "/fullstack-development" },
  { title: "Android App Development", category: "Software Development & Engineering", description: "Build mobile applications for Android devices using Java, Kotlin, or Flutter.", icon: "📱", link: "/android-development" },
  { title: "iOS App Development", category: "Software Development & Engineering", description: "Develop iPhone and iPad applications using Swift or Objective-C with Xcode.", icon: "📲", link: "/ios-development" },
  { title: "Flutter App Development", category: "Software Development & Engineering", description: "Create cross-platform apps(Android & iOS) with a single codebase using Flutter & Dart.", icon: "🔄", link: "/flutter-development" },
  { title: "React Native App Development", category: "Software Development & Engineering", description: "Build native-like mobile apps for Android & iOS using React.js and JavaScript.", icon: "📟", link: "/react-native-development" },
  { title: "Unity Game Development", category: "Software Development & Engineering", description: "Create 2D & 3D games for PC, Mobile and Consoles using C# and Unity Engine.", icon: "🎮", link: "/unity-development" },
  { title: "Unreal Engine Game Development", category: "Software Development & Engineering", description: "Develop high-quality, realistic 3D games using C++ and Unreal Engine.", icon: "🕹️", link: "/unreal-development" },
  { title: "Desktop Application Development", category: "Software Development & Engineering", description: "Build software for Windows, macOS, and Linux using Python, Java, or C#.", icon: "💾", link: "/desktop-development" },
  { title: "Embedded Systems Development", category: "Software Development & Engineering", description: "Develop hardware-software integrated systems like IoT devices and smart appliances.", icon: "🔌", link: "/embedded-development" },
  { title: "DevOps Engineering", category: "Software Development & Engineering", description: "Automate software development and deployment and several management using tools like Docker, Kubernetes, and CI/CD pipelines.", icon: "🚀", link: "/devops-engineering" },

  // Data & AI Fields
  { title: "Data Science", category: "Data & AI Fields", description: "Analyze large datasets to find patterns and insights for decision-making using Python, R, and SQL.", icon: "📊", link: "/data-science" },
  { title: "Machine Learning", category: "Data & AI Fields", description: "Train computers to learn and improve from data for automation and predictions in various industries.", icon: "🤖", link: "/machine-learning" },
  { title: "Artificial Intelligence", category: "Data & AI Fields", description: "Build smart systems like chatbots, virtual assistants, and image recognition models.", icon: "🧠", link: "/ai" },
  { title: "Business Intelligence", category: "Data & AI Fields", description: "Collect and analyze business data to improve efficiency and decision-making." },
  { title: "Big Data Engineering", category: "Data & AI Fields", description: "Manage and process massive amounts of data using Hadoop, Spark, and cloud technologies.", icon: "📡", link: "/big-data" },
  { title: "Data Analytics", category: "Data & AI Fields", description: "Protect digital systems from hacking, malware, and cyber threats using security tools and policies.", icon: "📋", link: "/data-analytics" },

  // Networking & Cybersecurity
  { title: "Network Administration", category: "Networking & Cybersecurity", description: "Manage and maintain computer networks, ensuring smooth data communication.", icon: "🔗", link: "/network-administration" },
  { title: "Cybersecurity", category: "Networking & Cybersecurity", description: "Manage and maintain computer networks, ensuring smooth data communication.", icon: "🔐", link: "/cybersecurity" },
  { title: "Ethical Hacking", category: "Networking & Cybersecurity", description: "Identify and fix security loopholes by testing systems just like hackers do, but legally.", icon: "🛡️", link: "/ethical-hacking" },
  { title: "Cloud Security", category: "Networking & Cybersecurity", description: "Identify and fix security loopholes by testing systems just like hackers do, but legally.", icon: "☁️", link: "/cloud-security" },
  { title: "System Administration", category: "Networking & Cybersecurity", description: "Install, configure, and manage IT infrastructure like servers and databases", icon: "🖥️", link: "/system-administration." },
  { title: "IT Support & Helpdesk", category: "Networking & Cybersecurity", description: "Provide technical support to users, troubleshoot hardware/software issues, and maintain IT systems.", icon: "📞", link: "/it-support" },

    // UI/UX & Design
    { title: "UI/UX Design", category: "UI/UX & Design", description: "Design user-friendly and visually appealing digital products like websites and mobile apps.", icon: "🎨", link: "/ui-ux-design" },
    { title: "Graphic Design", category: "UI/UX & Design", description: "Create visuals like logos, banners, posters, and social media content using Photoshop and Illustrator.", icon: "🖌️", link: "/graphic-design" },
    { title: "Motion Graphics", category: "UI/UX & Design", description: "Make animated videos, advertisements, and visual effects using After Effects and Blender.", icon: "🎥", link: "/motion-graphics" },
    { title: "Product Design", category: "UI/UX & Design", description: "Design and prototype physical and digital products to improve user experience.", icon: "📐", link: "/product-design" },
    { title: "3D Modeling", category: "UI/UX & Design", description: "Create 3D assets for games, movies, architecture, and virtual reality using software like Maya and Blender.", icon: "🔧", link: "/3d-modeling" },
   // IT Management & Consulting
   { title: "IT Project Management", category: "IT Management & Consulting", description: "Plan and oversee IT projects to ensure they are completed on time and within budget.", icon: "📅", link: "/it-project-management" },
   { title: "IT Business Analysis", category: "IT Management & Consulting", description: "Analyze business needs and suggest IT solutions for better performance.", icon: "📊", link: "/it-business-analysis" },
   { title: "IT Consultancy", category: "IT Management & Consulting", description: "– Provide expert advice on technology solutions and improvements for businesses.", icon: "💼", link: "/it-consultancy" },
   { title: "Enterprise Resource Planning (ERP)", category: "IT Management & Consulting", description: "Implement and manage business software for finance, HR, and operations.", icon: "⚙️", link: "/erp" },
     //Cloud Computing & DevOps
  { title: "Cloud Engineering", category: "Cloud Computing & DevOps", description: "Develop and maintain cloud-based solutions on platforms like AWS, Azure, and Google Cloud.", icon: "☁️", link: "/cloud-engineering" },
  { title: "Site Reliability Engineering (SRE)", category: "Cloud Computing & DevOps", description: "Ensure that online services run smoothly with minimal downtime.", icon: "🛠️", link: "/site-reliability-engineering" },
  { title: "DevOps Engineering", category: "Cloud Computing & DevOps", description: "Automate the development and deployment of software using CI/CD pipelines.", icon: "🚀", link: "/devops-engineering" },
  { title: "Virtualization", category: "Cloud Computing & DevOps", description: "Automate the development and deployment of software using CI/CD pipelines.", icon: "💾", link: "/virtualization" },

  // Digital Marketing & E-Commerce
  { title: "SEO (Search Engine Optimization)", category: "Digital Marketing & E-Commerce", description: "Implement and manage business software for finance, HR, and operations.", icon: "🔍", link: "/seo" },
  { title: "Social Media Marketing", category: "Digital Marketing & E-Commerce", description: "Promote businesses on platforms like Facebook, Instagram, and LinkedIn.", icon: "📱", link: "/social-media-marketing" },
  { title: "E-Commerce Development", category: "Digital Marketing & E-Commerce", description: "Promote businesses on platforms like Facebook, Instagram, and LinkedIn.", icon: "🛒", link: "/e-commerce-development" },
  { title: "Content Marketing", category: "Digital Marketing & E-Commerce", description: "Create blogs, videos, and infographics to engage and educate audiences.", icon: "📝", link: "/content-marketing" },
  { title: "Affiliate Marketing", category: "Digital Marketing & E-Commerce", description: "Earn commissions by promoting products and services online.", icon: "💸", link: "/affiliate-marketing" },
  // Blockchain & Web3
  { title: "Blockchain Development", category: "Blockchain & Web3", description: "Build decentralized applications (DApps) and smart contracts using Ethereum and Solidity.", icon: "⛓️", link: "/blockchain-development" },
  { title: "Smart Contracts", category: "Blockchain & Web3", description: "Develop self-executing contracts that automate transactions on blockchain networks.", icon: "📜", link: "/smart-contracts" },
  { title: "Cryptocurrency & NFTs", category: "Blockchain & Web3", description: "Work with digital currencies and tokenized assets in the Web3 space.", icon: "💰", link: "/cryptocurrency-nfts" },
  { title: "Decentralized Apps (DApps)", category: "Blockchain & Web3", description: "Create applications that run on blockchain without central control.", icon: "🔗", link: "/decentralized-apps" },

  // IT Education & Training
  { title: "Technical Training & IT Certifications", category: "IT Education & Training", description: "Teach IT skills through bootcamps and certification programs like AWS, Cisco, and Google.", icon: "🎓", link: "/technical-training" },
  { title: "IT Lecturing & Research", category: "IT Education & Training", description: "Educate students in universities and conduct research on emerging technologies.", icon: "📚", link: "/it-lecturing-research" },
  { title: "Freelancing & IT Entrepreneurship", category: "IT Education & Training", description: "Work independently or start IT-based businesses for global clients.", icon: "💼", link: "/freelancing-entrepreneurship" },

];

// Function to group fields by category
const groupFieldsByCategory = (fields) => {
  return fields.reduce((acc, field) => {
    if (!acc[field.category]) {
      acc[field.category] = [];
    }
    acc[field.category].push(field);
    return acc;
  }, {});
};

const ITFields = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const groupedFields = groupFieldsByCategory(itFields);

  return (
    <div className="it-container">
      <h2 className="it-title">Explore IT Careers</h2>

      {/* Search Bar */}
      <div className="it-search-container">
        <input
          type="text"
          placeholder="Search IT Fields..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="it-search-input"
        />
      </div>

      {/* Render each category with a centered heading */}
      {Object.keys(groupedFields).map((category, categoryIndex) => {
        // Filter based on search query
        const filteredFields = groupedFields[category].filter((field) =>
          field.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (filteredFields.length === 0) return null;

        return (
          <div key={categoryIndex} className="it-category">
            <h2 className="it-category-heading">{category}</h2>
            <div className="it-cards-grid">
              {filteredFields.map((field, index) => (
                <motion.div
                  key={index}
                  className="it-card"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="it-icon">{field.icon}</div>
                  <h3 className="it-card-title">{field.title}</h3>
                  <p className="it-card-description">{field.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}

      {/* No Results Message */}
      {Object.values(groupedFields).every(
        (fields) => fields.filter((field) => field.title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0
      ) && <p className="it-no-results">No matching IT fields found.</p>}
    </div>
  );
};

export default ITFields;
