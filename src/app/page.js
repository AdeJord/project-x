"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination"; // Optional for pagination
import "swiper/css/navigation"; // Optional for navigation
import { Pagination, Autoplay } from "swiper/modules"; // Correct import for Swiper modules

export default function Home() {
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
    {
      title: "Customizable User Experience",
      description:
        "Our PWAs are built with flexibility in mind, allowing businesses to tailor the user experience according to their unique needs and preferences.",
    },
  ];

  return (
    <div className="pt-20 md:pt-16 lg:pt-18"> {/* Adjusted responsive padding */}
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-600 text-white text-center p-8 md:p-20">
        <div className="absolute inset-0 bg-[url('/path/to/abstract-pattern.png')] bg-cover opacity-20"></div>
        <h1 className="text-3xl md:text-4xl font-bold relative z-10">
          Empowering Growing Businesses with Affordable, Cross-Platform PWAs
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

        {/* Swiper Carousel for Mobile with Autoplay */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000, // 3 seconds delay
              disableOnInteraction: false, // Keep auto-scrolling even after interaction
            }}
            pagination={{ clickable: true }} // Add pagination if needed
            modules={[Autoplay, Pagination]} // Import modules from 'swiper/modules'
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-800 hover:text-white">
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
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-800 hover:text-white"
            >
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-b from-blue-600 to-purple-500 text-white text-center p-8 md:p-12 mt-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to transform your business with a PWA?
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Let’s discuss how we can help you streamline your operations
          with an affordable, scalable solution.
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
