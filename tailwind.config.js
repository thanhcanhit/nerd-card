/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			sora: ["Sora", "san-serif"],
		},
		extend: {
			fontSize: {
				medium: "16px",
			},
			colors: {
				primary: "#000",
			},
			boxShadow: {},
		},
	},
	plugins: [],
};
