import React, { useEffect , useRef, useState } from "react";
import { Navbar, NavbarBrand, ListGroup, ListGroupItem } from "flowbite-react";
import { MoreVertical } from "lucide-react";
import FrontPageSidebar from "../Components/FrontPageSidebar";
import axios from "axios"; // ✅ for making API calls
import { useParams } from 'react-router-dom';
import { formatChatTime } from "../Functions";


function FrontPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarPosition, setSidebarPosition] = useState({ top: 0, right: 0 }); // ✅ added
  
  const buttonRef = useRef(null); // ✅ added
  //console.log(useParams().id);
  const user_id = useParams().id // obtain user id from this page ex : http://localhost:5173/FrontPage/1  1 is id here

  // You can now use user_id to make backend requests
  console.log("User ID from URL:", user_id);

  const toggleSidebar = () => {
    if (!sidebarOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setSidebarPosition({
        top: rect.bottom + 6, // add some spacing below the button
        right: window.innerWidth - rect.right,
      });
    }
    setSidebarOpen(!sidebarOpen);
  };

  // ✅ Add this useEffect to fetch contacts from backend
useEffect(() => {
  const fetchContacts = async () => {
    try {
      // Replace with actual logic to get user identifier (email or ID)

      const response = await axios.get(`http://localhost:3000/api/FrontPage/${user_id}`);
      console.log(response.data.chats);
      console.log(response.data.chats[0].timing);
      setContacts(response.data.chats);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };

  fetchContacts();
}, []);


// ✅ With this state to hold contacts
const [contacts, setContacts] = useState([]);
const [selectedAvatar, setSelectedAvatar] = useState(null); // ✅ ADDED: State to control avatar modal


  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar className="shadow-md w-full z-50 bg-white">
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Whatsapp
          </span>
        </NavbarBrand>
        <div className="ml-auto flex items-center">
          <button
            ref={buttonRef} // ✅ set ref
            onClick={toggleSidebar}
            className="group h-10 w-10 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-label="Open menu"
          >
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-transparent transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-700">
              <MoreVertical className="h-6 w-6 text-gray-700 dark:text-white" />
            </div>
          </button>
        </div>
      </Navbar>

      {/* ✅ Pass top/right values */}
      {sidebarOpen && (
        <FrontPageSidebar
          isOpen={sidebarOpen}
          onClose={toggleSidebar}
          position={sidebarPosition}
        />
      )}

      {/* ✅ ADDED: Avatar modal display */}
      {selectedAvatar && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg relative">
            <button
              onClick={() => setSelectedAvatar(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            <div className="h-64 w-64 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 text-6xl font-bold text-gray-700">
              {selectedAvatar}
            </div>
          </div>
        </div>
      )}


      <div className="flex-1 overflow-y-auto">
        <ListGroup className="w-full rounded-none">
          {contacts.map((contact) => (
            <ListGroupItem 
              key={contact.contact_id} 
              className="w-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer" // ✅ gray bg + hover effect
              onClick={() => {
                window.location.href = `/PersonalPage/${user_id}/${contact.contact_id}`;
              }}
            >
              <div className="flex items-center gap-3 w-full">
                
                {/* ✅ Clickable Avatar */}
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ Prevent outer click
                    setSelectedAvatar(contact.other_user_name.charAt(0).toUpperCase());
                  }}
                  className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg overflow-hidden cursor-pointer"
                >
                  {contact.other_user_name.charAt(0).toUpperCase()}
                </div>

                {/* ✅ Text Section */}
                  <div className="flex-grow flex flex-col min-w-0">  {/* ✅ min-w-0 FIXED */}
                    <div className="flex justify-between items-center w-full">
                      {/* Name on Left */}
                      <div className="font-semibold text-gray-900 dark:text-white truncate">
                        {contact.other_user_name}
                      </div>

                      {/* Time on Right */}
                      <div className="text-xs text-gray-500 ml-4 whitespace-nowrap">
                        {formatChatTime(contact.timing)}
                      </div>
                    </div>

                    {/* Last Message */}
                    <div className="text-sm text-gray-500 truncate text-left w-full">
                      {contact.prefix + contact.chatstr}
                    </div>
                  </div>

              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>

    </div>
  );
}

export default FrontPage;
