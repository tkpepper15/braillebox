"use client";

import Image from 'next/image';
import React, { useState } from "react";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="navbar-container">
      {/* Logo and Brand */}
      <div className="navbar-logo">
        <a href="/" className="navbar-brand">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={24}
            height={24}
            className="logo-image"
          />
          <span className="brand-name">Brailliant</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <a href="/docs" className="nav-link">
          Docs
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        className="mobile-menu-toggle md:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <svg
          className="menu-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isOpen ? "block" : "hidden"} md:hidden`}
      >
        <nav className="mobile-nav">
        <a href="/docs" className="nav-link">
            Docs
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
