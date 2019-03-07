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
// getSliders().then()
	