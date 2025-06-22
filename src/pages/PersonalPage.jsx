import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand } from "flowbite-react";
import { ArrowLeft, SendHorizontal } from "lucide-react";
import { useParams } from 'react-router-dom';
import axios from "axios"; // ✅ for making API calls



const UserName ="Alice";

function PersonalChatPage( {socket} ) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user_id  = useParams().id;
  const contact_id = useParams().contact_id;
  //console.log(id,"uuu",contact_id);

const handleSend = async () => {
  if (!message.trim()) return;

  const newMsg = {
    chatstr: message,
    sender_id: parseInt(user_id),
    reciever_id: parseInt(contact_id),
    timing: new Date().toISOString(),
  };

  try {
    // ✅ Send to backend
    await axios.post(`http://localhost:3000/api/PersonalPage`, newMsg);

    // ✅ Emit message to socket
    if (socket && socket.connected) {
      socket.emit("send-message", newMsg); // ✅ Notify server for live update
    }

    // ✅ Optimistically update UI
    setChats((prev) => [...prev, newMsg]);
    setMessage("");
  } catch (err) {
    console.error("Failed to send message:", err);
  }
};


  useEffect(() => {
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/PersonalPage/${user_id}/${contact_id}`);
      setChats(response.data.chats);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };

  fetchContacts();

  if (socket) {
    const handleMessage = (data) => {
      if (
        (data.sender_id === parseInt(contact_id) && data.reciever_id === parseInt(user_id)) ||
        (data.sender_id === parseInt(user_id) && data.reciever_id === parseInt(contact_id))
      ) {
        setChats((prev) => [...prev, data]);
      }
    };

    socket.on("message-received", handleMessage);

    return () => {
      socket.off("message-received", handleMessage); // Proper cleanup
    };
  }
}, [socket, user_id, contact_id]); // ✅ dependency array is important


const [Chats, setChats] = useState([]);

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
        {Chats.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg break-words ${
              msg.sender_id === parseInt(user_id) // ✅ Check if message is sent by current user
                ? "bg-blue-500 text-white self-end ml-auto mr-10"   // ✅ More shifted to right
                : "bg-gray-200 text-gray-800 self-start ml-10"       // ✅ More shifted to left
            }`}
          >
            {msg.chatstr}
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
