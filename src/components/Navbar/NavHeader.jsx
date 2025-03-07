import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskerModalOpen, setIsTaskerModalOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button onClick={() => window.location.href = '/'} className="text-2xl font-bold text-blue-600 mr-4">
          KaziMore
        </button>
        <div className="relative flex items-center">
          <input type="text" placeholder="Search" className="border rounded-full py-2 px-4 w-64 focus:outline-none focus:ring focus:border-blue-300" />
          <FaSearch className="absolute right-3 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full text-sm"
        >
          Login
        </button>
        <button
          onClick={() => setIsTaskerModalOpen(true)}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm"
        >
          Become a Tasker
        </button>
      </div>
    </nav>
  );
}

export default Header;