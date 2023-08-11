<script setup>
	import { ref } from "vue";
	const darkThemeActive = ref(false);

	const switchTheme = () => {
		darkThemeActive.value = !darkThemeActive.value;
	};
</script>

<template>
	<div class="settings-container">
		<div class="setting-card">
			<div class="setting-name">Dark Mode Theme (Not working)</div>
			<div
				:class="darkThemeActive ? 'toggle-active' : 'toggle'"
				@click="switchTheme"
			>
				<div class="indicator"></div>
			</div>
		</div>
	</div>
</template>
