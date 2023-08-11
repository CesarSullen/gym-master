<script setup>
	import { ref } from "vue";

	const barActive = ref(false);

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
				<img src="../../public/profile-pics/01.png" alt="App icon" />
			</router-link>
		</div>

		<div :class="barActive ? 'nav-bar-active' : 'nav-bar'">
			<ul>
				<li>
					<router-link to="/">
						<img src="../../public/icons/home.png" alt="icon" />
						Home</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Profile' }">
						<img src="../../public/icons/profile.png" alt="icon" />
						Profile</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Diets' }">
						<img src="../../public/icons/diets.png" alt="icon" />
						Diets</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Routines' }">
						<img src="../../public/icons/routines.png" alt="icon" />
						Routines</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Statistics' }">
						<img src="../../public/icons/statistics.png" alt="icon" />
						Statistics</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Settings' }">
						<img src="../../public/icons/settings.png" alt="icon" />
						Settings</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'About' }">
						<img src="../../public/icons/about.png" alt="icon" />
						About</router-link
					>
				</li>
			</ul>
		</div>
	</div>
</template>
