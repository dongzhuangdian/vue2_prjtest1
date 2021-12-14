import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/Home.vue"
import content from "../components/Content.vue"

Vue.use(Router)

// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');

const routes = [
	{
		path: '/content',
		// name: 'content',
		component: content,
	},
	{
		path: '/',
		// name: 'home',
		component: content,
	}
]

export default new Router({
	routes,
	// strict: process.env.NODE_ENV !== 'production',
})
