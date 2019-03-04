/** 
     默认引入dist/vue.runtime.common.js 只包含runtime 不包含compiler
	 import Vue from "vue/dist/vue.js"; runtime+compiler compiler占6KB
 */
import Vue from "vue"; //在node_modules里面直接写名字 不需要写路径  
import App from "./App.vue"; //引入组件
import VueRouter from "vue-router";
import router from "./router/index.js";
import notify from "./plugin/notify.js"

Vue.use(notify);
new Vue({
	router,
	// el:"#app"
	// template:"<div>hello world</div>"
	// render函数将虚拟dom渲染成真实的dom 
	render:(h) => h(App)
					// h("h1",["一级标题",h("span","我是span")])
					
}).$mount("#app");