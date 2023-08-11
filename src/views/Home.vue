<script setup>
	import CardComponent from "../components/CardComponent.vue";

	const cards = [
		{
			id: 1,
			title: "Start with a diet",
			redirect: "#",
			image: "../../public/icons/app-icon.png",
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

	<CardComponent :cards="cards"></CardComponent>

	<blockquote>Build your body part by part</blockquote>
</template>
