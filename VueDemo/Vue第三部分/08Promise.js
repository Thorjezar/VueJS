let p= new Promise(function(resolve,reject){
	//函数里的代码将来会自动执行
	setTimeout(()=>{
		let computer="HP";
		resolve(computer);
	},2000);
});

//只要是promise实例就有then方法
p.then((comp)=>{ //成功状态时调用
	console.log("我在"+comp+"电脑上编程");
},(error)=>{
	//失败时调用
	console.log(error);
});