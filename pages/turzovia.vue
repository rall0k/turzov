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
</script>

<template>
	<div>
		{{ turzovia.body.title }}
	</div>
</template>

<style scoped></style>
