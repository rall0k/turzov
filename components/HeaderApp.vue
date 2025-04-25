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
let showOverlayMenu = ref(false)
</script>

<template>
	<header class="header-app-pc">
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

	<header class="header-app-mobil">
		<section class="header-app-mobil-container">
			<NuxtLink :to="$localePath(home.body.id, i18n.locale.value)">Penzion Turzov</NuxtLink>
			<button class="pi pi-bars" @click="showOverlayMenu = true"></button>
		</section>
		
		<section class="overlay" v-if="showOverlayMenu">
			<header>
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
				<button class="pi pi-times" @click="showOverlayMenu = false"></button>
			</header>
			<nav>
				<NuxtLink @click="showOverlayMenu = false" :to="$localePath(home.body.id, i18n.locale.value)">{{ home.body.title }}</NuxtLink>
				<NuxtLink @click="showOverlayMenu = false" :to="$localePath(accommodation.body.id, i18n.locale.value)">{{ accommodation.body.title }}</NuxtLink>
				<NuxtLink @click="showOverlayMenu = false" :to="$localePath(restaurant.body.id, i18n.locale.value)">{{ restaurant.body.title }}</NuxtLink>
				<NuxtLink @click="showOverlayMenu = false" :to="$localePath(terrace.body.id, i18n.locale.value)">{{ terrace.body.title }}</NuxtLink>
				<NuxtLink @click="showOverlayMenu = false" :to="$localePath(turzovia.body.id, i18n.locale.value)">{{ turzovia.body.title }}</NuxtLink>
				<NuxtLink @click="showOverlayMenu = false" :to="$localePath(tips.body.id, i18n.locale.value)">{{ tips.body.title }}</NuxtLink>
			</nav>
		</section>
	</header>
</template>

<style scoped>
.header-app-mobil {
	@media(min-width: 1000px) {
		display: none;
	}
	.header-app-mobil-container {
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
		button {
			border: none;
			background: none;
			color: var(--color03);
			&:hover {
				cursor: pointer;
			}
		}
	}
	.overlay {
		width: 100%;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		background: var(--color01);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		
		& > header {
			padding: 1.8rem 1.5rem;
			position: absolute;
			top: 0;
			right: 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			.locales {
				color: var(--color03);
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
			.pi-times {
				border: none;
				background: none;
				color: var(--color03);
	
				&:hover {
					cursor: pointer;
				}
			}
		}
		
		nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: .25rem;

			a {
				color: var(--color03);
				text-decoration: none;
				padding: .85rem 1.5rem;
				background: var(--color01);
				border-radius: 5rem;
				transition: 250ms;

				&:hover, &.router-link-active {
					background: var(--color03);
					color: var(--color01);
				}
			}
		}
	}
}

.header-app-pc {
	color: var(--color03);
	background: var(--color01);
	display: none;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 1.8rem 1.5rem;

	@media(min-width: 1000px) {
		display: flex;
	}

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
				border-radius: 5rem;

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
