import React from "react";
import { Navbar, NavbarBrand, ListGroup, ListGroupItem } from "flowbite-react";
import { useState } from "react";
import { MoreVertical } from "lucide-react";
import FrontPageSidebar from "../Components/FrontPageSidebar" // Adjust path if necessary


function FrontPage() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const contacts = [
    { id: 1, name: "Alice", lastMsg: "Hey there!", time: "10:30 AM" },
    { id: 2, name: "Bob", lastMsg: "Let's meet tomorrow.", time: "Yesterday" },
    { id: 3, name: "Charlie", lastMsg: "See you at the usual spot.", time: "Mon" },
    { id: 4, name: "David", lastMsg: "Don't forget the meeting!", time: "9:15 AM" },
    { id: 5, name: "Eve", lastMsg: "Got it, thanks!", time: "Tue" },
    { id: 6, name: "Frank", lastMsg: "Running late...", time: "Wed" },
    { id: 7, name: "Grace", lastMsg: "Call me when you're free.", time: "Thu" },
    { id: 8, name: "Heidi", lastMsg: "Happy birthday!", time: "Fri" },
    { id: 9, name: "Ivan", lastMsg: "What's up?", time: "2:00 PM" },
    { id: 10, name: "Judy", lastMsg: "See ya!", time: "11:45 AM" },
    { id: 11, name: "Karl", lastMsg: "Great work!", time: "Sat" },
    { id: 12, name: "Laura", lastMsg: "On my way.", time: "Sun" },
    { id: 13, name: "Mike", lastMsg: "Got your message.", time: "8:00 AM" },
    { id: 14, name: "Nancy", lastMsg: "Thinking of you.", time: "3:30 PM" },
    { id: 15, name: "Oscar", lastMsg: "Reply soon.", time: "Yesterday" },
    { id: 16, name: "Penny", lastMsg: "Confirmed!", time: "Mon" },
    { id: 17, name: "Quinn", lastMsg: "Let's catch up.", time: "Tue" },
    { id: 18, name: "Rachel", lastMsg: "Sounds good.", time: "Wed" },
    { id: 19, name: "Steve", lastMsg: "Almost there.", time: "Thu" },
    { id: 20, name: "Tina", lastMsg: "Thanks a lot!", time: "Fri" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-screen">
      {/* Navbar takes only its required height */}
      <Navbar className="shadow-md  w-full z-50 bg-white">
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Whatsapp
          </span>
      </NavbarBrand>
      <div className="ml-auto flex items-center">
        <button
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

      {sidebarOpen && <FrontPageSidebar isOpen={sidebarOpen} onClose={toggleSidebar} />}

      {/* This section takes up the remaining vertical space */}
      <div className="flex-1 overflow-y-auto">
        <ListGroup className="w-full rounded-none">
          {contacts.map((contact) => (
            <ListGroupItem key={contact.id} href="#" className="w-full">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg overflow-hidden">
                  {contact.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-grow">
                  <div className="font-semibold text-gray-900">{contact.name}</div>
                  <div className="text-sm text-gray-600 truncate">{contact.lastMsg}</div>
                </div>
                <div className="text-xs text-gray-500 self-start mt-1">{contact.time}</div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default FrontPage;
