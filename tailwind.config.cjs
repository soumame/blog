const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  fancy: ['Lexend Peta 500'],
			  serif: ['Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
			  mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
			},
			
		  },
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'green': '#8DE797',
			'blue': '#769FF8',
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
			'bg': '#121717',
			'black': '#0f172a',
			
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
