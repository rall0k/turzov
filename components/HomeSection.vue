<script setup>
	const i18n = useI18n()

	defineProps({
		section: Object
	})
</script>

<template>
	<section class="home-section">
		<div class="title">{{ section.title }}</div>
		<div class="description">{{ section.description }}</div>
		<section class="photos">
			<img v-for="photo in section.photos" :src="photo" alt="">
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

		.title {
			color: var(--color01);
			font-size: 3rem;
			justify-content: center;
			display: flex;
			align-items: center;
			gap: 1rem;

			&:after, &:before {
				display: block;
				content: "";
				background: var(--color01);
				width: 3.5rem;
				height: .2rem;
			}
		}
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
