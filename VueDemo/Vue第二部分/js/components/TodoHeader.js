(function(window){
	const template='<header class="header">'+
				'<h1>todos</h1>'+
				'<input @keyup.enter="handleAddto" class="new-todo" placeholder="What needs to be done?" autofocus>'+
			'</header>';
			
	window.TodoHeader={
		template,
		props:['todos'],
		methods:{
			handleAddto:function(e){
				// 拿到文本框的数据
				// 把数据添加到todos数组中
				// 发布自定义事件
												
				this.$emit("addTask",e.target.value)
				e.target.value="";
		}
	}
}
})(window)