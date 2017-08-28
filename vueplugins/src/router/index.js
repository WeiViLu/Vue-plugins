import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import User from '@/components/User'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/index',
    	meta:{
    		title:'首页'
    	},
    	name:'Index',
    	component:(resolve) => require(['../components/index.vue'],resolve)
    },
    {
    	path:'/about',
    	meta:{
    		title:'关于页'
    	},
    	name:'About',
    	component:(resolve) => require(['../components/about.vue'],resolve)
    },
    {
    	path:'/user/:id',
    	meta:{
    		title:'个人主页'
    	},
    	name:'User',
    	component:User
    },
    {
    	path:'*',
    	redirect:'/index'
    }
  ]
})
const router=new Router();
router.beforeEach((to,from,next) => {
	window.document.title=to.meta.title;
	next();
})