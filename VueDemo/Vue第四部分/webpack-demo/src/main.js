//入口文件
/* var foo = require("./foo");
foo(); */
// import {a,b,fn,add} from "./foo";
// import * as obj from "./foo";
// //let res=add(a,b);
// console.log(obj);
// 
// let a = b=>c=>d=>b+c+d;
// let res=a(2)(3)(4);
let obj = {
	name:"along"
}
let obj2={
	age:"18"
}
let p1={...obj,...obj2};
console.log(p1);
// console.log(res);