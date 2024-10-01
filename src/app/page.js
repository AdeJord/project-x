"use client"; // Client-side component

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination"; // Optional for pagination

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const features = [
    {
      title: "Fast & Reliable",
      description:
        "Our PWAs load instantly and work seamlessly, ensuring a smooth experience for your business.",
    },
    {
      title: "Scalable Across Platforms",
      description:
        "PWAs seamlessly function on mobile, tablet, and desktop devices. Whether your users are on Android, iOS, or a laptop, our PWAs provide a unified, cross-platform solution that works everywhere.",
    },
    {
      title: "Cost-Effective",
      description:
        "Why invest in separate iOS and Android apps when you can have one? Our PWAs provide the same capabilities at a fraction of the cost.",
    },
    {
      title: "Offline Functionality",
      description:
        "Keep your operations running smoothly even when internet connectivity is unreliable with offline capabilities built into our PWAs.",
    },
    {
      title: "Easy Updates & Maintenance",
      description:
        "No more App Store updates. Your PWA is updated instantly on all devices, reducing downtime and maintenance costs.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-600 p-4 shadow-md fixed w-full top-0 z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-white">Project-X</div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-white hover:text-blue-200">
              Home
            </a>
            <a href="/about" className="text-white hover:text-blue-200">
              About Us
            </a>
            <a href="/services" className="text-white hover:text-blue-200">
              Our Services
            </a>
            <a href="/contact" className="text-white hover:text-blue-200">
              Contact Us
            </a>
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
            <a href="/" className="block text-white hover:text-blue-200 mb-2">
              Home
            </a>
            <a href="/about" className="block text-white hover:text-blue-200 mb-2">
              About Us
            </a>
            <a href="/services" className="block text-white hover:text-blue-200 mb-2">
              Our Services
            </a>
            <a href="/contact" className="block text-white hover:text-blue-200">
              Contact Us
            </a>
          </div>
        )}
      </div>

      {/* Rest of your content */}
      {/* ... */}
    </div>
  );
}
