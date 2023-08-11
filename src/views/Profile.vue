<script setup>
	import { ref, onMounted } from "vue";
	import UserProfile from "../components/UserProfile.vue";

	const user = ref({
		image: "", //not ready
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
	<UserProfile :user="user"></UserProfile>
</template>
