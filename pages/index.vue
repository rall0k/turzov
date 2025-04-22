<script setup>
	const i18n = useI18n()
	const { data: home }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/home`).first())

	definePageMeta({
		layout: 'public',
	})
	useSeoMeta({
		title: home.value.body.title
	})
</script>

<template>
	<div>
		{{ home.body.title }}
	</div>
</template>

<style scoped></style>
