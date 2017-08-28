// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Bus from './vue-bus'


Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Bus);


const moduleA={
	state:{},
	mutations:{},
	actions:{},
	getters:{}
};

const moduleB={
	state:{},
	mutations:{
		// a(state){

		// }
	},
	actions:{},
	getters:{
		// a(state,getters,rootState){

		// }
	}
};

const store=new Vuex.Store({
	//vuex配置
	state:{
		count:0,
		list:[1,5,8,10,30,50]
	},
	mutations:{
		increment(state,n=1){
			state.count+=n;
		},
		decrease(state){
			state.count--;
		},
	},
	getters:{
			filteredList:state => {
				return state.list.filter(item => item>10);
			}
	},
	actions:{
		increment(context){
			//pending\resolve\rejected
			// const p= new Promise((resolve,reject) =>{
			// 	setTimeout(()=>{
			// 		const random=Math.random();
			// 		if (random >0.5){
			// 			resolve(random);
			// 		}else{
			// 			reject(ranndom);
			// 		}
			// 	})
			// })

			// p.then(val => {
			// 	console.log(val);
			// }).catch(val => {
			// 	console.log(val);
			// })



			// context.commit('increment');
			return new Promise(resolve => {
				setTimeout(()=>{
					context.commit('increment');
					resolve();
				},1000);
			})
		}
	},
	modules:{
		a:moduleA,
		b:moduleB
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App }
})
