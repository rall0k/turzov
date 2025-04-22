<script setup>
	const i18n = useI18n()
	const { data: accommodation }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/accommodation`).first())

	defineI18nRoute({
		paths: {
			sk: '/ubytovanie',
			en: '/accommodation',
		}
	})
	definePageMeta({
		layout: 'public',
	})
	useSeoMeta({
		title: accommodation.value.body.title
	})
</script>

<template>
	<div>
		{{ accommodation.body.title }}
	</div>
</template>

<style scoped></style>
