"use client";

import React from "react";
import Image from "next/image";
import { FaBook, FaEnvelope } from 'react-icons/fa';
import './global.css';

const Footer = () => {
  return (
    <footer className="bg-stone-950/70 border-t border-stone-900 mt-16">
      {/* Backers Section */}
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-4">Backed By</p>
          <div className="max-w-lg mx-auto mb-8">
            <Image
              src="/backers.png"
              alt="Project Backers"
              width={800}
              height={200}
              className="w-full object-contain"
              priority
            />
          </div>
          
          {/* News Link */}
          <a 
            href="https://www.ncssm.edu/news/alumni-established-endowment-funds-independent-student-research-at-ncssm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800/30 hover:bg-stone-800/50 
              backdrop-blur-sm border border-stone-800/50 rounded-full transition-all duration-300
              text-gray-400 hover:text-[#d4843e] mb-12"
          >
            <span className="text-sm">Read about us @NCSSM News</span>
            <div className="size-2 rounded-full bg-[#d4843e] animate-pulse" />
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-6 border-t border-stone-900">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gray-400">© 2025 Brailliant. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="/docs" className="text-gray-400 hover:text-[#d4843e] transition-colors flex items-center gap-2">
              <FaBook className="size-4" />
              Docs
            </a>
            <a href="/contact" className="text-gray-400 hover:text-[#d4843e] transition-colors flex items-center gap-2">
              <FaEnvelope className="size-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;