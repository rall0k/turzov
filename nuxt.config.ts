// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/i18n', '@primevue/nuxt-module', '@nuxt/content'],
	i18n: {
		defaultLocale: 'sk',
		locales: [
			{ code: 'sk', file: 'sk.json', flag: 'sk.png' },
			{ code: 'en', file: 'en.json', flag: 'en.png' }
		]
	}
})