let computer="";

function buy(callback){
	setTimeout(()=>{
		computer="HP";
		callback(computer);
	},2000)
}

buy(coding);

//逻辑编程 需要在电脑买回来后执行
function coding(computer){
	console.log(computer);
}