import React from "react";

function FrontPageSidebar({ isOpen, onClose, position }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[55]"
      onClick={onClose}
    >
      <div
        className="absolute z-[60] w-52 bg-white rounded-xl shadow-lg animate-slide-down"
        style={{ top: position.top, right: position.right }}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="py-2">
          <li className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 cursor-pointer">New Group</li>
          <li className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 cursor-pointer">New Broadcast</li>
          <li className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 cursor-pointer">Linked Devices</li>
          <li className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 cursor-pointer">Starred Messages</li>
          <li className="px-4 py-2 text-gray-800 font-medium hover:bg-gray-100 cursor-pointer">Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default FrontPageSidebar;
