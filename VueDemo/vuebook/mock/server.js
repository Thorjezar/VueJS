let http = require("http");
let fs = require("fs");
let url = require("url");

let sliders = require("./index.js");
// console.log(sliders);
// 封装方法读取文件数据
function read(cb) {
	fs.readFile("./books.json", "utf8", (err, data) => {
		if (err || data.length == 0) {
			cb([]);
		} else {
			cb(JSON.parse(data)) //字符串转对象
		}
	});
}
// 封装写入文件方法
function write(data,cb){
	fs.writeFile("./books.json",JSON.stringify(data),cb)
}
const pageSize=5;
http.createServer((req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.setHeader("X-Powered-By", ' 3.2.1')
	res.setHeader("Content-Type", "application/json;charset=utf-8");
	// console.log(url.parse(req.url));
	if (req.method == "OPTIONS") return res.end("");

	let {
		pathname,
		query
	} = url.parse(req.url, true);
	let id = parseInt(query.id);
	// 删除图书
	switch (req.method) {
		case "GET":
			// 获取轮播图数据  /sliders
			if (pathname == "/silders") {
				res.setHeader("Content-Type", "application/json;charset=utf8");
				res.end(JSON.stringify(sliders));
			}
			// 获取热门图书
			if (pathname == "/hot") {
				read(function(books) {
					res.setHeader("Content-Type", "application/json;charset=utf8");
					// []或者有数据
					books = books.reverse().slice(0, 6); //数组逆序
					res.end(JSON.stringify(books));
				});
			}
			// 获取所有图书
			if (pathname == "/getbookslist") {
				read(function(books) {
					res.setHeader("Content-Type", "application/json;charset=utf8");
					// []或者有数据
					res.end(JSON.stringify(books));
				});
			}
			if(pathname=="/page"){
				let index =  parseInt(query.index) || 0;
            console.log(index);
            let hasMore = true;
            read(function(books) {
                let result = books.reverse().slice(index,index+pageSize);
                console.log(result);
                if (books.length<=index+pageSize) {
                    hasMore = false;
                }
                res.end(JSON.stringify({hasMore,books:result}));
            });
				
			}
			// 获取某一本书
			if(pathname=="/book"){
				read(function(books){
				 let book =	books.find(item=>item.bookId==id);
				 if(!book) book = {};  //如果未找到 赋值空对象
				 res.setHeader("Content-Type", "application/json;charset=utf8");
				 res.end(JSON.stringify(book));
				});
			}
			break;
		case "POST":
		let str2 = "";
              req.on("data",chunck=> {
                 str2 += chunck; 
              });
              req.on("end",()=>{
                  let book = JSON.parse(str2);
                  read(function(books) {
                     book.bookId = books.length?books[books.length-1].bookId+1:1;
                     books.push(book);
                     console.log(books);
                     write(books,function() {
                          // 
                          res.end(JSON.stringify(book));
                     });
                  })
              });
			break;
		case "DELETE":
			read(function(books) {
				books = books.filter(item => item.bookId !== id);
				write(books,function(){
					res.end(JSON.stringify({})); //删除后返回空对象
				})
			});
			break;
		case "PUT":
					let str = "";
              req.on("data",chunck=>{
                  str += chunck;
              })
              req.on("end",()=>{
                  let book = JSON.parse(str);
                  read(function(books) {
                    books = books.map(item=>{
                          if (item.bookId === id) {
                              return book;
                          }
                          return item;
                      })
                      write(books,function() {
                        res.end(JSON.stringify(book));
                    })
                  });         
              })
			break;
	}

}).listen(4040)
