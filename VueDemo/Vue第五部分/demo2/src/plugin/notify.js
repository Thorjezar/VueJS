import modal from "./notify.vue";

let notify = {
	
};

notify.install = function(Vue,options){
	Vue.say = function(){
		alert(123);
	}
	
	Vue.prototype.$notify = function(message,opt={}){
		if(notify.el) return;
		// 用自己调用的插件传递过来的属性 覆盖默认的设置好的
		options = {...options,...opt};
		let V = Vue.extend(modal);
		let vm = new V;
		vm.val=message;
		let oDiv = document.createElement("div"); //创建元素
		vm.$mount(oDiv); //实例挂载DIV
		notify.el = vm.$el;
		document.body.appendChild(vm.$el);
		setTimeout(()=>{
			document.body.removeChild(vm.$el);
			notify.el=null;
			
		},options.delay)
	}
};

export default notify;