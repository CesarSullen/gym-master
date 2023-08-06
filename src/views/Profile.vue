<script setup>
	import { ref, onMounted } from "vue";

	const user = ref({
		name: "",
		lastName: "",
		mail: "",
		age: null,
		sex: "",
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

		<ul>
			<label class="profile-label">Select your sex:</label>

			<li><input type="radio" value="male" v-model="user.sex" />Male</li>
			<li><input type="radio" value="female" v-model="user.sex" />Female</li>
			<li>
				<input type="radio" value="gay" v-model="user.sex" />I prefer not to say
			</li>
		</ul>
		<button class="button-ctr" @click="saveProfile">Save</button>
	</div>
</template>
