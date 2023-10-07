const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			fontFamily: {
			  fancy: ['Lexend Peta 500'],
			  serif: ['Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
			  mono: ['Yu Gothic 300','ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace', ],
			},
			
		  },
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'green': '#49DF85',
			'blue': '#A7BCF6',
			'purple': '#BB7FF8',
			'red': '#ED726D',
			'yellow': '#F1A256',
			'orange': '#ED8338',
			'pink': '#e198b4',
			'tw': '#00acee',
			'ig': '#dd2a7b',
			'in': '#0a66c2',
			'gh': '#171515',
			'di': '#7289da',
			'white': '#fbfdf8',
			'gray': '#696969',
			'black': '#191c1a',

			'primary': '#006d3e',
			'secondary': '#4f6354',
			'container': '#96f7b8',
			'container2': '#d1e8d5',
			'primary': '#006d3e',
			'button': '#beeaf7',
			'surface': '#dce5db',
			'tertialy': '#3b6470',
			'outline': '#717971',
		


			
			
		  },
	},
	plugins: [
		plugin(function({ addVariant }) {
		  addVariant('optional', '&:optional')
		  addVariant('hocus', ['&:hover', '&:focus'])
		  addVariant('inverted-colors', '@media (inverted-colors: inverted)')
		})
	  ],
}
