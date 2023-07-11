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
	},
	plugins: [
		plugin(function({ addVariant }) {
		  addVariant('optional', '&:optional')
		  addVariant('hocus', ['&:hover', '&:focus'])
		  addVariant('inverted-colors', '@media (inverted-colors: inverted)')
		})
	  ],
}
