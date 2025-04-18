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
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Ropa+Sans:ital@0;1&family=Special+Elite&family=Vollkorn+SC:wght@400;600;700;900&display=swap');

:root {
	--color01: #B98147;
	--color02: #575757;
	--color03: #FFFFFF;
	--color04: #F8F8F8;
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
