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
        stylish: {
          white: "#F5F5F5",
          gray: {
            lightest: "#D3D3D3",
            lighter: "#979797",
            medium: "#828282",
            darker: "#3F3A3A",
            darkest: "#313538",
          },
          black: "#070707",
          gold: "#8B572A",
        },
      },
      maxWidth: {
        "desktop-container": "1280px",
      },
      width: {
        "desktop-container": "1280px",
      },
    },
  },
  plugins: [],
};
