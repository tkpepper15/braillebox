'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './navbar'; // Ensure the path is correct
import './global.css'; // Ensure the path is correct
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
    <div className="relative text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className={`flex flex-col justify-center pt-12 px-6 lg:px-12 ${isLoaded ? 'animate-loaded' : ''}`}>
        <section className="mt-16 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-4xl font-bold staggered-element leading-tight">
            <span className="orange">Brailliant</span>ly Empowering Low-Vision Individuals
          </h1>
          <p className="text-lg mt-6 staggered-element">
            We&apos;ve built an AI-powered, <span className="underline">affordable braille display</span> for the visually impaired.
          </p>
        </section>

        {/* Product Image */}
        <div className="flex justify-center mt-16 staggered-element">
          <img
            src="/braillebox_topdown.png"
            alt="BrailleBox TopDown"
            className="h-auto w-full max-w-2xl rounded-lg shadow-lg"
          />
        </div>

        <div className="flex justify-center mt-8 staggered-element">
          <a
            href="https://richard-shan.github.io/conrad/#video"
            className="custom-link mt-8 px-8 py-4 inline-block text-lg font-semibold rounded-md staggered-element custom-hover"
            target="_blank"
            style={{ maxWidth: '18rem', textAlign: 'center' }}
            rel="noopener noreferrer"
          >
            See Brailliant in Action
          </a>
        </div>

        {/* How It Works Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto staggered-element">
          <h2 className="text-3xl font-semibold mb-4">How Brailliant Works</h2>
          <p className="text-lg">
            <span className="bold">Extract</span> Text → <span className="bold">Map</span> Text to Braille → <span className="bold">Display</span> on a <span className="underline">3x2 Solenoid Array</span>
          </p>
        </section>

        {/* Statistics Section */}
        <section className="mt-20 text-center max-w-4xl mx-auto staggered-element">
          <h2 className="text-3xl font-semibold mb-4">Performance without a Cost</h2>
          <p className="text-lg">
          Brailliant utilizes a <span className="underline">nimble compute package</span> with state of the art capabilities.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Brailliant
      </footer>
    </div>
  );
};

// Animation for a bouncing arrow
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
