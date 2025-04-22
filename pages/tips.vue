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
	<div>
		{{ tips.body.title }}
	</div>
</template>

<style scoped></style>
