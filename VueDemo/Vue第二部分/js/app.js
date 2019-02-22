(function(window,AppFooter,TodoHeader,TodoList,TodoFooter){
	//把整个应用当成一个组件
	const template='<div>'+
			'<section class="todoapp">'+
				'<TodoHeader @addTask="addTodo" :todos="todos"></TodoHeader>'+
				'<section class="main">'+
					'<input id="toggle-all" v-bind:checked="status" class="toggle-all" @click="handleToggleState"  type="checkbox">'+
					'<label for="toggle-all">Mark all as complete</label>'+
					'<TodoList v-bind:list="todos" :seen="seen" @removeTask="removeTask" @restatusSeen="restatusSeen" @allfalse="allfalse" @alltrue="alltrue" @setStatus="setStatus"></TodoList>'+
				'</section>'+
				'<TodoFooter :todos="todos" :seen="seen" @clearAlldone="clearAlldone"></TodoFooter>'+
			'</section>'+
			'<AppFooter></AppFooter>'+
				'</div>';
	window.App={
		template:template,
		components:{
			TodoHeader,
			AppFooter,
			TodoList,
			TodoFooter
		},
		data(){
			return{
				todos:JSON.parse(window.localStorage.getItem("todos")|| '[]'),
				seen:false,
				status:false
			}
		},
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
			handleToggleState:function(e){
				const checked=e.target.checked;
				this.todos.forEach(item=>{
					item.done=checked;
				});
			},
			addTodo(val){
				const lastTodo=this.todos[this.todos.length-1];
				const id=lastTodo?lastTodo.id+1:1;
				if(val.trim().length!==0)
				{
					this.todos.push({
						id:id,
						title:val,
						done:false
					})
				}
			},
			restatusSeen(){
				this.seen=false;
			},
			removeTask(val){
				this.todos.splice(val,1);
			},
			clearAlldone(){
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
			},
		    allfalse(){
				this.seen=false;
			},
			alltrue(){
				this.seen=true;
			},
			setStatus(val){
				this.status=val;
			}
		}
	}
})(window,AppFooter,TodoHeader,TodoList,TodoFooter)
