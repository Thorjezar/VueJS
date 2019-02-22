(function(window){
	const template='<footer class="footer">'+
				'<span class="todo-count"><strong>{{getRemaining}}</strong> item left</span>'+
				'<ul class="filters">'+
					'<li>'+
						'<a class="selected" href="#/">All</a>'+
					'</li>'+
					'<li>'+
						'<a href="#/active">Active</a>'+
					'</li>'+
					'<li>'+
						'<a href="#/completed">Completed</a>'+
					'</li>'+
				'</ul>'+				
				'<button class="clear-completed" v-if="seen" @click="handleClearAllDone">Clear completed</button>'+
			'</footer>';
	window.TodoFooter={
		template,
		props:['todos','seen'],
		methods:{
				handleClearAllDone(){
					/* for(let i=0;i<this.todos.length;i++)
					{
						const item=this.todos[i];
						if(item.done===true)
						{
							this.todos.splice(i,1);
							i--;
						}
					}
					this.seen=false; */
					//子传父的操作 定义自定义事件
					this.$emit("clearAlldone");
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
	}
})(window)