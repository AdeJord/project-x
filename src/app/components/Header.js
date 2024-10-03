"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-700 p-4 shadow-lg fixed w-full top-0 z-50">
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Tagline in Column for Mobile */}
        <div className="flex flex-col items-start md:flex-row md:items-center md:space-x-6">
          {/* Left Side: Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link
              href="/"
              className="text-2xl font-bold text-white transition hover:scale-105"
            >
              SmartAppSolutions
            </Link>
            {/* Mobile Menu Button on the Right */}
            <div className="md:hidden ml-auto">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Tagline - Centered on mobile, in row on desktop */}
          <p className="text-sm font-light text-white mt-2 md:mt-0 ml-0 md:ml-4">
            Affordable, Cross-Platform Web Solutions
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-sm text-white hover:text-blue-300 transition-transform transform hover:scale-110 duration-200"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-white hover:text-blue-300 transition-transform transform hover:scale-110 duration-200"
          >
            About Us
          </Link>

          <Link
            href="/services"
            className="text-sm text-white hover:text-blue-300 transition-transform transform hover:scale-110 duration-200"
          >
            Our Services
          </Link>

          <Link
            href="/case-studies"
            className="text-sm text-white hover:text-blue-300 transition-transform transform hover:scale-110 duration-200"
          >
            Case Studies
          </Link>

          <Link
            href="/contact"
            className="text-sm text-white hover:text-blue-300 transition-transform transform hover:scale-110 duration-200"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 p-4 flex flex-col space-y-2">
          <Link
            href="/"
            className="block text-white mb-2 hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white mb-2 hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="block text-white mb-2 hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            Our Services
          </Link>
          <Link
            href="/case-studies"
            className="block text-white mb-2 hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-blue-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}
