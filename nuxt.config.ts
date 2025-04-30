// https://nuxt.com/docs/api/configuration/nuxt-config
import Material from '@primeuix/themes/material'

export default defineNuxtConfig({
	ssr: true,
	target: 'static',
	app: {
		baseURL: '/turzov/' // DÔLEŽITÉ
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/i18n', '@primevue/nuxt-module', '@nuxt/content'],
	primevue: {
        options: {
            theme: {
                preset: Material
            }
        }
    },
	i18n: {
		strategy: 'prefix',
		defaultLocale: 'sk',
		locales: [
			{ code: 'sk', file: 'sk.json', flag: 'sk.png' },
			{ code: 'en', file: 'en.json', flag: 'en.png' }
		]
	}
})