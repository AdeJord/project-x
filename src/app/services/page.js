"use client";

import Header from '../components/Header'; // Import Header

export default function Services() {
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
        "Your data is critical, and we ensure it's stored securely while being easily accessible to your team when they need it. Our PWAs offer safe, cloud-based data storage with controlled access.",
    },
    {
      title: "Offline Functionality",
      description:
        "Our PWAs work even when you're offline. Your business operations won't come to a halt just because of an unreliable internet connection.",
    },
    {
      title: "Custom Solutions",
      description:
        "We offer tailored solutions based on your business needs. Whether you're looking for simple workflow optimization or a complex system overhaul, we work with you to develop a PWA that suits your business.",
    },
    {
      title: "Integration Services",
      description:
        "We offer seamless integration with your existing systems, ensuring that our PWAs work effortlessly with your current software infrastructure.",
    },
  ];

  return (
    <div className="pt-10 bg-gradient-to-b from-blue-700 to-indigo-600 text-white min-h-screen">
      <Header />
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-blue-800 transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-800 hover:text-white"
              style={{ backgroundColor: '#f8fafc' }} // Ensure background color on non-hover
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-indigo-600 to-blue-900 text-white text-center p-8 md:p-12 mt-6">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} SmartAppSolutions. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
