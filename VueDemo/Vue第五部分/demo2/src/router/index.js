import Vue from "vue"; //在node_modules里面直接写名字 不需要写路径  
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import News from "../components/News.vue";

Vue.use(VueRouter); 
export default new VueRouter({
	routes : [
		{
			path:"/home",
			component:Home
		},
		{
			path:"/news",
			component:News
		}
	]
})