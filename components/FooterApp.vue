<script setup>
	const i18n = useI18n()

	const { data: footerApp }  = await useAsyncData("footerApp", () => queryCollection('content').path(`/${i18n.locale.value}/footer-app`).first())
</script>

<template>
	<footer class="footer-app">
		<ClientOnly>
			<iframe class="map" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=turzovska%201822%20Gelnica+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
		</ClientOnly>
		<section class="contact">
			<div class="title">{{ footerApp.body.title }}</div>
			<section class="group">
				<div>
					<span class="pi pi-phone"></span>
					<span>{{ footerApp.body.phone }}</span>
				</div>
				<div>
					<span class="pi pi-envelope"></span>
					<span>{{ footerApp.body.email }}</span>
				</div>
				<div>
					<span class="pi pi-facebook"></span>
					<a :href="footerApp.body.facebook.href" target="__blank">{{ footerApp.body.facebook.title }}</a>
				</div>
				<div>
					<span class="pi pi-map-marker"></span>
					<span>{{ footerApp.body.address }}</span>
				</div>
			</section>
		</section>
	</footer>
</template>

<style scoped>
.footer-app {
	background: var(--color01);
	color: var(--color03);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10vw;

	@media(min-width: 800px) {
		flex-direction: row;
	}

	.map {
		width: 100%;

		@media(min-width: 800px) {
			width: 50%;
		}
	}
	
	.contact {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-bottom: 10vw;

		@media(min-width: 800px) {
			padding: 0;
		}

		.title {
			font-size: 2.5rem;
		}
		.group {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			div {
				display: flex;
				gap: 1rem;

				a {
					color: var(--color03);
					text-decoration: none;
				}
			}
		}
	}
}
</style>
