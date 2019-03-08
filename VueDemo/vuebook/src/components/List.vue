<template>
	<div>
		<MHeader>列表</MHeader>
		<div class="mainContent">
			<ul>
				<router-link v-for="book in books" :to="{name:'detail',params:{bid:book.bookId}}" :key="book.bookId" tag="li">
					<img :src="book.bookCover"/>
					<div>
						<h4>
							{{book.bookName}}
						</h4>
						<p>{{book.bookDesc}}</p>
						<b>{{book.bookPrice}}</b>
						<div><button @click.stop="remove(book.bookId)">删除</button></div>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import MHeader from "../base/MHeader.vue";
	import {getbookslist,removeBook} from "../api/index.js";
	export default{
		created() {
			this.getBooks();
		},
		data(){
			return {
				books:[]
			}
		},
		methods:{
			async getBooks(){
				this.books = await getbookslist();
			},
			async remove(id){
				await removeBook(id)  //删除某本书
				// 删除前台数据
				this.books = this.books.filter(item=>item.bookId !== id);
			}
		},
		components:{
			MHeader
		}
	}
</script>

<style scoped>
	.mainContent ul{
		display: flex;
		flex-wrap: wrap;
	}
	.mainContent ul li{
		display: flex;
	}
	.mainContent ul li h4{
		line-height: 30px;
		height: 30px;
		color: red;
	}
	.mainContent ul li b{
		color: orange;
	}
	.mainContent ul li div{
		padding: 10px 0;
	}
	.mainContent ul li p{
		margin: 10px 0;
	}
	.mainContent button{
		outline: none;
		border: none;
		width: 80px;
		height: 20px;
		border-radius: 8px;
		background-color: skyblue;
		font-size: 15px;
	}
</style>
