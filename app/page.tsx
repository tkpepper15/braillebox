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

// Styled Components
const HeroContent = styled.div`
  animation: ${fadeIn} 1s ease-out forwards;
`;

const BouncingArrow = styled(FaArrowDown)`
  animation: ${bounce} 2s infinite;
`;

// Section Component
const Section: React.FC<SectionProps> = ({ children, id }) => (
  <section id={id} className="py-16 bg-stone-950">
    {children}
  </section>
);

// Main Component
const Home: React.FC = () => {
  const scrollToVideo = () => {
    document.getElementById('project-video')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative text-white min-h-screen bg-stone-950">
      <head>
        <link rel="icon" href={logo} type="image/svg+xml" />
      </head>
      <Navbar />

      <main className="flex flex-col justify-center">
        {/* Hero Section */}
        <Section>
          <div className="max-w-6xl mt-12 mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Putting Braille in <span className="orange">Reach</span>
            </h1>
            <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
              An affordable braille display that converts text into tactile braille in real-time
            </p>
          </div>
          
          <div className="my-12">
            <div className="relative w-full aspect-[16/9] max-w-xl mx-auto overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/braillebox_topdown.png"
                alt="Brailliant Top Down View"
                fill
                className="object-scale-down"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
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
        </Section>

        {/* Video Section */}
        <Section id="project-video">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
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
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Envisioning Accessibility Brailliantly
              </h2>
              <p className="text-xl text-gray-400">
                Bridging the market gap in Braille technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Market Size Card */}
              <div className="bg-stone-800/30 backdrop-blur-sm p-10 rounded-xl transition-all duration-300 
                hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
                <div className="flex items-center justify-between">
                  <div className="space-y-4">
                    <h3 className="text-[#d4843e] text-6xl font-bold">7M+</h3>
                    <p className="text-white text-2xl font-semibold">Americans</p>
                    <p className="text-gray-400 text-lg">are living with low vision or blindness</p>
                  </div>
                  <div className="text-[#d4843e] opacity-20">
                    <FaUsers className="size-24" />
                  </div>
                </div>
              </div>

              {/* Growth Card */}
              <div className="bg-stone-800/30 backdrop-blur-sm p-10 rounded-xl transition-all duration-300 
                hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
                <div className="flex items-center justify-between">
                  <div className="space-y-4">
                    <h3 className="text-[#d4843e] text-6xl font-bold">130K</h3>
                    <p className="text-white text-2xl font-semibold">New Learners</p>
                    <p className="text-gray-400 text-lg">are learning Braille annually in America</p>
                  </div>
                  <div className="text-[#d4843e] opacity-20">
                    <FaGraduationCap className="size-24" />
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="mt-16 text-center">
              <div className="max-w-4xl mx-auto px-4">
                
                {/* Cost Comparison Card */}
                <div className="bg-stone-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-stone-800/50">
                  <p className="text-gray-300 text-lg leading-relaxed mb-12">
                    The American Foundation for the Blind found that existing Braille displays range from
                    $3,500 to $15,000, making them inaccessible to many who need them.
                  </p>
                  
                  {/* Price Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-stone-900/50 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex flex-col items-center">
                        <span className="text-gray-400 text-sm uppercase tracking-wider mb-2">Current Solutions</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-red-500 text-4xl font-bold">$3.5K</span>
                          <span className="text-red-500 text-4xl font-bold">-</span>
                          <span className="text-red-500 text-4xl font-bold">$15K</span>
                        </div>
                        <span className="text-gray-500 mt-2">Retail Range</span>
                      </div>
                    </div>

                    <div className="bg-stone-900/50 rounded-xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex flex-col items-center">
                        <span className="text-gray-400 text-sm uppercase tracking-wider mb-2">Brailliant</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[#d4843e] text-4xl font-bold">$300</span>
                        </div>
                        <span className="text-gray-500 mt-2"> Proposed Price</span>
                      </div>
                    </div>
                  </div>

                  {/* Build Cost Badge */}
                  <div className="mt-8 inline-block">
                    <div className="bg-[#d4843e]/10 border border-[#d4843e]/20 rounded-full px-6 py-2">
                      <span className="text-[#d4843e] font-semibold">
                        Our Build Cost: <span className="text-xl">$77</span>
                      </span>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </Section>

        {/* Process Section */}
        <Section>
          <div className="max-w-6xl mx-auto px-4 staggered-element">
            <div className="text-center mb-12">
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
            <div className="text-center mb-12">
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

            <div className="flex justify-center mt-6">
              <a 
                href="/docs"
                className="flex items-center space-x-3 px-8 py-4 button-primary"
              >
                <span className="tracking-wide">Complete Walk-Through</span>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
