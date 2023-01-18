/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#f4f5f7",
					200: "#4ecdbf",
					400: "#3f8698",
					500: "#145477",
					800: "#686c6d",
				},
			},
			gridTemplateRows: {
				7: "repeat(7, minmax(0, 1fr))",
				dashboard: "80px minmax(0, 1fr)",
			},
			gridTemplateColumns: {
				dashboard: "250px minmax(0, 1fr)",
				announcementsMini: "180px minmax(0, 1fr)",
			},
			fontFamily: {
				sofia: ["Sofia Sans", "sans-serif"],
			},
			screens: {
				xs: "550px",
			},
		},
	},
	plugins: [],
}
