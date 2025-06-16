<script setup>
	const i18n = useI18n()

	defineProps({
		carousel:Object
	})
</script>

<template>
	<Carousel :value="carousel.slides" :showNavigators="false" :numVisible="1" :numScroll="1" circular :autoplayInterval="carousel.autoplayInterval">
		<template #item="slide">
			<section class="slide">
				<!-- {{ `${useRuntimeConfig().app.baseURL}${slide.data.photo}` }} -->
				<img :src="`${useRuntimeConfig().app.baseURL}${slide.data.photo}`" alt="">
				<footer class="footer-slide">
					<section class="text">
						<div class="title">{{ slide.data.title }}</div>
						<div class="description">{{ slide.data.description }}</div>
					</section>
					<NuxtLink :to="$localePath(slide.data.link.page, i18n.locale.value)" class="btn link">{{ slide.data.link.text }}</NuxtLink>
				</footer>
			</section>
		</template>
	</Carousel>
</template>

<style scoped>
	.slide {
		position: relative;

		img {
			width: 100%;
			height: 90vh;
			object-fit: cover;
		}
		.footer-slide {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			color: var(--color03);
			padding: 2.5rem;
			position: absolute;
			bottom: 0;
			z-index: 15;
			background: linear-gradient(360deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);

			.text {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				.title {
					font-size: 2.5rem;
				}
				.description {
					line-height: 1.8rem;
					font-weight: 100;
					text-align: justify;
				}
			}
		}
	}
</style>
