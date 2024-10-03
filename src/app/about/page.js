"use client";

import modernWorkspace from '../components/assets/office-image.webp'; // Correct path to the image
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-18 md:pt-16 lg:pt-18 flex flex-col items-center">
      {/* About Us Content */}
      <div className="min-h-screen bg-gradient-to-b from-blue-700 to-indigo-600 text-white pt-20 md:pt-0 lg:pt-0 relative w-full flex flex-col items-center">
  {/* Dynamic Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-10"
    style={{ backgroundImage: `url(${modernWorkspace.src})` }}
  ></div>

  <div className="relative z-10 max-w-full mx-auto py-12 px-6 text-center">
    <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
      About <span className="text-yellow-400">SmartAppSolutions</span>
    </h1>
    <p className="text-base md:text-xl mb-6 leading-relaxed max-w-full">
      After years of working with various companies, we noticed a recurring theme: many businesses were bogged down by outdated processes, paperwork overload, and inefficient workflows that could easily be optimized with the right digital tools.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">
      {/* Callout 1 */}
      <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Our mission is to empower businesses by simplifying their operational workflows through scalable, cost-effective digital solutions.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Whether it&apos;s reducing reliance on paperwork or helping you organize and store your data digitally, we are committed to helping you run your business more efficiently with the help of PWAs.
        </p>
      </div>

      {/* Callout 2 */}
      <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Our Philosophy
        </h2>
        <p className="text-base md:text-lg mb-4 leading-relaxed">
          We run <strong>SmartAppSolutions</strong> with a simple, friendly approach: we do our very best to help businesses thrive.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          We believe that creating strong, efficient systems doesn&apos;t have to be complicated or expensive. We&apos;re here to ensure that the digital solutions we provide are easy to use, affordable, and scalable to your business&apos;s needs.
        </p>
      </div>
    </div>

    {/* How We Use AI Section */}
    <div className="mt-16 p-8 bg-indigo-700 bg-opacity-90 rounded-lg shadow-md w-full">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
        How We Use AI to Reduce Costs
      </h2>
      <p className="text-base md:text-lg mb-6 leading-relaxed">
        At <strong>SmartAppSolutions</strong>, we leverage AI-driven tools for code generation, allowing us to create scalable, efficient applications more quickly. This use of AI ensures that we follow industry best practices while writing code, without sacrificing quality.
      </p>
      <p className="text-base md:text-lg mb-6 leading-relaxed">
        By speeding up the development process and automating certain tasks, AI helps us reduce development costs—savings that we pass on to our clients.
      </p>
    </div>

    {/* Ready to Go Digital Section */}
    <div className="mt-12 text-center w-full">
      <Link
        href="/contact"
        className="inline-block bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition font-semibold text-xl"
      >
        Contact Us to Learn More
      </Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
