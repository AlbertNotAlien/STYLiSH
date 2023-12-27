/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-white": "#F5F5F5",
        "text-gray": "#3F3A3A",
        "text-dark-gray": "#828282",
        "text-black": "#070707",
        "highlight-gold": "#8B572A",
        "background-gray": "#313538",
        "border-gray": "#979797",
        // TODO: different gray
        "gray-bright": "#D3D3D3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "page-container": "1160px",
      },
      width: {
        "page-container": "1160px",
      },
    },
  },
  plugins: [],
};
