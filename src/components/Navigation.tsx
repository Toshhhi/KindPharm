import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { HeartPulse, LogOutIcon } from 'lucide-react';

export const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/dashboard" className="flex items-center group">
              <div className="relative">
                <HeartPulse className="h-8 w-8 text-pink-600 transform group-hover:scale-110 transition-transform duration-200" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-purple-400 rounded-full animate-pulse" />
              </div>
              <div className="ml-2">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Kind
                </span>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Pharm
                </span>
              </div>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/molecular-bioactivity"
                className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200"
              >
                Molecular Bioactivity
              </Link>
              <Link
                to="/past-results"
                className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200"
              >
                Past Results
              </Link>
              <Link
                to="/collaborate"
                className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200"
              >
                Collaborate
              </Link>
              <Link
                to="/patent-filing"
                className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200"
              >
                Patent Filing
              </Link>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-purple-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <LogOutIcon className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};