import React, { useState } from 'react';
import { FaChair, FaWrench, FaTruck, FaBroom, FaLeaf, FaPaintBrush, FaFire } from 'react-icons/fa';
import AuthModal from './AuthModal';
import TaskerButton from './TaskerButton';
import Header from './Navbar/NavHeader';

export default function JobsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskerModalOpen, setIsTaskerModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    {
      name: 'Mounting',
      icon: <FaWrench size={30} />, 
      subcategories: [
        'TV Mounting',
        'Shelf Mounting',
        'Picture Mounting',
        'Mirror Mounting',
        'Curtain Rod Mounting',
      ],
    },
    {
      name: 'Moving',
      icon: <FaTruck size={30} />, 
      subcategories: [
        'Furniture Moving',
        'Appliance Moving',
        'Box Moving',
        'Small Moves',
        'In-Home Moving',
      ],
    },
    {
      name: 'Cleaning',
      icon: <FaBroom size={30} />, 
      subcategories: [
        'General House Cleaning',
        'Deep Cleaning',
        'Move-In/Move-Out Cleaning',
        'Window Cleaning',
        'Carpet Cleaning',
      ],
    },
    {
      name: 'Outdoor Help',
      icon: <FaLeaf size={30} />, 
      subcategories: [
        'Gardening',
        'Lawn Care',
        'Yard Cleanup',
        'Gutter Cleaning',
        'Patio Cleaning',
      ],
    },
    {
      name: 'Home Repairs',
      icon: <FaWrench size={30} />, 
      subcategories: [
        'Minor Plumbing Repairs',
        'Minor Electrical Repairs',
        'Drywall Repair',
        'Door Repair',
        'Fixture Installation',
      ],
    },
    {
      name: 'Painting',
      icon: <FaPaintBrush size={30} />, 
      subcategories: [
        'Interior Painting',
        'Exterior Painting',
        'Touch-Up Painting',
        'Cabinet Painting',
        'Fence Painting',
      ],
    },
    {
      name: 'Trending',
      icon: <FaFire size={30} />, 
      subcategories: [
        'Smart Home Setup',
        'Tech Support',
        'Personal Organization',
        'Event Setup',
        'Holiday Decorating',
      ],
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Navbar */}
      <Header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 border-b border-gray-200 z-50" />

      {/* Categories Section */}
      <div className="pt-28 bg-white shadow-md py-6">
        <div className="container mx-auto flex flex-col items-center mt-6">
          <div className="flex items-center space-x-4 overflow-x-auto whitespace-nowrap">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                <span className="text-sm text-gray-700 mb-1">
                  <div className="p-3 rounded-full backdrop-blur-md bg-white/30 border border-gray-200">
                    {category.icon}
                  </div>
                </span>
                <span className="text-sm font-semibold text-gray-700">{category.name}</span>
              </div>
            ))}
          </div>
          {/* Subcategories for the selected category */}
          {selectedCategory && selectedCategory.subcategories.length > 0 && (
            <div className="flex space-x-2 mt-4 overflow-x-auto whitespace-nowrap">
              {selectedCategory.subcategories.map((subcategory) => (
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

      {/* Tasker Modal */}
      {isTaskerModalOpen && <TaskerButton onClose={() => setIsTaskerModalOpen(false)} />} 
    </div>
  );
}
