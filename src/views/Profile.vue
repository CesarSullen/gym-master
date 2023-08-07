<script setup>
	import { ref, onMounted } from "vue";

	const user = ref({
		name: "",
		lastName: "",
		mail: "",
		age: null,
		genre: "",
	});

	const saveProfile = () => {
		localStorage.setItem("user", JSON.stringify(user.value));
		alert("Profile saved");
	};
	onMounted(() => {
		user.value = JSON.parse(localStorage.getItem("user")) || {};
	});
</script>

<template>
	<h1>Profile</h1>
	<div class="profile-container">
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
				<option value="not said">I prefer not to say</option>
			</select>
		</ul>
		<button class="button-ctr" @click="saveProfile">Save</button>
	</div>
</template>
