"use client";
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-10 bg-black bg-opacity-50 backdrop-blur-lg shadow-lg h-16 flex justify-between items-center px-6">
      <div className="flex items-center">
        {/* Only show the logo on desktop and not in mobile menu */}
        <a href="/" className={`flex items-center ${isOpen ? 'hidden' : 'block'}`}>
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-5 w-auto"
          />
        </a>
      </div>
      <div className="flex items-center space-x-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/learn" className="custom-link1">Learn</a>
          <a href="/contact" className="custom-link1">Contact</a>
          <a href="/join" className="custom-link1">Join</a>
          <a
            href="https://donorbox.org/youth-climate-initiative-yci-plugs-allen-30-an-orphan-oil-well-in-montana?t=updates#info"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-link1"
          >
            <span>Donate</span>
          </a>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button
          className={`custom-button ${isOpen ? 'custom-button-rotate' : 'md:hidden'}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`custom-menu ${isOpen ? 'show' : 'hidden'} md:hidden`}>
        <nav className="space-y-4">
          <a href="/learn" className="custom-link">Learn</a>
          <a href="/contact" className="custom-link">Contact</a>
          <a href="/join" className="custom-link">Join</a>
          <a
            href="https://donorbox.org/youth-climate-initiative-yci-plugs-allen-30-an-orphan-oil-well-in-montana?t=updates#info"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-link"
          >
            <span>Donate</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
