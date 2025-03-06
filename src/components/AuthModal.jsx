// src/components/AuthModal.jsx
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage.jsx';

export default function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('fixed')) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          X
        </button>
        {isLogin ? <LoginPage /> : <SignupPage />}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-sm text-blue-600 hover:text-blue-800"
        >
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
}