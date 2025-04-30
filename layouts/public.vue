<script setup>
</script>

<template>
	<section id="app">
		<HeaderApp />
		<main>
			<slot />
		</main>
		<FooterApp />
	</section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ropa+Sans:ital@0;1&display=swap');

:root {
	--color01: #B98147;
	--color02: #575757;
	--color03: #FFFFFF;
	--color04: #F8F8F8;
	--color05: #cbd5e1;
}

#app {
	font-size: 1.2rem;
	font-family: "Ropa Sans", sans-serif;
	display: flex;	
	flex-direction: column;
	min-height: 100vh;

	main {
		flex-grow: 2;
	}
}
</style>
