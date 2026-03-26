/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
            "primary": "hsl(26, 100%, 55%)",  // Main Orange
            "highlight": "hsl(25, 100%, 94%)", // Pale orange for backgrounds and hovers
        },
        content: {
            "main": "hsl(220, 13%, 13%)",  // Very dark blue for titles
            "body": "hsl(219, 9%, 45%)", // Dark grayish blue for paragraphs
            "muted": "hsl(220, 14%, 75%)",  // Grayish blue for secondary text
        },
        surface: {
            "base": "hsl(223, 64%, 98%)",  // White
            "alt": "hsl(0, 0%, 100%)", // Light grayish blue for sections and inputs
            "overlay": "hsl(0, 0%, 0%)",  // Black with 75% opacity
        }
      },
      fontFamily: {
        display: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
