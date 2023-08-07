<script setup>
	const cards = [
		{
			id: 1,
			name: "Small advances are better than nothing",
			image: "../../public/icon.png",
		},
		{
			id: 2,
			name: "Superior train",
			image: "../../public/cards-images/superior-train.png",
		},
		{
			id: 3,
			name: "Inferior train",
			image: "../../public/cards-images/inferior-train.png",
		},
		{
			id: 4,
			name: "Arms",
			image: "../../public/cards-images/arms.png",
		},
		{
			id: 5,
			name: "Chest",
			image: "../../public/cards-images/chest.png",
		},
		{
			id: 6,
			name: "Back",
			image: "../../public/cards-images/back.png",
		},
		{
			id: 7,
			name: "Abs",
			image: "../../public/cards-images/abs.png",
		},
		{
			id: 8,
			name: "Legs",
			image: "../../public/cards-images/legs.png",
		},
	];
</script>

<template>
	<h1>Home</h1>
	<blockquote>The greatest strenght is in your mind</blockquote>
	<div class="cards-container">
		<div v-for="card in cards">
			<div class="card">
				<p>{{ card.name }}</p>
				<img :src="card.image" />
			</div>
		</div>
	</div>
	<blockquote>Build your body part by part</blockquote>
</template>
