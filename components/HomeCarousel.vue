<script setup>
	const i18n = useI18n()

	defineProps({
		carousel:Object
	})
</script>

<template>
	<Carousel :value="carousel.slides" :numVisible="1" :numScroll="1" circular :autoplayInterval="carousel.autoplayInterval">
		<template #item="slide">
			<section class="slide">
				<img :src="slide.data.photo" alt="">
				<footer class="footer-slide">
					<section class="text">
						<div class="title">{{ slide.data.title }}</div>
						<div class="description">{{ slide.data.description }}</div>
					</section>
					<NuxtLink :to="$localePath(slide.data.link.url, i18n.locale.value)" class="link">{{ slide.data.link.text }}</NuxtLink>
				</footer>
			</section>
		</template>
	</Carousel>
</template>

<style scoped>
	.slide {
		img {
			width: 100%;
			height: 50vh;
			object-fit: cover;
		}
	}
</style>
