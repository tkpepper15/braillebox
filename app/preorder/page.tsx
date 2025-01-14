'use client';

import { FC } from 'react';
import { useState } from 'react';
import Footer from 'app/footer';
import Navbar from 'app/navbar';

interface FormData {
  name: string;
  email: string;
  additionalInfo: string;
}

interface ApiResponse {
  error?: string;
  message?: string;
}

const PreorderPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({ 
    name: '', 
    email: '', 
    additionalInfo: '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json() as ApiResponse;

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-gray-200">
      <Navbar />
      <div className="container mx-auto mt-12 px-4 py-16 max-w-2xl">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-white">Preorder Brailliant</h1>
            <p className="text-xl text-gray-400">
              A text to braille display built with affordability in mind.
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 text-center">
              <div className="inline-block p-4 bg-green-500/10 rounded-lg">
                <p className="text-xl text-green-400">
                  Thank you for your interest! We'll be in touch soon.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {error && (
                <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <p className="text-red-400">{error}</p>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg 
                             text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                             focus:ring-[#d4843e] focus:border-transparent transition duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg 
                             text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                             focus:ring-[#d4843e] focus:border-transparent transition duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Any specific requirements or questions?"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-lg 
                             text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                             focus:ring-[#d4843e] focus:border-transparent transition duration-200 
                             resize-none"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full px-6 py-4 bg-[#d4843e] text-white rounded-lg font-medium
                         hover:bg-[#b76e2e] focus:outline-none focus:ring-2 focus:ring-[#d4843e] 
                         focus:ring-offset-2 focus:ring-offset-stone-950 transition duration-200
                         transform hover:scale-[0.98]"
              >
                Submit Preorder Request
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreorderPage; 