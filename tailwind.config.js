module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',     // Include all files in the app directory
    './pages/**/*.{js,ts,jsx,tsx}',   // Include pages if using page-based routing
    './components/**/*.{js,ts,jsx,tsx}', // Include all components
    './src/**/*.{js,ts,jsx,tsx}',     // Ensure src directory is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
