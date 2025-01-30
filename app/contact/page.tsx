'use client';

import Image from 'next/image';
import { FC } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Footer from 'app/footer';
import Navbar from 'app/navbar';

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = () => {
  return (
    <div className="min-h-screen bg-stone-950">
      <Navbar />
      
      <div className="container mt-12 mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-400 mb-12">
              We&apos;re always interested in hearing about new ways to improve and integrate Brailliant.
            </p>
            <div className="relative w-full aspect-[2/1] max-w-3xl mx-auto overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/group.png"
                alt="Group"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Richard Card */}
            <div className="bg-stone-800/30 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 
              hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-white">Richard</h3>
                <p className="text-[#d4843e] font-medium">Founder &amp; Development Lead</p>
                <div className="flex justify-center">
                  <a href="mailto:shan26r@ncssm.edu" 
                    className="p-2 text-gray-400 hover:text-[#d4843e] transition-colors">
                    <FaEnvelope className="size-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Sumedh Card */}
            <div className="bg-stone-800/30 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 
              hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-white">Sumedh</h3>
                <p className="text-[#d4843e] font-medium">Market Research &amp; Business Lead</p>
                <div className="flex justify-center">
                  <a href="mailto:kotrannavar25s@ncssm.edu" 
                    className="p-2 text-gray-400 hover:text-[#d4843e] transition-colors">
                    <FaEnvelope className="size-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Tejjas Card */}
            <div className="bg-stone-800/30 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 
              hover:scale-105 hover:bg-stone-800/50 shadow-xl border border-stone-800/50">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold text-white">Tejjas</h3>
                <p className="text-[#d4843e] font-medium">UI/UX &amp; Design Lead</p>
                <div className="flex justify-center">
                  <a href="mailto:kaul25t@ncssm.edu" 
                    className="p-2 text-gray-400 hover:text-[#d4843e] transition-colors">
                    <FaEnvelope className="size-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
  