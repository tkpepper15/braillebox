'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './navbar';  // Ensure the path is correct
import './global.css';  // Ensure the path is correct
import { keyframes } from '@emotion/react';
import styled from "@emotion/styled";
import { FaArrowDown } from "react-icons/fa";

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial call to set initial state
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Simulate loading
    setTimeout(() => setIsLoaded(true), 500);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {/* Overlay content */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center z-10 ${isLoaded ? 'animate-loaded' : ''}`}>
        <Navbar />
        <main className="flex flex-col items-center justify-start pt-24 px-6 lg:px-0 text-white">
          <section className="mt-40 text-center max-w-4xl mx-auto mb-8">
            <h1 className="mb-4 text-4xl font-bold staggered-element"><a className="orange">Brailliant</a>ly Empowering Low-Vision Individuals</h1>
            <p className="text-lg staggered-element">
              An AI powered low-cost display built for the visually impaired, not Big Health.
            </p>
          </section>
          <div className="flex items-center staggered-element">
            <img
              src="/braillebox_topdown.png"
              alt="BrailleBox_TopDown"
              className="h-auto w-full max-w-xl mb-4" // Maintain aspect ratio and set max width
            />
          </div>
          <a
            href="https://richard-shan.github.io/conrad/#video"
            className="custom-link flex items-center justify-start staggered-element custom-hover"
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifyContent: 'flex-start' }} // Align contents to the left
          >
            <h2 className="mb-2 text-2xl font-semibold">See Brailliant in Action</h2>
            
            <p className="text-sm">
              Extract Text → Map Text to Braille → Display on Solenoid
            </p>
          </a>
        </main>
      </div>
    </div>
  );
};

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const BouncingArrow = styled(FaArrowDown)`
  animation: ${bounce} 2s infinite;
`;


export default Home;
