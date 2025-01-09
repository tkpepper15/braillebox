"use client";

import React from "react";
import './global.css';

const Footer = () => {
  return (
    <footer className="mt-20 py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Brailliant
    </footer>
  );
};

export default Footer;
