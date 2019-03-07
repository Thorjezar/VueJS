let http = require("http");
let fs = require("fs");
let url = require("url");

let sliders = require("./index.js");
// console.log(sliders);
// 封装方法读取文件数据
function read(cb){
	fs.readFile("./books.json","utf8",(err,data)=>{
		 if(err||data.length == 0)
		 {
			 cb([]);
		 }else{
			 cb(JSON.parse(data))  //字符串转对象
		 }
	});
}
// 获取轮播图数据  /sliders
http.createServer((req,res)=>{
	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
	// console.log(url.parse(req.url));
	let {pathname,query}=url.parse(req.url);
	if(pathname=="/silders"){
		res.setHeader("Content-Type","application/json;charset=utf8");
		res.end(JSON.stringify(sliders));
	}
	if(pathname=="/hot"){
		read(function(books){
			res.setHeader("Content-Type","application/json;charset=utf8");
			// []或者有数据
			books = books.reverse().slice(0,6); //数组逆序
			res.end(JSON.stringify(books));
		});
	}
}).listen(4040)