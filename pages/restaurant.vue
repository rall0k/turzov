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
	let day = now.getDay()
	if(day == 0) day = 6
	else if(day == 6) day = 0 
</script>

<template>
	<section class="content">
		<h1 class="title">{{ restaurant.body.title }}</h1>
		<div class="description">{{ restaurant.body.description }}</div>
		<section class="photos">
			<img :src="photo" alt="" v-for="photo in restaurant.body.photos" :key="photo">
		</section>
		<section class="opening-hours-container">
			<h2 class="title">{{ restaurant.body.openingHoursTitle }}</h2>
			<section class="opening-hours">
				<section :class="{ 'row': true, 'current-day': index == day}" v-for="openingHour, index in restaurant.body.openingHours" :key="openingHour">
					<span :class="{ 'day': true }">
						<span class="pi pi-arrow-right" v-if="index == day"></span>
						{{ openingHour.day }}
					</span>
					<span class="time">{{ openingHour.from }} - {{ openingHour.to }}</span>
				</section>
			</section>
		</section>
		<section class="menu">
			<h2 class="title">{{ restaurant.body.menuTitle }}</h2>
			<Carousel :value="restaurant.body.menu" :responsiveOptions="responsiveOptionsMenuCarousel" :showNavigators="false" :numVisible="2" :numScroll="1">
				<template #item="menu">
					<section class="page">
						<img :src="menu.data" />
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
				
				.row {
					border-top: 1px solid var(--color02);
					padding: .5rem 0;
					display: flex;
					justify-content: space-between;
					width: 50vw;
					
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
						border-bottom: 1px solid var(--color02);
					}
				}
			}
		}
	}
</style>
