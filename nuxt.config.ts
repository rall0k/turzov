// https://nuxt.com/docs/api/configuration/nuxt-config
import Material from '@primeuix/themes/material'

/* 
	pri custom domain a vyuzitim custom domain je potrebne nastavit u postkytovatela napr websupport a zaroven na github pages v settings pre dany projekt aj napisat domenu, ktoru mam zaregistrovanu
	CNAME
	www.turzov.sk	rall0k.github.io	600

	A
	turzov.sk	185.199.109.153		600
	turzov.sk	185.199.110.153		600
	turzov.sk	185.199.111.153		600

	AAAA
	turzov.sk	2606:50c0:8001:0000:0000:0000:0000:0153		600
	turzov.sk	2606:50c0:8002:0000:0000:0000:0000:0153		600
	turzov.sk	2606:50c0:8003:0000:0000:0000:0000:0153		600
*/
export default defineNuxtConfig({
	ssr: true,
	target: 'static',
	app: {
		// baseURL: '/turzov/' // DÔLEŽITÉ pre github pages
		baseURL: '/' // DÔLEŽITÉ pre github pages s custom domain a localhost
		// baseURL: process.env.NODE_ENV === 'production' ? '/turzov/' : '/'
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/i18n', '@primevue/nuxt-module', '@nuxt/content', '@nuxtjs/sitemap'],
	site: {
		url: 'https://turzov.sk', // ← sem zadaj reálnu URL svojej stránky
	},
	sitemap: {
		i18n: true,
		sitemapPath: '/sitemap_index.xml',
		xsl: false,
	},
	primevue: {
		options: {
			theme: {
				preset: Material
			}
		}
	},
	i18n: {
		strategy: 'prefix_except_default',
		defaultLocale: 'sk',
		locales: [
			{ code: 'sk', file: 'sk.json', flag: 'sk.png' },
			{ code: 'en', file: 'en.json', flag: 'en.png' }
		]
	}
})