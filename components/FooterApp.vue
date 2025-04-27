<script setup>
	const i18n = useI18n()

	const { data: footerApp }  = await useAsyncData("footerApp", () => queryCollection('content').path(`/${i18n.locale.value}/footer-app`).first())
</script>

<template>
	<footer class="footer-app">
		<ClientOnly>
			<iframe 
				class="map"
				:src="`https://maps.google.com/maps?q=${footerApp.body.address}&z=16&output=embed`"
				:width="footerApp.body.map.width"
				:height="footerApp.body.map.height"
				style="border:0;"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			/>
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
		align-self: stretch;

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
				align-items: center;

				a {
					color: var(--color03);
					text-decoration: none;
				}
			}
		}
	}
}
</style>
