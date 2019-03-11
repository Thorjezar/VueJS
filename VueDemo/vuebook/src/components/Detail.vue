<template>
	<div>
		<MHeader :back="true">详情页</MHeader>
		<div class="detail">
			<ul>
				<li>
					<label for="bookName">
						书名:
					</label>
					<input type="text" id="bookName" v-model="book.bookName"/>
				</li>
				<li>
					<label for="bookDesc">
						内容简介
					</label>
					<input type="text" id="bookDesc" v-model="book.bookDesc"/>
				</li>
				<li>
					<label for="bookPrice">
						价格
					</label>
					<input type="text" id="bookPrice" v-model="book.bookPrice"/>
				</li>
				<li>
					<button @click="save(book.bookeId)">保存</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import MHeader from "../base/MHeader.vue";
	import {getOneBook,updateBook} from "../api/index.js";
	export default{
		components:{
			MHeader
		},
		data(){
			return {
				book:{}
			}
		},
/* 		watch:{
			$route(){
				// 只要路径发生改变，函数会被执行 重新获取数据
				this.getData();
			}
		}, */
		created() {
			// 调用
			this.getData();
		},
		methods:{
			async getData(){
				this.book = await getOneBook(this.bid);
				// 假如是空对象 跳转到列表页
				if(!this.book.bookId){
					this.$router.push("/list");
				}
			},
			async save(id){
				await updateBook(id,this.book);
				// 修改完成后
				this.$router.push("/list");
			}
		},
		computed:{
			bid(){
				return this.$route.params.bid;
			}
		}
	}
</script>

<style scoped>
	.detail{
		position: absolute;
		top: 50px;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		z-index: 999;
	}
	.detail ul{
		margin:0 20px 0;
	}
	.detail input {
		height: 25px;
		width: 100%;
		font-size: 20px;
				
	}
	.detail label{
		font-size: 25px;
		display: block;
	}
	.detail button{
		outline: none;
		border: none;
		width: 80px;
		height: 20px;
		border-radius: 8px;
		background-color: skyblue;
		font-size: 15px;
		margin-top: 10px;
	}
</style>
