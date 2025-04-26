<script setup>
	import 'primeicons/primeicons.css'
</script>

<template>
	<NuxtLayout>
		<NuxtPage />	
	</NuxtLayout>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}
body {
	font-size: 10px;
}

.p-carousel-content {
	position: relative;

	&:hover {
		.p-carousel-next-button, .p-carousel-prev-button {
			opacity: 1;
		}
	}
}
.p-carousel-next-button, .p-carousel-prev-button {
	position: absolute !important;
	top: 1rem;
	width: 2rem !important;
	height: 2rem !important;
	color: var(--color01) !important;
	display: flex;
	border-radius: 50%;
	background: var(--color03) !important;
	opacity: 0;
	z-index: 20;
	transition: 250ms !important;
}
.p-carousel-prev-button {
	left: 1rem;
}
.p-carousel-next-button {
	left: 3.5rem;
}
</style>
