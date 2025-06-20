import { Navbar, NavbarBrand } from "flowbite-react";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import FrontPageSidebar from "./FrontPageSidebar"; // Adjust path if necessary

function tmp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar fluid rounded className="shadow-md fixed top-0 w-full z-50 bg-white">
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Whatsapp
          </span>
        </NavbarBrand>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-label="Open menu"
          >
            <MoreVertical className="h-6 w-6 text-gray-700 dark:text-white" />
          </button>
        </div>
      </Navbar>

      {sidebarOpen && <FrontPageSidebar isOpen={sidebarOpen} onClose={toggleSidebar} />}
    </>
  );
}

export default tmp;