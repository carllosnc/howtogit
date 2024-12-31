/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'system-ui'],
			mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
