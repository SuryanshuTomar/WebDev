/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: { xs: "480px" },
			spacing: {
				13: "3.25rem",
			},
			fontSize: {
				"10xl": ["9rem", { lineHeight: "1.2" }],
			},
		},
	},
	plugins: [],
};
