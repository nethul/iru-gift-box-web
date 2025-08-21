import React, { useState } from 'react';
import { Menu, X, Gift } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gift className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Iru Gift Box
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
              Home
            </a>
            <a href="#gifts" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Gifts
            </a>
            <a href="#about" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">
              Contact
            </a>
            {/* <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Sign In
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-purple-500 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md rounded-lg mt-2 p-4 border border-purple-500/20">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-purple-500 transition-colors duration-300 py-2">
                Home
              </a>
              <a href="#gifts" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
                Gifts
              </a>
              <a href="#about" className="text-gray-300 hover:text-pink-500 transition-colors duration-300 py-2">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-purple-500 transition-colors duration-300 py-2">
                Contact
              </a>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 mt-2">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;