/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'light-gray': 'rgba(9,30,66,0.08)',
				'primary-gray': '#212529',
				'secondary': '#adadad',
				'gray': '#6c757d'
			},
		}
	},
	plugins: [],
}

