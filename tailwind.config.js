module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
		screens: {
			'sm': '660px',
			'md': '1000px',
      'lg': '1600px',
      'xl': '1921px',
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
