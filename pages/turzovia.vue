<script setup>
	const i18n = useI18n()
	const { data: turzovia }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/turzovia`).first())

	defineI18nRoute({
		paths: {
			sk: '/turzovia',
			en: '/turzovia',
		}
	})
	definePageMeta({
		layout: 'public',
	})
	useSeoMeta({
		title: turzovia.value.body.title
	})

	const now = new Date()
	let day = now.getDay() - 1
	if (day < 0) day = 6
</script>

<template>
	<section class="content">
		<h1 class="title">{{ turzovia.body.title }}</h1>
		<div class="description">{{ turzovia.body.description }}</div>
		<section class="photos">
			<img :src="`${useRuntimeConfig().app.baseURL}${photo}`" alt="" v-for="photo in turzovia.body.photos" :key="photo">
		</section>
		<section class="opening-hours-container">
			<h2 class="title">{{ turzovia.body.openingHoursTitle }}</h2>
			<div class="info">{{ turzovia.body.openingHoursInfo }}</div>
			<section class="opening-hours">
				<section :class="{ 'row': true, 'current-day': index == day}" v-for="openingHour, index in turzovia.body.openingHours" :key="openingHour">
					<span :class="{ 'day': true }">
						<span class="pi pi-arrow-right" v-if="index == day"></span>
						{{ openingHour.day }}
					</span>
					<span class="time">{{ openingHour.fromTo }}</span>
				</section>
			</section>
		</section>
		<section class="price-list-container">
			<h2 class="title">{{ turzovia.body.priceListTitle }}</h2>
			<DataTable class="price-list" :value="turzovia.body.priceList">
				<Column field="name" header=""></Column>
				<Column field="price" header="" class="price"></Column>
			</DataTable>
		</section>
		<section class="rules">
			<h2 class="title">{{ turzovia.body.rules.title }}</h2>
			<a class="btn" :href="`${useRuntimeConfig().app.baseURL}${turzovia.body.rules.url}`">{{ turzovia.body.rules.label }}</a>
		</section>
		<section class="info">
			<img :src="`${useRuntimeConfig().app.baseURL}${turzovia.body.info.ksk}`" alt="">
			<div class="text">
				<span v-for="text in turzovia.body.info.text" :key="text">
					{{ text }}
				</span>
			</div>
			<img :src="`${useRuntimeConfig().app.baseURL}${turzovia.body.info.krt}`" alt="">
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
		.rules {
			display: none;
			flex-direction: column;
			gap: 2rem;

			.btn {
				align-self: center;
			}
		}
		.info {
			/* margin-top: 2rem; */
			display: grid;
			grid-template-columns: repeat(1, auto);
			justify-content: center;
			justify-items: center;
			align-items: center;
			gap: 1rem;

			@media(min-width: 970px) {
				grid-template-columns: repeat(3, auto);
			}

			img {
				width: 15rem;
			}
			.text {
				--colorInfo: dodgerblue;
				color: var(--colorInfo);
				border: none;
				border-top: 2px dotted var(--colorInfo);
				border-bottom: 2px dotted var(--colorInfo);
				padding: 1rem 0;
				
				@media(min-width: 970px) {
					padding: 0 1rem;
					border: none;
					border-left: 2px dotted var(--colorInfo);
					border-right: 2px dotted var(--colorInfo);
				}
				display: flex;
				flex-direction: column;
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
