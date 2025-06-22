import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import FrontPage from './pages/FrontPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PersonalPage from './pages/PersonalPage';
import NewContactPage from './pages/NewContactPage';
import { useEffect } from 'react';

import { io } from 'socket.io-client'; // ✅ Import socket.io-client

const socket = io("http://localhost:3000", {
  withCredentials: true,
});

function App() {

  useEffect(() => {
    // ✅ Handle connection status
    socket.on('connect', () => {
      console.log('🟢 Connected to socket.io server');
    });

    socket.on('disconnect', () => {
      console.log('🔴 Disconnected from socket.io server');
    });

    return () => {
    socket.off('connect');
    socket.off('disconnect');
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/FrontPage/:id" element={<FrontPage socket={socket} />} /> {/* ✅ pass socket */}
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/PersonalPage/:id/:contact_id" element={<PersonalPage socket={socket} />} /> {/* ✅ pass socket */}
        <Route path="/NewContactPage/:id" element={<NewContactPage/>} /> {/* optional if needed */}
      </Routes>
    </Router>
  );
}

export default App;