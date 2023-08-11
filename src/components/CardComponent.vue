<script setup>
	import { defineProps } from "vue";

	const props = defineProps({
		cards: {
			type: Array,
			required: true,
		},
	});
</script>

<template>
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
</template>
