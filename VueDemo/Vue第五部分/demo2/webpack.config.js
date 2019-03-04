let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports={
	entry:"./src/main.js",
	output:{
		path:path.resolve("./dist"),
		filename:"bundle.js"
	},
	module:{
		rules:[{
			test:/\.css$/,
			use:["style-loader","css-loader"]
		},{
			test:/\.less$/,
			use:["style-loader","css-loader","less-loader"]
		},{
			test:/\.(png|jpg|jpeg|gif)$/,
			use:["url-loader?limit=8192"]
		},{
			test:/\.js$/,
			use:"babel-loader",
			exclude:/node_modules/
		},
		{
			test:/\.vue$/,
			use:"vue-loader"
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:"./src/index.html"
		}),
		new VueLoaderPlugin()
	]
}