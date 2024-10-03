"use client";

import Link from "next/link";
import { useState } from "react";

const caseStudies = [
  {
    client: "Client A",
    logo: "/path/to/logo-a.png", // Path to client logo
    description:
      "We helped a vehicle inspections and auctions company reduce their auditing time from over 8 hours to just under 1.5 hours for 500 cars by implementing a custom PWA solution.",
    slug: "client-a",
  },
  {
    client: "Narrowboat Trust",
    logo: "/path/to/logo-b.png", // Path to client logo
    description:
      "We transformed the Narrowboat Trust's booking process with a calendar-based system, reducing manual effort and improving efficiency for both customers and staff.",
    slug: "narrowboat-trust",
  },
  {
    client: "Client C",
    logo: "/path/to/logo-c.png", // Path to client logo
    description:
      "Client C improved customer engagement and retention by 40% with a custom offline-capable PWA.",
    slug: "client-c",
  },
];

export default function CaseStudies() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Function to open and close modal
  const toggleModal = (study) => {
    setSelectedCaseStudy(study);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-600 text-white text-center p-8 md:p-16 mt-8">
        <div className="absolute inset-0 bg-[url('/path/to/abstract-pattern.png')] bg-cover opacity-20"></div>
        <h1 className="text-5xl font-bold mb-6 text-center tracking-tight">
          Case Studies
        </h1>
        <p className="mt-4 text-base md:text-lg relative z-10">
          See how we’ve helped businesses transform with our Progressive Web App solutions.
        </p>
      </div>

      {/* Case Studies Section */}
      <div className="max-w-6xl mx-auto mt-10 p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Success Stories
        </h2>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              onClick={() => toggleModal(study)} // Make the whole card clickable
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-b hover:from-blue-300 hover:to-blue-800 hover:text-white cursor-pointer"
            >
              <img
                src={study.logo}
                alt={study.client}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-4">
                {study.client}
              </h3>
              <p className="text-center mb-4">{study.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Selected Case Study */}
      {isModalOpen && selectedCaseStudy && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)} // Close the modal on click anywhere
        >
          <div className="bg-blue-100 w-11/12 md:w-4/5 lg:w-3/5 h-4/5 p-8 rounded-lg shadow-2xl overflow-y-auto relative">
            <div className="overflow-y-auto h-full p-4">
              <h2 className="text-3xl font-bold mb-4">
                Client: {selectedCaseStudy.client}
              </h2>

              {/* Render based on selected case study */}
              {selectedCaseStudy.slug === "client-a" && (
                <>
                  <p className="text-lg mb-4">
                    <strong>Industry:</strong> Automotive
                  </p>
                  <p className="text-lg mb-4">
                    <strong>Solution:</strong> Progressive Web App for Streamlining Hub Audits
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Challenge:</h3>
                  <p>
                    The client, a vehicle inspections and auctions company, faced inefficiencies in their hub auditing process. When vehicles were collected at the end of a lease, they were transported to a storage hub before reaching their final destination. Each hub needed to be audited weekly to ensure the correct cars were present.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Solution:</h3>
                  <p>
                    We developed a Progressive Web App (PWA) using React, Node.js, Express, and PostgreSQL. The app allows inspectors to quickly audit vehicles by fetching the necessary data from an uploaded spreadsheet. The PWA reduced audit time to just 10 seconds per car, reducing the total audit time for 500 cars to less than 1.5 hours.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Key Features:</h3>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Role-Based Access: Different roles for inspectors, admins, and managers.</li>
                    <li>Efficiency: Automated vehicle data retrieval.</li>
                    <li>Improved Accuracy: Data fetched directly from the uploaded spreadsheet.</li>
                  </ul>

                  <h3 className="mt-4 text-xl font-semibold">Outcome:</h3>
                  <p>
                    The PWA drastically improved the efficiency of the hub auditing process, reducing the time taken per vehicle from 1 minute to just 10 seconds. This saved hours of work each week, improving accuracy and streamlining the workflow.
                  </p>
                </>
              )}

              {selectedCaseStudy.slug === "narrowboat-trust" && (
                <>
                  <p className="text-lg mb-4">
                    <strong>Industry:</strong> Non-Profit / Tourism
                  </p>
                  <p className="text-lg mb-4">
                    <strong>Solution:</strong> Online Booking System with Calendar and CMS
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Challenge:</h3>
                  <p>
                    The Narrowboat Trust had an outdated manual booking system where customers had to call to check availability. It was inefficient, and booking dates required checking trip lists manually, resulting in back-and-forth communication to confirm available dates.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Solution:</h3>
                  <p>
                    We developed a modern website with a color-coded calendar that displayed boat availability. Customers could book trips directly through the calendar, and if a date was unavailable, it was shown in red. Available dates were displayed in green, allowing users to easily book through the system.
                  </p>
                  <p>
                    The system sent an automatic email to the trust whenever a booking was made, and the trust could assign skippers and crew members to each trip. The crew assignments, as well as the bookings, were all stored in a unified database.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Key Features:</h3>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Skipper & Crew Management: The system allowed the trust to assign and manage skippers and crew for each trip.</li>
                    <li>Content Management System (CMS): The trust could upload documents like insurance and risk assessments and manage a photo gallery for the website.</li>
                    <li>Booking Amendments: Bookings could be edited, and skippers or crew could be updated as needed.</li>
                  </ul>

                  <h3 className="mt-4 text-xl font-semibold">Outcome:</h3>
                  <p>
                    The new system drastically reduced the trust’s manual work, making it easier for customers to book trips and improving efficiency by over 90%. The trust could now independently manage the website, keep track of bookings, and assign crew members efficiently.
                  </p>
                </>
              )}

              {selectedCaseStudy.slug === "client-c" && (
                <>
                  <p className="text-lg mb-4">
                    <strong>Industry:</strong> Retail / eCommerce
                  </p>
                  <p className="text-lg mb-4">
                    <strong>Solution:</strong> Custom PWA for Enhanced Customer Engagement
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Challenge:</h3>
                  <p>
                    Client C wanted to improve customer engagement and retention with an offline-capable app, allowing their users to continue browsing and shopping even with spotty internet connections.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Solution:</h3>
                  <p>
                    We built a Progressive Web App (PWA) for Client C, enabling offline browsing and seamless online-to-offline integration. The app provided real-time data synchronization whenever the connection was restored.
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">Outcome:</h3>
                  <p>
                    Client C saw a 40% improvement in customer engagement and retention, with more users able to continue using the app even during periods of poor internet connectivity.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-500 text-white text-center p-8 md:p-12 mt-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Interested in a Case Study for Your Business?
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Let’s discuss how we can help you streamline your operations with an affordable, scalable solution.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-white text-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Contact Us to Learn More
        </Link>
      </div>
    </div>
  );
}
