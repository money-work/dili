import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld1'
import Not from '@/components/404'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/HelloWorld1',
			name: 'HelloWorld1',
			component: HelloWorld1
		},
		{
			name: 'other',
			path: '*',
			component: Not
		}
	]
})
