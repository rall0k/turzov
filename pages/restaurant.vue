<script setup>

	const i18n = useI18n()
	const { data: restaurant }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/restaurant`).first())

	defineI18nRoute({
		paths: {
			sk: '/restauracia',
			en: '/restaurant',
		}
	})
	definePageMeta({
		layout: 'public',
	})
	useSeoMeta({
		title: restaurant.value.body.title
	})

	const responsiveOptionsMenuCarousel = ref([
		{
			breakpoint: '1200px',
			numVisible: 1,
			numScroll: 1
		},
	])
	const now = new Date()
	let day = now.getDay() - 1
	if (day < 0) day = 6
	
</script>

<template>
	<section class="content">
		<h1 class="title">{{ restaurant.body.title }}</h1>
		<div class="description">{{ restaurant.body.description }}</div>
		<section class="photos">
			<img :src="`${useRuntimeConfig().app.baseURL}${photo}`" alt="" v-for="photo in restaurant.body.photos" :key="photo">
		</section>
		<section class="opening-hours-container">
			<h2 class="title">{{ restaurant.body.openingHoursTitle }}</h2>
			<section class="opening-hours">
				<section :class="{ 'row': true, 'current-day': index == day}" v-for="openingHour, index in restaurant.body.openingHours" :key="openingHour">
					<span :class="{ 'day': true }">
						<span class="pi pi-arrow-right" v-if="index == day"></span>
						{{ openingHour.day }}
					</span>
					<span class="time">{{ openingHour.fromTo }}</span>
				</section>
			</section>
		</section>
		<section class="menu">
			<h2 class="title">{{ restaurant.body.menuTitle }}</h2>
			<Carousel :value="restaurant.body.menu" :responsiveOptions="responsiveOptionsMenuCarousel" :showNavigators="true" :numVisible="2" :numScroll="1">
				<template #item="menu">
					<section class="page">
						<!-- <img :src="menu.data" /> -->
						<img :src="`${useRuntimeConfig().app.baseURL}${menu.data.replace(/^\/+/, '')}`" />
					</section>
				</template>
			</Carousel>
		</section>
	</section>
</template>

<style scoped>
	.content {
		padding: 4rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.description {
			text-align: justify;
		}
		.photos {
			display: flex;
			gap: 1rem;
			flex-wrap: wrap;

			img {
				width: calc(100vw / 4);
				height: calc(100vw / 4);
				object-fit: cover;
				flex-grow: 1;
			}
		}
		.menu {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			.page {
				display: flex;
				img {
					width: 100%;
				}
			}
		}
		.opening-hours-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 2rem;

			.opening-hours {
				display: flex;
				flex-direction: column;
				width: 100%;
				@media(min-width: 800px) {
					width: 80%;
				}
				@media(min-width: 1100px) {
					width: 70%;
				}
				@media(min-width: 1200px) {
					width: 50%;
				}
				
				.row {
					border-top: 1px solid var(--color05);
					padding: .75rem;
					display: flex;
					justify-content: space-between;

					&.current-day {
						color: rgb(44, 226, 44);
					}

					.day {
						display: flex;
						align-items: center;
						gap: 1rem;
						.pi-arrow-right {}

					}
					.time {}

					&:last-child {
						border-bottom: 1px solid var(--color05);
					}
				}
			}
		}
	}
</style>
