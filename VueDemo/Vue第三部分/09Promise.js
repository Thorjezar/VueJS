function buyTellphone(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(Math.random()>0.5)
			{
				resolve("buy");
			}else {
				reject("not buy");
			}
		},Math.random()*1000);
	});
}

buyTellphone().then((val)=>{
	console.log(val);
},(val)=>{
	console.log(val);
}
);