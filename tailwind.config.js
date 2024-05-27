/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#d3e8ff",
      },
      spacing: {},
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
