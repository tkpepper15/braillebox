'use client';

import Image from 'next/image';
import React from 'react';
import { keyframes } from '@emotion/react';
import styled from "@emotion/styled";
import { 
  FaArrowDown,
  FaBraille,
  FaCamera,
  FaCogs,
  FaGraduationCap,
  FaMicrochip,
  FaServer,
  FaUsers,
} from "react-icons/fa";
import logo from '../public/logo.svg';

import Footer from './footer';
import Navbar from './navbar';
import './global.css';

// Types
interface SectionProps {
  children: React.ReactNode;
  id?: string;
}

interface RandomValue {
  delay: number;
  opacity: number;
}

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
`;

const glowAnimation = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 2px #d4843e);
  }
  50% {
    filter: drop-shadow(0 0 8px #d4843e);
  }
`;

// Styled Components
const HeroContent = styled.div`
  animation: ${fadeIn} 1s ease-out forwards;
`;

const BouncingArrow = styled(FaArrowDown)`
  animation: ${bounce} 2s infinite;
`;

// Section Component
const Section: React.FC<SectionProps> = ({ children, id }) => (
  <section id={id} className="py-24 bg-stone-950">
    {children}
  </section>
);

// Add this at the top of the file, outside the component
const generateRandomValues = (count: number): RandomValue[] => {
  const values = [];
  for (let i = 0; i < count; i++) {
    values.push({
      delay: Math.floor(Math.random() * 2000),
      opacity: Math.max(0.15, 1 - Math.floor(i / 6) * 0.15) * (0.8 + Math.random() * 0.4)
    });
  }
  return values;
};

// Main Component
const Home: React.FC = () => {
  const scrollToVideo = () => {
    document.getElementById('project-video')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Use React.useMemo to maintain stable values between renders
  const randomValues = React.useMemo(() => generateRandomValues(48), []);

  return (
    <div className="relative text-white min-h-screen bg-stone-950">
      <Navbar />

      <main className="flex flex-col justify-center">
        {/* Hero Section */}
        <Section>
          <div className="relative">
            {/* Animated Braille Display */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/50 to-stone-950" />
              {/* Frosted overlay */}
              <div className="absolute inset-0 backdrop-blur-[2px] bg-stone-950/10" />
              <div className="max-w-3xl mx-auto px-4 py-8 grid grid-cols-6 gap-4 justify-items-center">
                {[...Array(48)].map((_, i) => (
                  <div
                    key={i}
                    className={`size-6 rounded-full bg-[#d4843e]/30 border border-[#d4843e]/40
                      transition-all duration-700 hover:bg-[#d4843e] hover:scale-110
                      animate-pulse`}
                    style={{
                      animationDelay: `${randomValues[i]?.delay ?? 0}ms`,
                      animationDuration: '2s',
                      opacity: randomValues[i]?.opacity ?? 0.3
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Hero Content overlaying the animation */}
            <div className="absolute inset-0">
              <div className="max-w-6xl mt-12 mx-auto text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Putting Braille in <span className="orange">Reach</span>
                </h1>
                <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
                  An affordable braille display that converts text into tactile braille in real-time
                </p>
              </div>

              <div className="flex justify-center space-x-4 mt-12">
                <a
                  href="/preorder"
                  className="button-primary"
                >
                  Preorder
                </a>
                <button
                  onClick={scrollToVideo}
                  className="button-secondary flex items-center"
                >
                  Product Demo
                  <BouncingArrow className="ml-2 bouncing-arrow" />
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Video Section */}
        <Section id="project-video">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                See <span className="orange">Brailliant</span> in Action
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Watch our complete project pitch and demonstration
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/St28xhM159o"
                  title="Brailliant Project Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 size-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Why Brailliant Matters Section */}
        <Section>
          <div className="max-w-6xl mx-auto px-4 staggered-element">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Making Braille Technology <span className="orange">Affordable</span>
              </h2>
              <p className="text-xl text-gray-400">
                Transforming the market with accessible pricing
              </p>
            </div>

            <div className="text-center">
              <div className="max-w-5xl mx-auto px-4">
                <div className="bg-stone-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-stone-800/50">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    {/* Market Size Stat */}
                    <div className="bg-stone-900/50 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex flex-col items-center">
                        <div className="text-[#d4843e] opacity-20 mb-3">
                          <FaUsers className="size-20" />
                        </div>
                        <h3 className="text-[#d4843e] text-5xl font-bold mb-1">7M+</h3>
                        <p className="text-gray-400">Americans with vision impairment</p>
                      </div>
                    </div>

                    {/* New Learners Stat */}
                    <div className="bg-stone-900/50 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex flex-col items-center">
                        <div className="text-[#d4843e] opacity-20 mb-3">
                          <FaGraduationCap className="size-20" />
                        </div>
                        <h3 className="text-[#d4843e] text-5xl font-bold mb-1">130K</h3>
                        <p className="text-gray-400">New Braille learners per year in America</p>
                      </div>
                    </div>

                    {/* Price Comparison */}
                    <div className="bg-stone-900/50 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex flex-col items-center h-full">
                        {/* Current Market Range */}
                        <div className="flex flex-col items-center mb-6">
                          <span className="text-red-500 text-4xl font-bold">$3.5K - $15K</span>
                          <span className="text-gray-400 text-sm mt-1">Current Market Range</span>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-24 bg-stone-800 mb-6" />

                        {/* Bottom Grid */}
                        <div className="grid grid-cols-2 gap-4 w-full">
                          {/* Proposed Cost */}
                          <div className="flex flex-col items-center">
                            <span className="text-[#d4843e] text-3xl font-bold">$300</span>
                            <span className="text-gray-400 text-sm mt-1">Proposed Cost</span>
                          </div>

                          {/* Build Cost */}
                          <div className="flex flex-col items-center">
                            <span className="text-[#d4843e]/40 text-3xl font-bold">$77</span>
                            <span className="text-gray-400 text-sm mt-1">Build Cost</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Source Citation */}
                  <div className="text-center text-gray-400 text-sm">
                    Source: American Foundation for the Blind, 2023
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Process Section */}
        <Section>
          <div className="max-w-6xl mx-auto px-4 staggered-element">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Anyone. Anywhere. Anytime.
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                An intuitive process of converting text to tactile braille output
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-stone-800/30 backdrop-blur-sm p-10 rounded-xl transition-all duration-300 
                hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
                <div className="relative">
                  <span className="absolute -top-6 -left-6 text-4xl font-bold text-[#d4843e]/20">1</span>
                  <div className="flex items-center justify-center mb-8">
                    <FaCamera className="text-[#d4843e] text-5xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 orange text-center">Extract</h3>
                <p className="text-gray-400 text-lg">
                  The ESP32CAM captures text images and uses advanced OCR technology to extract text content with high accuracy
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-stone-800/30 backdrop-blur-sm p-10 rounded-xl transition-all duration-300 
                hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
                <div className="relative">
                  <span className="absolute -top-6 -left-6 text-4xl font-bold text-[#d4843e]/20">2</span>
                  <div className="flex items-center justify-center mb-8">
                    <FaServer className="text-[#d4843e] text-5xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 orange text-center">Process</h3>
                <p className="text-gray-400 text-lg">
                  Text is transmitted to the Raspberry Pi, which maps each character to its corresponding braille pattern
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-stone-800/30 backdrop-blur-sm p-10 rounded-xl transition-all duration-300 
                hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
                <div className="relative">
                  <span className="absolute -top-6 -left-6 text-4xl font-bold text-[#d4843e]/20">3</span>
                  <div className="flex items-center justify-center mb-8">
                    <FaBraille className="text-[#d4843e] text-5xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 orange text-center">Display</h3>
                <p className="text-gray-400 text-lg">
                  A 3x2 solenoid array physically displays each braille character, controlled by precise MOSFET circuitry
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Technical Specs Section */}
        <Section>
          <div className="max-w-6xl mx-auto px-4 staggered-element">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Under the Hood
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technology in a compact, efficient package
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-stone-800/30 backdrop-blur-sm p-10 rounded-xl transition-all duration-300 
                hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
                <div className="flex items-center justify-center mb-8">
                  <FaCogs className="text-[#d4843e] text-5xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-6 orange text-center">Smart Hardware Integration</h3>
                <ul className="space-y-4 text-gray-400 text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4843e]">•</span>
                    Raspberry Pi central controller for robust processing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4843e]">•</span>
                    ESP32CAM for wireless image capture &amp; transmission
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4843e]">•</span>
                    Custom PCB with ATTiny1614 microcontroller
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4843e]">•</span>
                    IRF520 MOSFET-driven solenoid array
                  </li>
                </ul>
              </div>

              <div className="bg-stone-800/30 backdrop-blur-sm p-10 rounded-xl transition-all duration-300 
                hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
                <div className="flex items-center justify-center mb-8">
                  <FaMicrochip className="text-[#d4843e] text-5xl" />
                </div>
                <h3 className="text-2xl font-semibold mb-6 orange text-center">Advanced Software Stack</h3>
                <ul className="space-y-4 text-gray-400 text-lg">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4843e]">•</span>
                    GPT4o&apos;s multimodal capabilities for enhanced OCR
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4843e]">•</span>
                    WebSocket-based wireless communication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4843e]">•</span>
                    Real-time text to braille conversion
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4843e]">•</span>
                    Optimized power management system
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>


      </main>

      <Footer />
    </div>
  );
};

export default Home;
