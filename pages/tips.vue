<script setup>
	const i18n = useI18n()
	const { data: tips }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/tips`).first())

	defineI18nRoute({
		paths: {
			sk: '/tipy-na-vylet',
			en: '/tips',
		}
	})
	definePageMeta({
		layout: 'public',
	})
	useSeoMeta({
		title: tips.value.body.title
	})
</script>

<template>
	<section class="content">
		<h1 class="title">{{ tips.body.title }}</h1>
		<div class="description">{{ tips.body.description }}</div>
		<a class="btn" :href="tips.body.listOfTipsLink.url" target="_blank">{{ tips.body.listOfTipsLink.title }}</a>
		<section class="list">
			<TipCard :tip="tip" v-for="tip in tips.body.list" :key="tip"/>
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
		.btn {
			align-self: center;
		}
		.list {
			columns: 1;
			gap: 1rem;

			@media(min-width: 1000px) {
				columns: 2;
			}
			@media(min-width: 1400px) {
				columns: 3;
			}
			@media(min-width: 1900px) {
				columns: 4;
			}
		}
	}
</style>
