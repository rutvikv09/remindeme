import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 lg:p-6 bg-slate-50/90 border-separate backdrop-blur-sm dark:bg-gray-800/90 border-b z-50">
      <a href="/" className="flex items-center space-x-2">
        <span role="img" aria-label="alarm" className="text-3xl">⏰</span>
        <div className="text-2xl font-bold text-blue-600">RemindMe</div>
      </a>
      <nav className="flex space-x-4">
        <Link to="/login" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300">Login</Link>
        <Link to="/signup" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
