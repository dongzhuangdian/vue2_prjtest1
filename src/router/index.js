import Vue from 'vue'
import Router from 'vue-router'
import home from "../pages/Home.vue"
import myself from "../pages/MySelf.vue"

Vue.use(Router)

// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');

const routes = [
	{
		path: '/',
		component: () => import('../components/Footer.vue'),
		redirect: "/home",
		children: [
		   {
		        path: 'home',
		        component: home,
		   },
		   {
			   path:"myself",
			   component: myself
		   },
		   {
			   path:"cart",
			   component: () => import('../pages/Cart.vue'),
		   },
		   {
			   path:"classify",
			   component: () => import('../pages/Classify.vue'),
			   children: [
					{
			            path: 'result',
						name :"classifyresult",
			            component: () => import('../pages/ClassifyResult.vue'),
					},
			   ]
		   }
		]
	},
	{
		path: "/card",
		component:() => import('../pages/Card.vue'),
	},
	{
		path: "/payment",
		name: "payment",
		component:() => import('../pages/Payment.vue'),
	}
]

export default new Router({
	routes,
	// strict: process.env.NODE_ENV !== 'production',
})
