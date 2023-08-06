import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Landing from "../views/Landing.vue";
import Statistics from "../views/Statistics.vue";
import Settings from "../views/Settings.vue";
import Profile from "../views/Profile.vue";
import Routines from "../views/Routines.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/Landing",
		name: "Landing",
		component: Landing,
	},
	{
		path: "/About",
		name: "About",
		component: About,
	},
	{
		path: "/Statistics",
		name: "Statistics",
		component: Statistics,
	},
	{
		path: "/Settings",
		name: "Settings",
		component: Settings,
	},
	{
		path: "/Profile",
		name: "Profile",
		component: Profile,
	},
	{
		path: "/Routines",
		name: "Routines",
		component: Routines,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
