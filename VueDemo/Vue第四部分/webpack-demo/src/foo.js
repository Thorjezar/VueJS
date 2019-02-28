/* //一个js文件就是一个模块
module.exports = function(){
	console.log("我是foo文件模块");
} */

/* //导入默认成员 只能有一个
let str="es6";
export default str; */

const a = 10;
const b = 20;
function fn(){
	console.log("啦啦啦");
}

export {
	a,
	b,
	fn  //不是a:a 简写 导出的特殊语法
}

export function add(x,y){
	return x+y;
}