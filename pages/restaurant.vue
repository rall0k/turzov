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
</script>

<template>
	<div>
		{{ restaurant.body.title }}
	</div>
</template>

<style scoped></style>
