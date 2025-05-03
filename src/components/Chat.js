// Chat.js
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import closeIcon from "../assets/closeIcon.png";
import { marked } from "marked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faBookOpen,
  faGraduationCap,
  faFileAlt,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { ChatContext } from "../context/Context";
import { GROQ_API_URL, GROQ_API_KEY } from "../config/groq";
import { motion, AnimatePresence } from "framer-motion";

const Chat = () => {
  const [sessions, setSessions] = useState(() => {
    const stored = localStorage.getItem("careerIT_sessions");
    return stored ? JSON.parse(stored) : {};
  });
  const [activeSessionId, setActiveSessionId] = useState(() => {
    const stored = localStorage.getItem("careerIT_activeSession");
    return stored || "session-1";
  });
  const chats = sessions[activeSessionId] || [];
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [typedMessage, setTypedMessage] = useState("");
  const [recentQuestions, setRecentQuestions] = useState([]);
  const navigate = useNavigate();
  const BACKEND_URL = "https://backend-production-6b24.up.railway.app";

  const addChat = (sender, message) => {
    const timestamp = new Date().toISOString();
    setSessions((prev) => ({
      ...prev,
      [activeSessionId]: [...(prev[activeSessionId] || []), { sender, message, timestamp }],
    }));
    saveChatToBackend(sender, message);
    if (sender === "user") fetchRecentChats();
  };

  const createNewSession = () => {
    const newId = `session-${Object.keys(sessions).length + 1}`;
    setActiveSessionId(newId);
    setSessions((prev) => ({ ...prev, [newId]: [] }));
  };

  const handleLogout = () => {
    localStorage.removeItem("careerIT_sessions");
    localStorage.removeItem("careerIT_activeSession");
    navigate("/");
  };

  const saveChatToBackend = async (sender, message) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await fetch(`${BACKEND_URL}/api/chat/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ sender, message }),
      });
    } catch (error) {
      console.error("Failed to save chat:", error);
    }
  };

  const fetchRecentChats = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`${BACKEND_URL}/api/chat/history`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      if (data.success && Array.isArray(data.history)) {
        const userQuestions = data.history
          .filter(chat => chat.sender === "user")
          .map(chat => chat.message)
          .reverse();
        const uniqueQuestions = [...new Set(userQuestions)];
        setRecentQuestions(uniqueQuestions.slice(0, 3));
      }
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  const handleSend = async (overrideInput) => {
    const userInput = overrideInput ?? input;
    if (!userInput.trim()) return;

    if (showWelcome) setShowWelcome(false);

    const formattedChats = chats.map(chat => ({
      role: chat.sender === "bot" ? "assistant" : "user",
      content: chat.message,
    }));

    const systemMessage = {
      role: "system",
      content: "You are an expert IT career advisor chatbot. You only answer questions related to the field of Information Technology...",
    };

    const updatedChats = [
      systemMessage,
      ...formattedChats,
      { role: "user", content: userInput },
    ];

    addChat("user", userInput);

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
      const botResponse = data?.choices?.[0]?.message?.content;
      addChat("bot", botResponse || "Sorry, I couldn't process your request.");
    } catch (error) {
      console.error("Error fetching response:", error);
      addChat("bot", "An error occurred. Please try again later.");
    }

    setInput("");
  };

  useEffect(() => {
    localStorage.setItem("careerIT_sessions", JSON.stringify(sessions));
    localStorage.setItem("careerIT_activeSession", activeSessionId);
  }, [sessions, activeSessionId]);

  useEffect(() => {
    fetchRecentChats();
  }, []);

  useEffect(() => {
    if (chats.length === 0 && showWelcome) {
      const welcomeText =
        "👋 Hi! I'm your IT career guide. Ask me anything about fields, universities, courses, or resume tips!";
      let index = 0;
      const interval = setInterval(() => {
        setTypedMessage((prev) => prev + welcomeText.charAt(index));
        index++;
        if (index > welcomeText.length) {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [chats.length, showWelcome]);

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
            <img src={addBtn} alt="new chat" className="addBtn" /> New Chat
          </button>

          <div className="upperSideBottom">
            <div className="recent">
              <button className="query-recent-title" onClick={fetchRecentChats}>
                <img src={msgIcon} alt="Query" /> Recent
              </button>

              {recentQuestions.map((msg, idx) => (
                <button
                  key={idx}
                  className="query"
                  onClick={() => handleSend(msg)} // 🔥 Key fix here
                >
                  <img src={msgIcon} alt="Query" /> {msg}
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
            <FontAwesomeIcon icon={faRightFromBracket} className="addBtn" /> Logout
          </button>
        </div>
      </div>

      <div className="main">
        <div className="chats">
          <AnimatePresence>
            {showWelcome && chats.length === 0 && (
              <motion.div
                className="chat bot welcome-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
              >
                <img className="chatImg" src={chatbotImg} alt="Bot" />
                <div className="message-content">
                  <p className="txt">{typedMessage}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {chats.map((chat, index) => (
            <div className={`chat ${chat.sender === "bot" ? "bot" : "user"}`} key={index}>
              <img className="chatImg" src={chat.sender === "bot" ? chatbotImg : userIcon} alt="" />
              <div className="message-content">
                <p
                  className="txt"
                  dangerouslySetInnerHTML={{
                    __html: chat.sender === "bot" ? marked(chat.message) : chat.message,
                  }}
                ></p>
                <span className="timestamp">
                  {new Date(chat.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
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
            <button className="send" onClick={() => handleSend()}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
