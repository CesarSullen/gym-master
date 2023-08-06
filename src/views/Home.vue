<script setup>
	const cards = [
		{
			name: "Small advances are better than nothing",
		},
		{
			name: "Superior train",
		},
		{
			name: "Lower train",
		},
		{
			name: "Arms",
		},
		{
			name: "Chest",
		},
		{
			name: "Back",
		},
		{
			name: "Abs",
		},
		{
			name: "Legs",
		},
		{
			name: "Running",
		},
	];
</script>

<template>
	<h1>Home</h1>
	<h2 class="cards-title">The greatest strenght is in the mind</h2>
	<div class="cards-container" v-for="card in cards">
		<div class="card">
			<p>{{ card.name }}</p>
		</div>
	</div>

	<h2 class="cards-title">Build your body part by part</h2>
</template>
