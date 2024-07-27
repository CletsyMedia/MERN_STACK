/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': {'min': '320px', 'max': '767px'},
        'md-max': {'min': '768px', 'max': '988px'},
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#007bff",
          "primary-focus": "#0056b3",
          "primary-content": "#ffffff",
          secondary: "#6c757d",
          "secondary-focus": "#5a6268",
          "secondary-content": "#ffffff",
          accent: "#28a745",
          "accent-focus": "#218838",
          "accent-content": "#ffffff",
          neutral: "#f8f9fa",
          "neutral-focus": "#e9ecef",
          "neutral-content": "#212529",
          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-300": "#e9ecef",
          "base-content": "#212529",
          info: "#17a2b8",
          success: "#28a745",
          warning: "#ffc107",
          error: "#dc3545",
        },
      },
    ],
  }
}
