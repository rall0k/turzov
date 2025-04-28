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
	color: var(--color02);
	line-height: 32px;
}
.content {}
h1.title, h2.title {
	font-weight: 500;
	color: var(--color01);
	font-size: 3rem;
	justify-content: center;
	display: flex;
	align-items: center;
	gap: 1rem;
	text-align: center;

	&:after, &:before {
		display: block;
		content: "";
		background: var(--color01);
		width: 3.5rem;
		height: .2rem;
	}
}
h2.title {
	font-size: 2rem;
}
.btn {
	display: inline-block;
	color: var(--color03);
	text-decoration: none;
	background: var(--color01);
	padding: .5rem 2rem;
	border-radius: 10rem;
	transition: 250ms;
	font-size: 1.1rem;
	align-self: start;

	&:hover {
		opacity: .9;
	}
}

/* .p-carousel-content {
	position: relative;
	height: 50vh;
	overflow: hidden;

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
} */
</style>
