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
	<section class="content">
		<RoomCard :room="room" v-for="room in accommodation.body.rooms" :key="room" class="room-card" />
	</section>
</template>

<style scoped>
	.content {
		.room-card {
			background: var(--color04);

			&:nth-child(odd) {
				background: var(--color03);
			}
		}
	}
</style>
