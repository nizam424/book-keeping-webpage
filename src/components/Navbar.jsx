import React, { useState, useEffect } from "react";

// Navbar Component with mobile menu and search
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-600' : 'text-black'
            }`}>📊 QuickBooks</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`${
                  searchOpen ? 'w-64' : 'w-0'
                } transition-all duration-300 rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-600 hover:text-blue-600 ml-2"
              >
                🔍
              </button>
            </div>

            {/* Navigation Links with Hover Effects */}
            <a href="#features" className="nav-link group">
              Features
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
            </a>
            <a href="#testimonials" className="nav-link group">
              Testimonials
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
            </a>
            <a href="#contact" className="nav-link group">
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-blue-600"></span>
            </a>

            {/* Login/Signup Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-blue-600 hover:text-blue-700">Login</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="mobile-nav-link">Features</a>
            <a href="#testimonials" className="mobile-nav-link">Testimonials</a>
            <a href="#contact" className="mobile-nav-link">Contact</a>
            <button className="w-full text-left px-3 py-2 text-blue-600 hover:text-blue-700">
              Login
            </button>
            <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;