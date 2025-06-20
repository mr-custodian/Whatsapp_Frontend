import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand } from "flowbite-react";
import { ArrowLeft, SendHorizontal } from "lucide-react";

const UserName ="Alice";

function PersonalChatPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, { text: message, sender: "me" }]);
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen w-screen bg-gray-50">
      {/* ✅ Navbar */}
      <Navbar className="shadow-md w-full z-50 bg-white">
        <NavbarBrand className="flex items-center space-x-2">
          <button
            onClick={() => navigate(-1)}
            className="group h-10 w-10 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-label="Go back"
          >
            <div className="h-10 w-10 flex items-center justify-center rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
              <ArrowLeft className="h-4 w-4 text-gray-700 dark:text-white" />
            </div>
          </button>
          
        {/* ✅ Added this DP image between back arrow and name */}
          <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg overflow-hidden">
                  {UserName.charAt(0).toUpperCase()}
          </div>
          <span className="text-xl font-semibold dark:text-white">Alice</span> {/* Replace "Alice" dynamically */}
        </NavbarBrand>
      </Navbar>

      {/* ✅ Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.sender === "me"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* ✅ Typing Bar */}
      <div className="p-3 border-t bg-white flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
        >
          <SendHorizontal className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default PersonalChatPage;
