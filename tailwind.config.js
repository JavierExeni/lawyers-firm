/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        roboto: ["Poppins"],
      },
      maxWidth: {
        "view-screen": "1400px",
      },
      backgroundImage: {
        lawyer1: "url('./assets/lawyers/01.jpg')",
        lawyer2: "url('./assets/lawyers/02.jpg')",
        lawyer3: "url('./assets/lawyers/03.jpg')",
        lawyer4: "url('./assets/lawyers/04.jpg')",
        lawyer5: "url('./assets/lawyers/05.jpg')",
        lawyer6: "url('./assets/lawyers/06.jpg')",
        lawyer7: "url('./assets/lawyers/07.jpg')",
        lawyer8: "url('./assets/lawyers/08.jpg')",
      },
    },
  },
  plugins: [],
};
