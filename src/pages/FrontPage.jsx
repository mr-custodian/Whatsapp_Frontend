import React, { useRef, useState } from "react";
import { Navbar, NavbarBrand, ListGroup, ListGroupItem } from "flowbite-react";
import { MoreVertical } from "lucide-react";
import FrontPageSidebar from "../Components/FrontPageSidebar";

function FrontPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarPosition, setSidebarPosition] = useState({ top: 0, right: 0 }); // ✅ added
  const buttonRef = useRef(null); // ✅ added

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

  const contacts = [
    { id: 1, name: "Alice", lastMsg: "Hey there!", time: "10:30 AM" },
    { id: 2, name: "Bob", lastMsg: "Let's meet tomorrow.", time: "Yesterday" },
    // ... rest of the contacts
  ];

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
