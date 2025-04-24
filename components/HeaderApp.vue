<script setup>
const i18n = useI18n()

const { data: home }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/home`).first())
const { data: accommodation }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/accommodation`).first())
const { data: restaurant }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/restaurant`).first())
const { data: terrace }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/terrace`).first())
const { data: turzovia }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/turzovia`).first())
const { data: tips }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/tips`).first())

const switchLocale = (locale) => {
	const localePath = useLocalePath()
	const route = useRoute()
	let url = localePath(route.name.split("___")[0], locale)
	window.location.href = url
}
</script>

<template>
	<header class="header-app">
		<NuxtLink :to="$localePath('index', i18n.locale.value)">Penzión Turzov</NuxtLink>
		<section class="nav-locale">
			<nav>
				<NuxtLink :to="$localePath(accommodation.body.id, i18n.locale.value)">{{ accommodation.body.title }}</NuxtLink>
				<NuxtLink :to="$localePath(restaurant.body.id, i18n.locale.value)">{{ restaurant.body.title }}</NuxtLink>
				<NuxtLink :to="$localePath(terrace.body.id, i18n.locale.value)">{{ terrace.body.title }}</NuxtLink>
				<NuxtLink :to="$localePath(turzovia.body.id, i18n.locale.value)">{{ turzovia.body.title }}</NuxtLink>
				<NuxtLink :to="$localePath(tips.body.id, i18n.locale.value)">{{ tips.body.title }}</NuxtLink>
				<!-- <NuxtLink :to="$localePath('contact')">Kontakt</NuxtLink> -->
			</nav>
			|
			<section class="locales">
				<span
					:class="{'active-locale': locale.code == i18n.locale.value}"
					v-for="locale in i18n.locales.value"
					:key="locale.code"
					@click="switchLocale(locale.code)"
				>
					{{ locale.code }}
				</span>
			</section>
		</section>
	</header>
</template>

<style scoped>
.header-app {
	color: var(--color03);
	background: var(--color01);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1.8rem 1.5rem;

	a {
		text-decoration: none;
		color: var(--color03);
	}

	& > a {}
	.nav-locale {
		font-size: 1.15rem;
		display: flex;
		gap: 1rem;
		align-items: center;

		nav {
			display: flex;
			gap: .5rem;

			a {
				transition: 250ms;
				padding: .85rem 1rem;
				border-radius: 3rem;

				&:hover, &.router-link-active {
					cursor: pointer;
					background: var(--color03);
					color: var(--color01);
				}
			}
		}
		.locales {
			display: flex;
			gap: .5rem;
			text-transform: uppercase;

			& > span {
				font-size: 1rem;
				
				&:hover, &.active-locale {
					cursor: pointer;
					text-decoration: underline;
				}
			}
		}
	}
}
</style>
