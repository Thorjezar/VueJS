(function (Vue) {
	new Vue({
		el:".todoapp",
		data:{
// 			todos:[{
// 				id:1,
// 				title:"吃饭",
// 				done:true
// 			},{
// 				id:2,
// 				title:"睡觉",
// 				done:false
// 			},{
// 				id:3,
// 				title:"工作",
// 				done:true
// 			}]
			todos:JSON.parse(window.localStorage.getItem("todos")|| '[]'),
			seen:false
		},
		/*
		  watch 监视
		  可以监视data中的数据成员
		  当data中的数据成员发生改变时 会自动执行该方法
		  当watch监视是对象或数组时，只能监听到数组添加或删除，但无法检测到数组成员属性
		  改变,此时需要深度监视才可以
		*/
		watch:{
			todos:{
				// 当todos改变时候会自动调用handler handler名字是固定的
				handler()
				{
					window.localStorage.setItem("todos",JSON.stringify(this.todos));
				},
				deep:true
			}
		},
		methods:{
			handleAddto:function(e){
				const lastTodo=this.todos[this.todos.length-1];
				const id=lastTodo?lastTodo.id+1:1;
				if(e.target.value.trim().length!==0)
				{
					this.todos.push({
						id:id,
						title:e.target.value,
						done:false
					})
				}
				
				e.target.value="";
			},
			handleRemovetodo:function(index){
				//删除选择的数据
				this.todos.splice(index,1);
				this.seen=false;
			},
			handleToggleState:function(e){
				const checked=e.target.checked;
				this.todos.forEach(item=>{
					item.done=checked;
				});
			},
			getToggleAllStatus:function(){
				let status = true;
				this.todos.forEach(item=>{
					if(item.done === false)
					{
						status=false;
						this.seen=false;
					}
					if(item.done===true)
					{
						this.seen=true;
					}
				});
				return status;
			},
			handleClearAllDone(){
				for(let i=0;i<this.todos.length;i++)
				{
					const item=this.todos[i];
					if(item.done===true)
					{
						this.todos.splice(i,1);
						i--;
					}
				}
				this.seen=false;
			}
		},
		computed:{
			getRemaining(){
				let count=0;
				this.todos.forEach(item=>{
					if(item.done===false)
					{
						count++;
					}
				});
				return count;
			}
		}
	})
})(Vue);
