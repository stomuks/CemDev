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
				hero: 'storyblok/BlockHero',
				video: 'storyblok/BlockVideo',
				link: 'components/ui/Link',
				blockDignity: 'storyblok/BlockDignity',
				blockService: 'storyblok/BlockService',
				blockProject: 'storyblok/BlockProject',
				Project: 'storyblok/Project'
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
