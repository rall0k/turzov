<script setup>
const i18n = useI18n()

</script>

<template>
	<header class="header-app">
		<NuxtLink :to="$localePath('index', i18n.locale.value)">Penzión Turzov</NuxtLink>
		<section class="nav-locale">
			<nav>
				<NuxtLink :to="$localePath('accommodation', i18n.locale.value)">Ubytovanie</NuxtLink>
				<NuxtLink :to="$localePath('restaurant', i18n.locale.value)">Reštaurácia</NuxtLink>
				<NuxtLink :to="$localePath('terrace', i18n.locale.value)">Terasa a požičovňa</NuxtLink>
				<NuxtLink :to="$localePath('turzovia', i18n.locale.value)">TurzoVIA</NuxtLink>
				<NuxtLink :to="$localePath('tips', i18n.locale.value)">Tipy na výlet</NuxtLink>
				<NuxtLink :to="$localePath('contact')">Kontakt</NuxtLink>
			</nav>
			<section class="locales">
				<NuxtLink v-for="locale in i18n.locales.value" :to="$localePath('index', locale.code)">
					<img :src="locale.flag" alt="">
				</NuxtLink>
			</section>
		</section>
	</header>
</template>

<style scoped>
.header-app {
	background: var(--color01);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1.8rem 1.5rem;

	a {
		text-decoration: none;
		color: var(--color03);
	}

	& > a {

	}
	.nav-locale {
		display: flex;
		gap: 1rem;

		nav {
			display: flex;
			gap: 1rem;

			a {
				transition: 250ms;

				&:hover {
					cursor: pointer;
					opacity: .5;
				}
			}
		}
		.locales {
			display: flex;
			gap: .5rem;

			img { 
				width: 2rem;
				height: 1.2rem;
			}
		}
	}
}
</style>
