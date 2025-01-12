'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './navbar'; // Ensure the path is correct
import Footer from './footer'
import './global.css'; // Ensure the path is correct
import { keyframes } from '@emotion/react';
import styled from "@emotion/styled";
import { 
  FaArrowDown,
  FaBraille,
  FaCamera,
  FaCogs,
  FaGraduationCap,
  FaMicrochip,
  FaMoneyBillWave,
  FaServer,
  FaUsers
} from "react-icons/fa";

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

  const scrollToVideo = () => {
    const videoSection = document.getElementById('project-video');
    videoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className={`flex flex-col justify-center ${isLoaded ? 'animate-loaded' : ''}`}>
        <section className="pt-24 pb-8 px-4 bg-stone-950">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold staggered-element leading-tight mb-8">
              <span className="orange">Brailliant</span>ly Empowering<br />Low-Vision Individuals
            </h1>
            <p className="text-xl text-gray-400 mt-8 staggered-element max-w-2xl mx-auto">
              We&apos;ve built an AI-powered, <span className="orange">affordable braille display</span> for the visually impaired.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-16 px-4 staggered-element">
            <img
              src="/braillebox_topdown.png"
              alt="BrailleBox TopDown"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex justify-center mt-16">
            <button
              onClick={scrollToVideo}
              className="flex items-center space-x-3 px-8 py-4 bg-stone-900 text-[#d4843e] 
              rounded-lg hover:bg-[#d4843e] hover:text-white transition-all duration-300 
              shadow-lg border border-[#d4843e] group"
            >
              <span className="text-lg font-medium tracking-wide">Product Demo</span>
              <BouncingArrow className="h-5 w-5 group-hover:text-white" />
            </button>
          </div>
        </section>

        <section id="project-video" className="py-16 bg-stone-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                See <span className="orange">Brailliant</span> in Action
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Watch our complete project walkthrough and demonstration
              </p>
            </div>
            
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/St28xhM159o"
                  title="Brailliant Project Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-950">
          <div className="max-w-6xl mx-auto px-4 staggered-element">
            <div className="max-w-6xl mx-auto staggered-element">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Why Brailliant Matters
                </h2>
                <p className="text-lg text-gray-400">
                  Bridging the accessibility gap in Braille technology
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Market Size Card */}
                <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-stone-800">
                  <div className="space-y-4">
                    <h3 className="text-[#d4843e] text-5xl font-bold">7M+</h3>
                    <p className="text-white text-xl font-semibold">Americans</p>
                    <p className="text-gray-400">are living with low vision or blindness</p>
                  </div>
                </div>

                {/* Growth Card */}
                <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-stone-800">
                  <div className="space-y-4">
                    <h3 className="text-[#d4843e] text-5xl font-bold">130K</h3>
                    <p className="text-white text-xl font-semibold">New Learners</p>
                    <p className="text-gray-400">Americans learning Braille annually</p>
                  </div>
                </div>

                {/* Market Gap Card */}
                <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-stone-800">
                  <div className="space-y-4">
                    <h3 className="text-[#d4843e] text-5xl font-bold">$3.5-15K</h3>
                    <p className="text-white text-xl font-semibold">Price Barrier</p>
                    <p className="text-gray-400">Current Braille displays can cost up to $15,000</p>
                  </div>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="mt-16 text-center bg-stone-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-stone-800 transition-all duration-300">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Making Braille <span className="orange">Accessible</span></h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    The American Foundation for the Blind found that existing Braille displays range from
                    $3,500 to $15,000, making them inaccessible to many who need them. Brailliant is different.
                  </p>
                  <div className="flex justify-center gap-12 mt-8">
                    <div className="text-center">
                      <p className="text-[#d4843e] text-3xl font-bold">$77</p>
                      <p className="text-sm text-gray-400 mt-1">Build Cost</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#d4843e] text-3xl font-bold">$300</p>
                      <p className="text-sm text-gray-400 mt-1">Retail Price</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-stone-950">
          <div className="max-w-6xl mx-auto px-4 staggered-element">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                3 Step Process
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                A seamless process of converting text to tactile braille output
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-stone-800 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <FaCamera className="text-[#d4843e] text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 orange text-center">Extract</h3>
                <p className="text-gray-400">
                  The ESP32CAM captures text images and uses advanced OCR technology to extract text content with high accuracy
                </p>
              </div>

              <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-stone-800 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <FaServer className="text-[#d4843e] text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 orange text-center">Process</h3>
                <p className="text-gray-400">
                  Text is wirelessly transmitted to the Raspberry Pi, which maps each character to its corresponding braille pattern
                </p>
              </div>

              <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-stone-800 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <FaBraille className="text-[#d4843e] text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 orange text-center">Display</h3>
                <p className="text-gray-400">
                  A 3x2 solenoid array physically displays each braille character, controlled by precise MOSFET circuitry
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img
                src="/tech_overview.png"
                alt="Technical Overview"
                className="w-full max-w-5xl mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-stone-950">
          <div className="max-w-6xl mx-auto px-4 staggered-element">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Technical Specs
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technology in a compact, efficient package
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-stone-800 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <FaCogs className="text-[#d4843e] text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4 orange text-center">Smart Hardware Integration</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Raspberry Pi central controller for robust processing</li>
                  <li>• ESP32CAM for wireless image capture and transmission</li>
                  <li>• Custom PCB with ATTiny1614 microcontroller</li>
                  <li>• IRF520 MOSFET-driven solenoid array</li>
                </ul>
              </div>

              <div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-lg hover:bg-stone-800 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <FaMicrochip className="text-[#d4843e] text-4xl" />
                </div>
                <h3 className="text-xl font-semibold mb-4 orange text-center">Advanced Software Stack</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• GPT4o multimodal capabilities for enhanced OCR</li>
                  <li>• WebSocket-based wireless communication</li>
                  <li>• Real-time text to braille conversion</li>
                  <li>• Optimized power management system</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <a 
                href="/docs"
                className="flex items-center space-x-3 px-8 py-4 bg-stone-900 text-[#d4843e] 
                rounded-lg hover:bg-[#d4843e] hover:text-white transition-all duration-300 
                shadow-lg border border-[#d4843e] group"
              >
                <span className="text-lg font-medium tracking-wide">Complete Walk-Through</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
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
