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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/FrontPage/:id" element={<FrontPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/PersonalPage/:id/:contact_id" element={<PersonalPage />} />
        <Route path="/NewContactPage/:id" element={<NewContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;