import React, { useState, useEffect } from 'react';

const TaskerButton = () => {
  const [area, setArea] = useState('');
  const [category, setCategory] = useState('');
  const [hourlyRate, setHourlyRate] = useState(0);

  const nairobiAreas = ['Westlands', 'Kilimani', 'Karen', 'Langata', 'Lavington'];
  const houseworkCategories = ['Cleaning', 'Laundry', 'Gardening', 'Cooking', 'Pet Care'];

  const categoryRates = {
    'Cleaning': 250,
    'Laundry': 200,
    'Gardening': 300,
    'Cooking': 350,
    'Pet Care': 150,
  };

  useEffect(() => {
    setHourlyRate(categoryRates[category] || 0);
  }, [category]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Earn Money Your Way</h2>
        <p className="text-gray-600">See how much you can make tasking on TaskRabbit</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Your Area in Nairobi</label>
        <select 
          value={area} 
          onChange={(e) => setArea(e.target.value)} 
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all">
          <option value="">Select Area</option>
          {nairobiAreas.map((area) => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Choose a Housework Category</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all">
          <option value="">Select Category</option>
          {houseworkCategories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">{hourlyRate} Ksh per hour</h2>
      </div>

      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors">
        Get Started
      </button>

      <div className="text-center text-sm text-gray-600">
        Already have an account? <a href="#" className="text-purple-600 hover:text-purple-700">Sign in</a>
      </div>
    </div>
  );
};

export default TaskerButton;