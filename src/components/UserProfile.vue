<script setup>
	const props = defineProps({
		user: {
			type: Object,
			required: true,
		},
	});
</script>

<template>
	<div class="profile-container">
		<img src="../../public/profile-pics/01.png" />

		<label class="profile-label">Name:</label>
		<input type="text" placeholder="Name" v-model="user.name" />

		<label class="profile-label">Last name:</label>
		<input type="text" placeholder="Last name" v-model="user.lastName" />

		<label class="profile-label">Mail:</label>
		<input type="text" placeholder="Mail" v-model="user.mail" />

		<label class="profile-label">Age:</label>
		<input type="text" placeholder="Age" v-model="user.age" />

		<label class="profile-label">Select your genre:</label>
		<ul>
			<select class="genre-selector" v-model="user.genre">
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>
		</ul>
		<button class="ctr-button" @click="saveProfile">Save</button>
	</div>
</template>
