import React from "react";

function FrontPageSidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-[55] transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Sidebar Panel */}
      <div
        className={`fixed right-0 top-0 w-64 bg-white shadow-lg p-4 z-[60] rounded-bl-2xl rounded-tl-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ height: "100vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Sidebar Menu</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:underline block p-2 rounded">
              New Group
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:underline block p-2 rounded">
              New Broadcast
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:underline block p-2 rounded">
              Linked Devices
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:underline block p-2 rounded">
              Starred Messages
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-600 hover:underline block p-2 rounded">
              Settings
            </a>
          </li>
        </ul>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close menu"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default FrontPageSidebar;
