<script setup>
	defineProps({
		room: Object
	})
	let priceS = ref(null)
	const switchPrice = (val = "onePerson") => {
		priceS.value = val	
	}
	switchPrice()
</script>

<template>
	<section class="room">
		<h1 class="title">{{ room.name }}</h1>
		<section class="photos-and-details">
			<Galleria :value="room.photos" :numVisible="5" class="room-gallery">
				<template #item="photo">
					<img :src="photo.item" alt="">
				</template>
				<template #thumbnail="photo">
					<img :src="photo.item" alt="" class="thumbnail">
				</template>
			</Galleria>
			<section class="details">
				<div class="description">{{ room.description }}</div>
				<section class="price-btn">
					<section class="price-container">
						<ButtonGroup>
							<Button label="1os" @click="switchPrice('onePerson')" :class="{'active': priceS == 'onePerson'}" />
							<Button label="2os" @click="switchPrice('twoPersons')" :class="{'active': priceS == 'twoPersons'}" />
						</ButtonGroup>
						<div class="price">{{ room.price[priceS] }}€</div>
					</section>
					<a :href="room.bookingLink.url" class="btn">{{ room.bookingLink.text }}</a>
				</section>
			</section>
		</section>
	</section>
</template>

<style scoped>
	.room {
		padding: 4rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.photos-and-details {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			@media(min-width: 1200px) {
				flex-direction: row;
			}

			.details {
				display: flex;
				flex-direction: column;
				gap: 2rem;

				@media(min-width: 1200px) {
					width: 50%;
				}

				.description {
					text-align: justify;
				}
				.price-btn {
					display: flex;
					flex-direction: column;
					gap: 1rem;

					@media(min-width: 600px) {
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
					}

					.price-container {
						display: flex;
						align-items: center;
						gap: 2rem;

						button {
							padding: 1rem 2rem;
							background: var(--color03);
							border-color: var(--color01);
							color: var(--color01);
							transition: 250ms;
							opacity: 0.7;
							
							&:hover, &.active {
								background: var(--color01);
								color: var(--color03);
								opacity: 1;
							}
						}
						.price {
							font-size: 3rem;
							color: var(--color01);
						}
					}
				}
				.btn {
					padding: .7rem 2.5rem;
				}
			}
			.p-galleria {
				@media(min-width: 1200px) {
					width: 50%;
				}
			}
			.p-galleria-item {
				img {
					 width: 100%; 
					 height: 50vh; 
					 object-fit: cover;
				}
			}
			.p-galleria-thumbnail {
				img {
					width: 5rem; 
					height: 5rem; 
					object-fit: cover;
				}
			}
		}
	}
</style>
