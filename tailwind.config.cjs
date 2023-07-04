const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  fancy: ["Lexend Peta"],
			  serif: ["Noto Serif Japanese"],
			  mono: ["Noto Sans Mono"],
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
