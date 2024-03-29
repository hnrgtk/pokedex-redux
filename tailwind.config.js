module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      "bg-green-400",
      "bg-gray-800",
      "bg-purple-800",
      "bg-yellow-400",
      "bg-pink-400",
      "bg-red-900",
      "bg-red-400",
      "bg-indigo-600",
      "bg-indigo-700",
      "bg-green-600",
      "bg-yellow-700",
      "bg-blue-400",
      "bg-gray-500",
      "bg-purple-600",
      "bg-pink-700",
      "bg-yellow-600",
      "bg-gray-400",
      "bg-blue-500",
      "border-green-400",
      "border-gray-800",
      "border-purple-800",
      "border-yellow-400",
      "border-pink-400",
      "border-red-900",
      "border-red-400",
      "border-indigo-600",
      "border-indigo-700",
      "border-green-600",
      "border-yellow-700",
      "border-blue-400",
      "border-gray-500",
      "border-purple-600",
      "border-pink-700",
      "border-yellow-600",
      "border-gray-400",
      "border-blue-500",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: "660px",
      md: "1000px",
      lg: "1600px",
      xl: "1921px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
