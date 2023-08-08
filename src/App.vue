<script setup>
	import { ref } from "vue";

	const barActive = ref(false);

	// functions

	const opennavBar = () => {
		barActive.value = !barActive.value;
	};
</script>

<template>
	<div class="full-bar">
		<div class="title">
			<div :class="barActive ? 'toggle-burger' : 'burger'" @click="opennavBar">
				<div class="line-1"></div>
				<div class="line-2"></div>

				<div class="line-3"></div>
			</div>

			<router-link to="/">
				<h3>GYM Master</h3>
			</router-link>
			<router-link :to="{ name: 'Profile' }">
				<img src="../public/icon.png" alt="App icon" />
			</router-link>
		</div>

		<div :class="barActive ? 'nav-bar-active' : 'nav-bar'">
			<ul>
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Profile' }" 
						>Profile</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Diets' }" >Diets</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Routines' }" 
						>Routines</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Statistics' }" 
						>Statistics</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Settings' }" 
						>Settings</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'About' }" >About</router-link>
				</li>
			</ul>
		</div>
	</div>
	<router-view />

	<footer>
		<div class="icon">GYM Master</div>

		<div class="social">Twitter, Instaram, Facebook (icons)</div>

		<div class="copy">©2023(fake)</div>

		<div>⛔All the images were taken randomly on Google⛔</div>
	</footer>
</template>
