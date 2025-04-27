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
	<main>
		<HomeCarousel :carousel="home.body.carousel" />
		<section class="home-sections">
			<HomeSection v-for="section in home.body.sections" :section="section" :key="section"/>
		</section>
	</main>
</template>

<style scoped>
	.home-sections {
		.home-section {
			background: var(--color03);
			&:nth-child(odd) {
				background: var(--color04);
			}
		}
	}
</style>
