import axios from "axios";
// http://localhost:4040/silders
// 增加默认请求路径
axios.defaults.baseURL = "http://localhost:4040";

// 设置拦截器
axios.interceptors.response.use((res)=>{
	return res.data;
});
// 获取轮播图数据
export let getSliders= ()=>{
 	// 返回一个promise对象
	return axios.get("/silders");
}
// 获取热门图书信息
export let getHotbook = ()=>{
	return axios.get("/hot");
}
export let getAll= () =>{
	return axios.all([getSliders(),getHotbook()]);
}

// 获取所有的图书
export let getbookslist = ()=>{
	return axios.get("/getbookslist");
}
export let pagination = (index) =>{
	return axios.get(`/page?index=${index}`);
}

// 删除一本图书
export let removeBook = (id)=>{
	//注意点 ` 的不同
	return axios.delete(`/book?id=${id}`); 
}
// 获取某本书
export let getOneBook = (id)=>{
	return axios.get(`/book?id=${id}`);
}
// 修改某本书
export let updateBook =(id,data) =>{
	return axios.put(`/book?id=${id}`,data);
}

// 增加一本书
export let addBook = (data) => {
      return axios.post("/book",data)
}
// getSliders().then()
	