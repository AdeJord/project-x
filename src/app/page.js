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

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-600 text-white text-center p-8 md:p-20 mt-16">
        <div className="absolute inset-0 bg-[url('/path/to/abstract-pattern.png')] bg-cover opacity-20"></div>
        <h1 className="text-3xl md:text-4xl font-bold relative z-10">
          Empowering Small Businesses with Affordable, Cross-Platform PWAs
        </h1>
        <p className="mt-4 text-base md:text-lg relative z-10">
          Say goodbye to the high costs of native apps. Our Progressive Web Apps
          offer the speed, scalability, and cross-platform flexibility you need
          to boost your operations without breaking the bank.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition relative z-10"
        >
          Discover How We Can Help
        </a>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mt-10 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why PWAs are the Future of Business Apps
        </h2>

        {/* Swiper Carousel for Mobile */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-800 hover:text-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]">
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2">{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-800 hover:text-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]"
            >
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-500 text-white text-center p-8 md:p-12 mt-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to transform your business with a PWA?
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Let's discuss how we can help you streamline your operations with an
          affordable, scalable solution.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us to Learn More
        </a>
      </div>
    </div>
  );
}
