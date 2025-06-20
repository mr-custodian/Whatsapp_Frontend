import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand } from "flowbite-react";
import { ArrowLeft } from "lucide-react";

function NewContactPage() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobile.trim()) {
      alert("Please enter a mobile number.");
      return;
    }

    // 👉 Later: Save or send the number to backend or state
    alert(`Contact added: ${mobile}`);
    setMobile("");
  };

  return (
    <div className="flex flex-col min-h-screen w-screen">
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

          <span className="text-xl font-semibold dark:text-white">Add Contact</span>
        </NavbarBrand>
      </Navbar>

      {/* ✅ Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-6 gap-4 w-full max-w-md mx-auto mt-10"
      >
        <label className="text-gray-800 font-medium">Mobile Number</label>
        <input
          type="tel"
          pattern="[0-9]{10}"
          placeholder="Enter 10-digit mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default NewContactPage;
