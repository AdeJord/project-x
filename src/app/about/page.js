"use client";

import Link from 'next/link';
import { useState } from 'react';

const AboutUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-600 p-4 shadow-md fixed w-full top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            Project-X
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/about" className="text-white hover:text-blue-200">
              About Us
            </Link>
            <Link href="/services" className="text-white hover:text-blue-200">
              Our Services
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-200">
              Contact Us
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
            <Link href="/about" className="block text-white hover:text-blue-200 mb-2">
              About Us
            </Link>
            <Link href="/services" className="block text-white hover:text-blue-200 mb-2">
              Our Services
            </Link>
            <Link href="/contact" className="block text-white hover:text-blue-200">
              Contact Us
            </Link>
          </div>
        )}
      </div>

      {/* About Us Content */}
      <div className="min-h-screen bg-gradient-to-b from-blue-700 to-indigo-600 text-white pt-20">
        <div className="max-w-5xl mx-auto py-16 px-6">
          <h1 className="text-4xl font-bold mb-6">About Project-X</h1>
          <p className="text-lg mb-6">
            After years of working with various companies, we noticed a recurring theme: many businesses were bogged down by outdated processes, paperwork overload, and inefficient workflows that could easily be optimized with the right digital tools. This inspired us to take the leap, learn coding, and start <strong>Project-X</strong> with a mission to help small and new businesses transition into the digital age.
          </p>
          <p className="text-lg mb-6">
            At <strong>Project-X</strong>, our goal is simple: to streamline your operations, reduce paperwork, and minimize risks associated with data loss. We specialize in creating Progressive Web Apps (PWAs) designed to improve efficiency and reduce operational costs—while also contributing to a greener, paperless environment.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-4">How We Use AI to Reduce Costs</h2>
          <p className="text-lg mb-6">
            At <strong>Project-X</strong>, we leverage AI-driven tools for code generation, allowing us to create scalable, efficient applications more quickly. This use of AI ensures that we follow industry best practices while writing code, without sacrificing quality. Additionally, all AI-generated code is rigorously tested, just like traditional software development. By speeding up the development process and automating certain tasks, AI helps us reduce development costs—savings that we pass on to our clients.
          </p>
          <p className="text-lg mb-6">
            Our approach is ideal for businesses that may have limited budgets, as it allows us to offer high-quality, cutting-edge digital solutions without the usual high price tag associated with custom software development.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            Our mission is to empower businesses by simplifying their operational workflows through scalable, cost-effective digital solutions. Whether it`&apos;`s reducing reliance on paperwork or helping you organize and store your data digitally, we are committed to helping you run your business more efficiently with the help of PWAs.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-4">Who We Help</h2>
          <p className="text-lg mb-6">
            We focus on small and new businesses, particularly those who rely heavily on paperwork and manual data duplication. These outdated methods not only pose a risk of losing important information but also require expensive storage solutions. If you`&apos;`re ready to streamline your business processes and cut down on unnecessary expenses, we are here to help.
          </p>
          <p className="text-lg mb-6">
            As part of our approach, we often spend time in the working environment to fully understand your pain points and identify areas where a PWA can make the biggest impact. We believe that being hands-on in understanding your business leads to more effective and tailored solutions.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-4">Our Philosophy</h2>
          <p className="text-lg mb-6">
            We run <strong>Project-X</strong> with a simple, friendly approach: we do our very best to help businesses thrive. We believe that creating strong, efficient systems doesn`&apos;`t have to be complicated or expensive. We`&apos;`re here to ensure that the digital solutions we provide are easy to use, affordable, and scalable to your business`&apos;`s needs.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-4">Ready to Go Digital?</h2>
          <p className="text-lg mb-6">
            If you`&apos;`re a business owner looking to streamline your operations and reduce reliance on outdated processes, we`&apos;`d love to discuss how <strong>Project-X</strong> can help. Our PWAs offer the perfect solution to modernize your business, reduce paperwork, and ensure your operations run smoothly.
          </p>

          <div className="mt-12">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Contact Us to Learn More
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

export default AboutUs;
