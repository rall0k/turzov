<script setup>
	const i18n = useI18n()

	defineProps({
		section: Object
	})
</script>

<template>
	<section class="home-section">
		<h1 class="title">{{ section.title }}</h1>
		<div class="description">{{ section.description }}</div>
		<section class="photos">
			<img v-for="photo in section.photos" :src="`${photo}`" alt="" :key="photo">
			<!-- <img v-for="photo in section.photos" :src="`${useRuntimeConfig().app.baseURL}${photo}`" alt="" :key="photo"> -->
		</section>
		<NuxtLink class="btn" :to="$localePath(section.link.page, $i18n.locale.value)">{{ section.link.text }}</NuxtLink>
	</section>
</template>

<style scoped>
	.home-section {
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		padding: 4rem;

		.description {
			text-align: justify;
		}
		.photos {
			display: flex;
			gap: 1rem;
			justify-content: center;
			flex-wrap: wrap;

			img {
				width: calc(100vw/4);
				height: calc(100vw/4);
				object-fit: cover;
				flex-grow: 1;
			}
		}
		.btn {
			align-self: center;
		}
	}
</style>
