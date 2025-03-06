// src/components/JobsPage.jsx
import React, { useState } from 'react';
import { FaSearch, FaChair, FaWrench, FaTruck, FaBroom, FaLeaf, FaPaintBrush, FaFire } from 'react-icons/fa';
import AuthModal from './AuthModal';

export default function JobsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    {
      name: 'Assembly',
      icon: <FaChair size={30} />,
      subcategories: [
        'General Furniture Assembly',
        'IKEA Assembly',
        'Crib Assembly',
        'PAX Assembly',
        'Bookshelf Assembly',
        'Desk Assembly',
      ],
    },
    { name: 'Mounting', icon: <FaWrench size={30} />, subcategories: [] },
    { name: 'Moving', icon: <FaTruck size={30} />, subcategories: [] },
    { name: 'Cleaning', icon: <FaBroom size={30} />, subcategories: [] },
    { name: 'Outdoor Help', icon: <FaLeaf size={30} />, subcategories: [] },
    { name: 'Home Repairs', icon: <FaWrench size={30} />, subcategories: [] },
    { name: 'Painting', icon: <FaPaintBrush size={30} />, subcategories: [] },
    { name: 'Trending', icon: <FaFire size={30} />, subcategories: [] },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo192.png" alt="Logo" className="h-10 w-10 mr-3" />
          <span className="font-semibold text-lg text-gray-800">Home</span>
          <span className="ml-4 text-gray-600">House-Work</span>
        </div>
        <div className="flex items-center flex-grow justify-center">
          <div className="relative w-1/2 md:w-1/3">
            <input
              type="text"
              placeholder="Search jobs..."
              className="pl-10 pr-4 py-2 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
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
            onClick={() => setIsModalOpen(true)}
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm"
          >
            Become a Tasker
          </button>
        </div>
      </nav>

      {/* Categories and Subcategories Section */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap">
            {categories.map((category) => (
              <div key={category.name} className="flex flex-col items-center">
                <span className="text-sm text-gray-700 mb-1">
                  <div className="p-3 rounded-full backdrop-blur-md bg-white/30 border border-gray-200">
                    {category.icon}
                  </div>
                </span>
                <span className="text-sm font-semibold text-gray-700">{category.name}</span>
              </div>
            ))}
          </div>
          {/* Subcategories for the first category (Assembly) */}
          {categories[0].subcategories.length > 0 && (
            <div className="flex space-x-2 mt-4 overflow-x-auto whitespace-nowrap">
              {categories[0].subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 py-1 px-3 rounded-full"
                >
                  {subcategory}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Auth Modal */}
      {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}