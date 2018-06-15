import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

require('../baseCss/base.scss');

Vue.use(Router);

const mapObj = {
	'HelloWorld': r => require.ensure([], () => r(require('@/page/HelloWorld.vue')), 'HelloWorld'),
	'HelloWorld1': r => require.ensure([], () => r(require('@/page/HelloWorld1.vue')), 'HelloWorld1'),
	'notFound': r => require.ensure([], () => r(require('@/components/404.vue')), 'notFound'),
};
const router = new Router({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: "/",
			name: 'HelloWorld',
			component: mapObj.HelloWorld
		},
		{
			path: '/HelloWorld1',
			name: 'HelloWorld1',
			component: mapObj.HelloWorld1
		},
		{
			path: '*',
			name: 'other',
			component: mapObj.notFound
		}
	]
});


Vue.config.productionTip = false
const app = new Vue({
	el: '#app',
	router: router,
	components: {App},
	template: '<App/>',
	// render: h => h('router-view')
});
/* eslint-disable no-new */
// new Vue({
// 	el: '#app',
// 	router,
// 	components: {App},
// 	template: '<App/>'
// })