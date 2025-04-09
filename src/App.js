import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Prompt from './components/Prompt';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ITFields from './components/ITFields';
import Universities from './components/Universities';
import  ITCourses from './components/ITCourses';
import ResumeTemplate from  './components/ResumeTemplate';
import { ChatProvider } from "./context/Context";
function App() {
  return (
    <ChatProvider>
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Prompt />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/itfields" element={<ITFields />} />
        <Route path="/universities" element={<Universities/>} />
        <Route path="/itcourses" element={<ITCourses/>} />
        <Route path="/resumetemplate" element={<ResumeTemplate/>}/>
        
      </Routes>
    </BrowserRouter>
    </ChatProvider>
  );
}

export default App;
