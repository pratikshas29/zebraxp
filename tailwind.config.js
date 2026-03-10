module.exports = {
	content: [
		"./index.html", 
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "system-ui", "sans-serif"],
			},
			colors: {
				brandPurple: "#8403F3",
				brandYellow: "#FDCB3D",
				brandDark: "#0D0035",
				grayText: "rgba(0, 0, 0, 0.7)",
				panelBg: "#0054C20D",
				borderLight: "#0D00351A",
				borderMedium: "#0D003533",
				white60: "#FFFFFF99",
				statsBg: "#8403F30D",
				offeringBg: "#D9D9D9",
				footerBg: "#F4F4F4",
			},
		},
	},
	plugins: [],
}
