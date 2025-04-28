<script setup>
	defineProps({
		tip: Object
	})
</script>

<template>
    <Card class="tip-card">
		<template #header>
			<img class="photo" alt="" :src="tip.photo" />
		</template>
        <template #title>
			<div class="title">{{ tip.title }}</div>
		</template>
		<template #subtitle>
			<div class="subtitle">{{ tip.subtitle }}</div>
		</template>
        <template #content>
            <div class="description">{{ tip.description }}</div>
		</template>
		<template #footer>
			<section class="info">
				<Tag severity="success" rounded icon="pi pi-directions" :value="tip.distance"></Tag>
			</section>
		</template>
    </Card>
</template>

<style scoped>
	.tip-card {
		break-inside: avoid;
		overflow: hidden;
		margin-bottom: 1rem;

		.photo {
			width: 100%;
		}
		.title {
			font-size: 1.7rem;
			color: var(--color01);
		}
		.subtitle {
			font-size: 1.1rem;
		}
		.description {
			color: var(--color02);
			text-align: justify;
		}
		.info {
			display: flex;
			gap: 1rem;
		}
	}
</style>
