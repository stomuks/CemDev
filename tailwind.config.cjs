import plugin from 'tailwindcss/plugin'

module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '600px',
			md: '812px',
			lg: '1024px',
			xl: '1127px',
			'2xl': '1290px'
		},
		extend: {
			borderRadius: {
				'4xl': '2rem'
			},
			fontSize: {
				'4xl': ['2.5rem', '3rem']
			},
			fontFamily: {
				Roboto: ['Roboto Flex', 'sans-serif']
			},
			backgroundPosition: {
				'right-6-top': 'right 1.5em top'
			},
			width: {
				64: '16rem',
				72: '18rem',
				96: '24rem',
				128: '32rem'
			},
			height: {
				112: '28rem',
				128: '32rem',
				136: '34rem',
				144: '36rem'
			},
			colors: {
				gray: {
					200: '#E2E8F0',
					950: '#020617'
				},
				slate: {
					200: '#E2E8F0',
					400: '#94A3B8',
					800: '#1E293B'
				},
				primary: {
					1: '#494F9C',
					2: '#1C97D3',
					3: '#E16064',
					4: '#CD983E',
					5: '#426CBA'
				}
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.arrow-right': {
					display: 'inline-flex',
					alignItems: 'center',
					gap: '0.5rem',
					'&::after': {
						content: '""',
						display: 'inline-block',
						backgroundImage: 'url("/icons/chevron-right.svg")',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						width: '1.25rem',
						height: '1.25rem'
					}
				},
				'.serviceBgRed': {
					backgroundImage: 'url("/icons/redline.svg")',
					backgroundColor: '#E16064'
				},
				'.serviceBgYellow': {
					backgroundImage: 'url("/icons/yellowline.svg")',
					backgroundColor: '#CD983E'
				},
				'.serviceBgPurple': {
					backgroundImage: 'url("/icons/purpleline.svg")',
					backgroundColor: '#494F9C'
				},
				'.serviceBgBlue': {
					backgroundImage: 'url("/icons/blueline.svg")',
					backgroundColor: '#1C97D3'
				},
				'.containerBorderBottom': {
					borderBottom: '1px solid #E2E8F0'
				},
				'.bgGrayGradient': {
					background: 'linear-gradient(180deg, #E2E8F0 0%, #F1F5F9 100%)'
				}
			})
		})
	]
}
