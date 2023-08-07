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

			<img src="../public/icon.png" alt="" />
			<router-link to="/">
				<h4>GYM Master</h4>
			</router-link>
		</div>

		<div :class="barActive ? 'nav-bar-active' : 'nav-bar'">
			<ul>
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'Profile' }" class="link"
						>Profile</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Routines' }" class="link"
						>Routines</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Statistics' }" class="link"
						>Statistics</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Settings' }" class="link"
						>Settings</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'About' }" class="link">About</router-link>
				</li>
			</ul>
		</div>
	</div>
	<router-view />

	<footer>
		<div class="icon">GYM Master</div>

		<div class="social">Twitter, Instaram, Facebook (icons)</div>

		<div class="copy">©2023</div>
	</footer>
</template>
