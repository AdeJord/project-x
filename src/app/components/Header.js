// components/Header.js
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-700 p-4 shadow-lg fixed w-full top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-white transition hover:scale-105"
        >
          Smart PWA Solutions
        </Link>
        <p className="text-base font-light text-white">
          Affordable, Cross-Platform Web Solutions
        </p>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-blue-300 transition">
            Home
          </Link>

          <Link
            href="/about"
            className="text-white hover:text-blue-300 transition"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-blue-300 transition"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-300 transition"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:hidden">
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
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-blue-800 p-4">
          <Link href="/" className="block text-white mb-2 hover:text-blue-300">
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white mb-2 hover:text-blue-300"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="block text-white mb-2 hover:text-blue-300"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-blue-300"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}
