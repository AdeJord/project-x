"use client";

import Link from 'next/link';
import { useState } from 'react';

const Services = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "Digital Transformation",
      description:
        "We help you transition from traditional paper-based processes to fully digital systems. Our Progressive Web Apps streamline your business operations and reduce your reliance on physical documentation.",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and improve efficiency with customized workflows. We help your business operate more smoothly by reducing human error and increasing productivity.",
    },
    {
      title: "Data Security & Accessibility",
      description:
        "Your data is critical, and we ensure its stored securely while being easily accessible to your team when they need it. Our PWAs offer safe, cloud-based data storage with controlled access.",
    },
    {
      title: "Offline Functionality",
      description:
        "Our PWAs work even when youre offline. Your business operations wont come to a halt just because of an unreliable internet connection. This ensures your workflows stay intact, no matter the situation.",
    },
    {
      title: "Custom Solutions",
      description:
        "We offer tailored solutions based on your business needs. Whether you&aposre looking for simple workflow optimization or a complex system overhaul, we work with you to develop a PWA that suits your business.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-600 p-4 shadow-md fixed w-full top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/">
            <a className="text-xl font-bold text-white">Project-X</a>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/about">
              <a className="text-white hover:text-blue-200">About Us</a>
            </Link>
            <Link href="/services">
              <a className="text-white hover:text-blue-200">Our Services</a>
            </Link>
            <Link href="/contact">
              <a className="text-white hover:text-blue-200">Contact Us</a>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-blue-700 p-4">
            <Link href="/about">
              <a className="block text-white hover:text-blue-200 mb-2">About Us</a>
            </Link>
            <Link href="/services">
              <a className="block text-white hover:text-blue-200 mb-2">Our Services</a>
            </Link>
            <Link href="/contact">
              <a className="block text-white hover:text-blue-200">Contact Us</a>
            </Link>
          </div>
        )}
      </div>

      {/* Services Content */}
      <div className="pt-20 bg-gradient-to-b from-blue-700 to-indigo-600 text-white min-h-screen">
        <div className="max-w-5xl mx-auto py-16 px-6">
          <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-blue-800 transform transition-all duration-300 hover:translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-base">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link href="/contact">
              <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
                Contact Us to Learn More
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-blue-600 to-purple-500 text-white text-center p-8 md:p-12">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Project-X. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Services;
