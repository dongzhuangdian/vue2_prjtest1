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
		component: () => import('../pages/Home.vue'),
	},
	{
		path:"/home",
		component: home
	},
	{
		path:"/myself",
		component: myself
	},
	{
		path:"/classify",
		component: () => import('../pages/Classify.vue'),
		children: [
		   {
		          // 当 /user/:id/profile 匹配成功，
		          // UserProfile 会被渲染在 User 的 <router-view> 中
		          path: 'result',
				  name :"classifyresult",
		          component: () => import('../pages/ClassifyResult.vue'),
		   },
		]
	},
	{
		path:"/cart",
		component: () => import('../pages/Cart.vue'),
	}
]

export default new Router({
	routes,
	// strict: process.env.NODE_ENV !== 'production',
})
