"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ContactUs() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('adejord@gmail.com');
    alert('Email address copied to clipboard!');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-700 p-4 shadow-lg fixed w-full top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white transition hover:scale-105">Project-X</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/about" className="text-white hover:text-blue-300 transition">About Us</Link>
            <Link href="/services" className="text-white hover:text-blue-300 transition">Our Services</Link>
            <Link href="/contact" className="text-white hover:text-blue-300 transition">Contact Us</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-blue-800 p-4">
            <Link href="/about" className="block text-white mb-2 hover:text-blue-300">About Us</Link>
            <Link href="/services" className="block text-white mb-2 hover:text-blue-300">Our Services</Link>
            <Link href="/contact" className="block text-white hover:text-blue-300">Contact Us</Link>
          </div>
        )}
      </div>

      {/* Contact Form Section */}
      <div className="pt-20 bg-gradient-to-b from-blue-700 to-indigo-600 text-white min-h-screen">
        <div className="max-w-5xl mx-auto py-16 px-6">
          <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>
          <p className="text-lg mb-10 text-center">
            We'&apos;'d love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to help.
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

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-blue-600 to-purple-500 text-white text-center p-8 md:p-12">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Project-X. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
