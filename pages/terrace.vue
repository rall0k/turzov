<script setup>
	const i18n = useI18n()
	const { data: terrace }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/terrace`).first())

	defineI18nRoute({
		paths: {
			sk: '/terasa-a-pozicovna',
			en: '/terrace',
		}
	})
	definePageMeta({
		layout: 'public',
	})
	useSeoMeta({
		title: terrace.value.body.title
	})

	const now = new Date()
	let day = now.getDay() - 1
	if (day < 0) day = 6
</script>

<template>
	<section class="content">
		<h1 class="title">{{ terrace.body.title }}</h1>
		<div class="description">{{ terrace.body.description }}</div>
		<section class="photos">
			<img :src="photo" alt="" v-for="photo in terrace.body.photos" :key="photo">
		</section>
		<section class="opening-hours-container">
			<h2 class="title">{{ terrace.body.openingHoursTitle }}</h2>
			<div class="info">{{ terrace.body.openingHoursInfo }}</div>
			<section class="opening-hours">
				<section :class="{ 'row': true, 'current-day': index == day}" v-for="openingHour, index in terrace.body.openingHours" :key="openingHour">
					<span :class="{ 'day': true }">
						<span class="pi pi-arrow-right" v-if="index == day"></span>
						{{ openingHour.day }}
					</span>
					<span class="time">{{ openingHour.fromTo }}</span>
				</section>
			</section>
		</section>
		<section class="price-list-container">
			<h2 class="title">{{ terrace.body.priceListTitle }}</h2>
			<DataTable class="price-list" :value="terrace.body.priceList">
				<Column field="name" header=""></Column>
				<Column field="price" header="" class="price"></Column>
			</DataTable>
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
		.price-list-container {
			.price-list {
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

<style>
.price-list-container {
	.price-list {
		width: 50vw;
		margin: 0 auto;
		.price {
			text-align: right;
		}
		td {
			color: var(--color02);
		}
	}
}
</style>
