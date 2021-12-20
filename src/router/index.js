import Vue from 'vue'
import Router from 'vue-router'
import home from "../pages/Home.vue"
import myself from "../pages/MySelf.vue"
// import content from "../pages/Content.vue"

Vue.use(Router)

// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');

const routes = [
	{
		path: '/',
		// name: 'home',
		component: myself,
	},
	{
		path:"/myself",
		component: myself
	}
]

export default new Router({
	routes,
	// strict: process.env.NODE_ENV !== 'production',
})
