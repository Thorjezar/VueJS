(function(window){
	const template='<ul class="todo-list">'+
					'<li v-bind:class="{completed:item.done}" v-for="(item,index) in list">'+
						'<div class="view">'+
							'<input class="toggle" @click="getToggleAllStatus" type="checkbox"  v-model="item.done">'+
							'<label>{{item.title}}</label>'+
							'<button @click="handleRemovetodo(index)" class="destroy"></button>'+
						'</div>'+
						'<input class="edit" value="Create a TodoMVC template">'+
					'</li>'+
				'</ul>';
	window.TodoList={
		template,
		methods:{
			handleRemovetodo:function(index){
				//删除选择的数据
				// 子组件操作父组件属性 需要定义事件
				this.$emit("removeTask",index);
				this.$emit("restatusSeen");
				/* this.list.splice(index,1);
				this.seen=false; */
			},
			getToggleAllStatus:function(){
				let status = true;
				this.list.forEach(item=>{
					if(item.done === false)
					{
						status=false;
						this.$emit("allfalse");
						// this.seen=false;
					}
					if(item.done===true)
					{	
						this.$emit("alltrue");
						// this.seen=true;
					}
				});	
				this.$emit("setStatus",status);
			}
		},
		props:['list','seen']
	}
	
})(window)