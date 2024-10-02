// app/contact/page.js
"use client";

import { useState } from 'react';

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adejord@gmail.com');
    alert('Email address copied to clipboard!');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Form Section */}
      <div className="pt-10 bg-gradient-to-b from-blue-700 to-indigo-600 text-white min-h-screen">
        <div className="max-w-5xl mx-auto py-16 px-6">
          <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>
          <p className="text-lg mb-10 text-center">
            We&apos;d love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to help.
          </p>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-lg shadow-lg text-blue-800">
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Modal Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Show Contact Details
            </button>
          </div>
        </div>
      </div>

      {/* Contact Details Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm">
            <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
            <p className="mb-4">
              <strong>Phone:</strong>{' '}
              <a href="tel:+447512896176" className="text-blue-600 underline">
                07512 896 176
              </a>
            </p>
            <p className="mb-4">
              <strong>Email:</strong>{' '}
              <button
                onClick={handleCopyEmail}
                className="text-blue-600 underline"
              >
                adejord@gmail.com
              </button>
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
