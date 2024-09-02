'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './navbar';  // Ensure the path is correct
import './global.css';  // Ensure the path is correct

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
        <main className="flex flex-col items-center justify-start pt-16 px-6 lg:px-0 text-white">
          <section className="mt-40 text-center max-w-4xl mx-auto mb-8">
            <h1 className="mb-4 text-4xl font-bold staggered-element">Let&apos;s Empower Low-Vision Individuals</h1>
            <p className="text-lg staggered-element">
              This <a className="orange">$77</a> device allows visually impaired individuals to look at the world effortlessly.
            </p>
          </section>
          <div className="flex items-center staggered-element">
            <img
              src="/braillebox_topdown.png"
              alt="BrailleBox_TopDown"
              className="h-60 w-auto mb-4"
            />
          </div>
          <div className="flex items-center staggered-element">
            <img
              src="/braille.png"
              alt="BrailleBox"
              className="h-10 w-auto mb-4"
            />
          </div>
          <a
            href="https://richard-shan.github.io/conrad/#video"
            className="custom-link flex items-center justify-start staggered-element"
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifyContent: 'flex-start' }} // Align contents to the left
          >
            <h2 className="mb-2 text-2xl font-semibold">See BrailleBox in Action</h2>
            <p className="text-sm">
              Extract Text → Map Text to Braille → Display Braille
            </p>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
