//这个文件最终在node环境中运行
const path = require("path");
//引入插件
let HtmlWebpackPlugin  = require("html-webpack-plugin");
//导出一个对象 node写法
module.exports = {
	//告诉webpack打包的入口文件
	// mode:"development",
	entry:"./src/main.js",
	output:{
		path: path.resolve("./dist"),//绝对路径
		filename:"bundle.js"   //打包后的文件名
	},
	//模块解析规则
	module:{
		rules:[{
			test: /\.js$/,
			use:"babel-loader",
			exclude:/node_modules/
		},{
			test:/\.css$/,
			use:["style-loader","css-loader"]    //从右到左处理
		},{
			test:/\.less$/,
			use:["style-loader","css-loader","less-loader"]    //从右到左处理
		},
		{
			test:/\.sass$/,
			use:["style-loader","css-loader","sass-loader"]    //从右到左处理
		},
		{
			test:/\.(png|jpg|jpeg|gif)$/,
			use:["url-loader?limit=8192"]    //从右到左处理
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:"./src/index.html"
		})
	]
}