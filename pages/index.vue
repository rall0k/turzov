<script setup>
	const i18n = useI18n()
	const { data: home }  = await useAsyncData(() => queryCollection('content').path(`/${i18n.locale.value}/pages/home`).first())

	definePageMeta({
		layout: 'public',
	})
	useSeoMeta({
		title: home.value.body.title
	})
	let visible = ref(home.value.body.dialog.visible)
</script>

<template>
	<Dialog class="info-dialog" v-model:visible="visible" modal>
		<template #header>
			<section class="header-container">
				<span class="pi pi-info-circle"></span>
				<span class="title">{{ home.body.dialog.title }}</span>
			</section>
		</template>
		<p>{{ home.body.dialog.text }}</p>
	</Dialog>
	<section class="content">
		<HomeCarousel :carousel="home.body.carousel" />
		<section class="home-sections">
			<HomeSection v-for="section in home.body.sections.filter(section => section.active)" :section="section" :key="section"/>
		</section>
	</section>
</template>

<style>
	.p-dialog-header {
		padding-bottom: 1rem;
	}
	.info-dialog {
		font-family: "Ropa Sans", sans-serif;
		font-size: 1.2rem;
		color: var(--color02);
		width: 50rem;
		margin: 2rem;


		.header-container {
			display: flex;
			gap: .5rem;
			align-items: center;

			.title {
				font-size: 1.3rem;
				font-weight: bold;
			}
		}
	}
</style>
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
