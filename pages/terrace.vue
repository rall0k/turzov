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
</script>

<template>
	<div>
		{{ terrace.body.title }}
	</div>
</template>

<style scoped></style>
