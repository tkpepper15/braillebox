'use client';

import { FC } from 'react';
import Navbar from 'app/navbar';
import Footer from 'app/footer';
import { HiMail } from 'react-icons/hi';

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = () => {
  return (
    <div className="min-h-screen bg-stone-950">
      <Navbar />
      
      <div className="container mt-12 mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-400 mb-12">
              We're always interested in hearing about new ways to improve and integrate Brailliant.
            </p>
            <div>
              <img
                src="/group.png"
                alt="Group"
                className="h-auto max-w-2xl rounded-lg shadow-lg mx-auto"
                width="60%"
              />
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sumedh Card */}
            <div className="bg-stone-900 p-8 rounded-lg transition-all duration-300 hover:bg-stone-800">
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-white">Sumedh</h3>
                <p className="text-sm text-[#d4843e] font-medium">Marketing Lead</p>
                <a 
                  href="mailto:kotrannavar25s@ncssm.edu"
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-stone-800 hover:bg-[#d4843e] rounded-md transition-all duration-300 group w-full"
                >
                  <HiMail className="text-lg text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">kotrannavar25s@ncssm.edu</span>
                </a>
              </div>
            </div>

            {/* Richard Card */}
            <div className="bg-stone-900 p-8 rounded-lg transition-all duration-300 hover:bg-stone-800">
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-white">Richard</h3>
                <p className="text-sm text-[#d4843e] font-medium">Creator & Development Lead</p>
                <a 
                  href="mailto:shan26r@ncssm.edu"
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-stone-800 hover:bg-[#d4843e] rounded-md transition-all duration-300 group w-full"
                >
                  <HiMail className="text-lg text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">shan26r@ncssm.edu</span>
                </a>
              </div>
            </div>

            {/* Tejjas Card */}
            <div className="bg-stone-900 p-8 rounded-lg transition-all duration-300 hover:bg-stone-800">
              <div className="text-center space-y-3">
                <h3 className="text-xl font-semibold text-white">Tejjas</h3>
                <p className="text-sm text-[#d4843e] font-medium">Design Lead</p>
                <a 
                  href="mailto:kaul25t@ncssm.edu"
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-stone-800 hover:bg-[#d4843e] rounded-md transition-all duration-300 group w-full"
                >
                  <HiMail className="text-lg text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">kaul25t@ncssm.edu</span>
                </a>
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
  