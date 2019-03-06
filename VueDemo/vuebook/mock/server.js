let http = require("http");
let fs = require("fs");
let url = require("url");

// 获取轮播图数据  /sliders
http.createServer((req,res)=>{
	console.log(url.parse(req.url));
	let {pathname,query}=url.parse(req.url);
	if(pathname=="/silders"){
		
	}
}).listen(4040)