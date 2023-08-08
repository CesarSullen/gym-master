<script setup>
	const cards = [
		{
			id: 1,
			title: "Start with a diet",
			redirect: "#",
			image: "../../public/icon.png",
		},
		{
			id: 2,
			title: "Superior train",
			redirect: "#",
			image: "../../public/cards-images/superior-train.png",
		},
		{
			id: 3,
			title: "Inferior train",
			redirect: "#",
			image: "../../public/cards-images/inferior-train.png",
		},
		{
			id: 4,
			title: "Arms",
			redirect: "#",
			image: "../../public/cards-images/arms.png",
		},
		{
			id: 5,
			title: "Chest",
			redirect: "#",
			image: "../../public/cards-images/chest.png",
		},
		{
			id: 6,
			title: "Back",
			redirect: "#",
			image: "../../public/cards-images/back.png",
		},
		{
			id: 7,
			title: "Abs",
			redirect: "#",
			image: "../../public/cards-images/abs.png",
		},
		{
			id: 8,
			title: "Legs",
			redirect: "#",
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
				<div class="card-left-side">
					<h3 class="card-title">{{ card.title }}</h3>
					<button class="ghost-button">
						<router-link :to="card.redirect">GO!</router-link>
					</button>
				</div>
				<img :src="card.image" />
			</div>
		</div>
	</div>
	<blockquote>Build your body part by part</blockquote>
</template>
