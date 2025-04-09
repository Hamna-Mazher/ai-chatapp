import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chat.css";
import gptLogo from "../assets/chatgpt.svg";
import chatgptLogo from "../assets/chatgptLogo.svg";
import chatbotImg from "../assets/chatbotImg.png";
import addBtn from "../assets/add-30.png";
import msgIcon from "../assets/message.svg";
import saved from "../assets/bookmark.svg";
import rocket from "../assets/rocket.svg";
import sendBtn from "../assets/send.svg";
import userIcon from "../assets/userIcon.jpg";
import menuIcon from "../assets/menuIcon.png";
import closeIcon from "../assets/closeIcon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faBookOpen, faGraduationCap, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/Context";
import { GROQ_API_URL, GROQ_API_KEY } from "../config/groq";
import { useEffect } from "react"; // Make sure it's imported at the top


const Chat = () => {
  const [allChats, setAllChats] = useState(() => {
    const storedChats = localStorage.getItem("careerIT_chats");
    return storedChats
      ? JSON.parse(storedChats)
      : {
          today: [],
          yesterday: [
            {
              sender: "user",
              message: "What excites you most about technology?",
            },
            {
              sender: "bot",
              message:
                "Technology evolves constantly and offers new challenges and opportunities...",
            },
            {
              sender: "user",
              message: "Do you enjoy problem-solving?",
            },
            {
              sender: "bot",
              message:
                "Yes, solving problems is at the core of innovation...",
            },
          ],
        };
  });
  const [sessions, setSessions] = useState(() => {
    const stored = localStorage.getItem("careerIT_sessions");
    return stored ? JSON.parse(stored) : {};
  });
  
  const [activeSessionId, setActiveSessionId] = useState(() => {
    const stored = localStorage.getItem("careerIT_activeSession");
    return stored || "session-1";
  });
  const chats = sessions[activeSessionId] || [];

  const addChat = (sender, message) => {
    const timestamp = new Date().toISOString();
    setSessions((prev) => ({
      ...prev,
      [activeSessionId]: [...(prev[activeSessionId] || []), { sender, message, timestamp }]
    }));
  };
  
  
  const createNewSession = () => {
    const newId = `session-${Object.keys(sessions).length + 1}`;
    setActiveSessionId(newId);
    setSessions((prev) => ({
      ...prev,
      [newId]: [],
    }));
  };
  const handleLogout = () => {
  localStorage.clear();      // Clear session/user data
  navigate("/");             // Redirect to the Prompt page
};

  
    
  
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const formattedChats = chats.map(chat => ({
      role: chat.sender === "bot" ? "assistant" : "user",
      content: chat.message,
    }));
  
    const systemMessage = {
      role: "system",
      content:
        "You are an expert IT career advisor chatbot. You only answer questions related to the field of Information Technology, such as IT careers, skills, courses, jobs, resumes, and related guidance. If a question is not related to IT, politely inform the user.",
    };
  
    const updatedChats = [
      systemMessage,
      ...formattedChats,
      { role: "user", content: input },
    ];
  
    addChat("user", input);
  
    try {
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: updatedChats,
          max_tokens: 1024,
          temperature: 1,
        }),
      });
  
      const data = await response.json();
  
      if (data?.choices?.[0]?.message?.content) {
        let formattedResponse = data.choices[0].message.content;
  
        formattedResponse = formattedResponse
          .replace(/^### (.*)$/gm, "<h2 class='heading'>$1</h2>")
          .replace(/^## (.*)$/gm, "<h3 class='subheading'>$1</h3>")
          .replace(/^- (.*)$/gm, "<li>$1</li>")
          .replace(/\n\n/g, "<br/><br/>");
  
        addChat("bot", formattedResponse);
      } else {
        addChat("bot", "Sorry, I couldn't process your request.");
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      addChat("bot", "An error occurred. Please try again later.");
    }
  
    setInput("");
  };
  
  useEffect(() => {
    localStorage.setItem("careerIT_chats", JSON.stringify(allChats));
  }, [allChats]);
  useEffect(() => {
    localStorage.setItem("careerIT_sessions", JSON.stringify(sessions));
    localStorage.setItem("careerIT_activeSession", activeSessionId);
  }, [sessions, activeSessionId]);
  
  return (
    <div className="Chat">
      <button className="menuToggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <img src={sidebarOpen ? closeIcon : menuIcon} alt="Toggle Sidebar" />
      </button>
      <div className={`sideBar ${sidebarOpen ? "open" : ""}`}>
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={chatbotImg} alt="" className="logo" />
            <span className="brand">CareerIT</span>
          </div>
          <button className="midBtn" onClick={createNewSession}>
  <img src={addBtn} alt="new chat" className="addBtn" />
  New Chat
</button>



<div className="upperSideBottom">
  <div className="recent">
  <button
  className="query-recent-title"
  onClick={() => {
    const pastChats = Object.entries(sessions)
      .filter(([id]) => id !== activeSessionId) // exclude current session
      .flatMap(([_, sessionChats]) => sessionChats);

    const qaPairs = [];
    for (let i = 0; i < pastChats.length; i++) {
      if (pastChats[i].sender === "user") {
        const question = pastChats[i];
        const answer = pastChats[i + 1] && pastChats[i + 1].sender === "bot" ? pastChats[i + 1] : null;
        qaPairs.push({ question, answer });
      }
    }

    qaPairs.forEach(({ question, answer }) => {
      if (question) addChat("user", question.message);
      if (answer) addChat("bot", answer.message);
    });
  }}
>
  <img src={msgIcon} alt="Query" /> Recent
</button>



    {Object.values(sessions)
      .flat()
      .filter((chat) => chat.sender === "user")
      .slice(-3)
      .reverse()
      .map((chat, idx) => (
        <button
          key={idx}
          className="query"
          onClick={() => {
            addChat("user", chat.message);
            setInput(chat.message);
            handleSend();
          }}
        >
          <img src={msgIcon} alt="Query" /> {chat.message}
        </button>
      ))}
  </div>
</div>

        </div>
        <div className="lowerSide">
          <Link to="/itfields" className="listItems">
            <FontAwesomeIcon icon={faBookOpen} className="listItemsImg" /> IT Fields
          </Link>
          <Link to="/universities" className="listItems">
            <FontAwesomeIcon icon={faUniversity} className="listItemsImg" /> Universities
          </Link>
          <Link to="/itcourses" className="listItems">
            <FontAwesomeIcon icon={faGraduationCap} className="listItemsImg" /> IT Courses
          </Link>
          <Link to="/resumetemplate" className="listItems">
            <FontAwesomeIcon icon={faFileAlt} className="listItemsImg" /> Resume Guidance
          </Link>
          <button className="logoutBtn" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} className="addBtn" />
  Logout
</button>

        </div>
      </div>
      <div className="main">
        <div className="chats">
          {chats.map((chat, index) => (
           <div className={`chat ${chat.sender === "bot" ? "bot" : "user"}`} key={index}>
           <img className="chatImg" src={chat.sender === "bot" ? chatbotImg : userIcon} alt="" />
           <div className="message-content">
             <p className="txt" dangerouslySetInnerHTML={{ __html: chat.message }}></p>
             <span className="timestamp">
               {new Date(chat.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
             </span>
           </div>
         </div>
               
          
          ))}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Chat;
