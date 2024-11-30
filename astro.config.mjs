import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@astrojs/react'
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			apiOptions: {
				region: ''
			},
			bridge: {
				customParent: 'https://app.storyblok.com'
			},
			components: {
				page: 'storyblok/Page',
				feature: 'storyblok/Feature',
				grid: 'storyblok/Grid',
				teaser: 'storyblok/Teaser',
				global: 'storyblok/Global',
				hero: 'storyblok/Hero',
				dignity: 'storyblok/Dignity',
				video: 'storyblok/Video',
				dignityCards: 'storyblok/DignityCards',
				link: 'components/Link',
				pageService: 'storyblok/PageService',
				service: 'components/MyService'
			}
		}),
		tailwind(),
		react()
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true
		}
	}
})
