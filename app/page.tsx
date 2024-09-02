"use client"
import React, { useEffect, useState } from 'react';
import Navbar from './navbar';  // Ensure the path is correct
import './global.css';  // Ensure the path is correct

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial call to set initial state
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <Navbar />
        <main className="flex flex-col items-center justify-start pt-16 px-6 lg:px-0 text-white">
          <section className="mt-40 text-center max-w-4xl mx-auto mb-8">
            <h1 className="mb-4 text-4xl font-bold">Let&apos;s Empower Low-Vision Individuals</h1>
            <p className="text-lg">
            This $77 device allows individuals with visual impairments to access physical text, books, and scenes effortlessly.
            </p>
          </section>
          <div className="flex items-center">
          <img
            src="/braillebox_topdown.png"
            alt="BrailleBox_TopDown"
            className="h-40 w-auto mb-4"
          />
          </div>
          <div className="flex items-center">
          <img
            src="/braille.png"
            alt="BrailleBox"
            className="h-10 w-auto mb-4"
          />
          </div>
          <a
            href="https://richard-shan.github.io/conrad/#video"
            className="custom-link flex items-center justify-start"
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifyContent: 'flex-start' }} // Align contents to the left
          >
            <h2 className="mb-2 text-2xl font-semibold">See BrailleBox in Action</h2>
            <p className="text-sm">
            Extract Text → Map Text to Braille → Display Braille</p>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
