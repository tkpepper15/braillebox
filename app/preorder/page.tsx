'use client';

import { FC, useEffect } from 'react';
import { useState } from 'react';
import Footer from 'app/footer';
import Navbar from 'app/navbar';

const PreorderPage: FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', additionalInfo: '' });
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

      if (!response.ok) {
        const data = await response.json();
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
      <div className="container mx-auto mt-12 px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">Preorder Brailliant</h1>
        <p className="text-lg text-gray-400 mb-6">
          Brailliant is a text to braille display built with affordability in mind. Contact us for more details.
        </p>

        {submitted ? (
          <p className="text-lg text-green-500">Thank you for your interest! We'll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-red-500 bg-red-100/10 p-3 rounded-md">
                {error}
              </div>
            )}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
            />
            <textarea
              name="additionalInfo"
              placeholder="Additional Information (optional)"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600"
            />
            <button type="submit" className="w-full px-4 py-2 bg-[#d4843e] text-white rounded-md hover:bg-[#b76e2e] transition duration-300">
              Submit
            </button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PreorderPage; 