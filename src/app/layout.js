// app/layout.js

import './globals.css';
import Header from './components/Header'; // Ensure correct import for Header

export const metadata = {
  title: 'Smart PWA Solutions',
  description: 'Generated by Smart PWA Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        {/* Include Header */}
        <Header />
        
        {/* Render Page Content */}
        {children}

        {/* Footer Section */}
        <footer className="bg-gradient-to-br from-blue-600 to-purple-500 text-white text-center p-8 md:p-12">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Smart PWA Solutions. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
