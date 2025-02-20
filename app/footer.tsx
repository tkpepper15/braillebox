"use client";

import React from "react";
import Image from "next/image";
import './global.css';

const Footer = () => {
  return (
    <footer className="mt-20 py-6 text-center text-sm text-gray-500">

      {/* Backers Section */}
      <div className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-400 mb-6">Backed By</p>
          <div className="max-w-xl mx-auto">
            <Image
              src="/backers.png"
              alt="Project Backers"
              width={800}
              height={200}
              className="w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* News Link Button */}
        <div className="flex justify-center mt-6 mb-8">
          <a 
            href="https://www.ncssm.edu/news/alumni-established-endowment-funds-independent-student-research-at-ncssm"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 bg-stone-800/30 hover:bg-stone-800/50 
              backdrop-blur-sm border border-stone-800/50 rounded-full transition-all duration-300
              text-gray-400 hover:text-[#d4843e]"
          >
            <span className="text-sm">Read about us on NCSSM News</span>
            <div className="size-2 rounded-full bg-[#d4843e] animate-pulse" />
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <p>© {new Date().getFullYear()} Brailliant</p>
    </footer>
  );
};

export default Footer;