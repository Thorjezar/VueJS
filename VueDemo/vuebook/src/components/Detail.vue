<template>
	<div>
		<MHeader :back="true">详情页</MHeader>
		<div class="detail">
			<ul>
				<li>
					<label for="bookName">
						书名:
					</label>
					<input type="text" id="bookName"/>
				</li>
				<li>
					<label for="bookDesc">
						内容简介
					</label>
					<input type="text" id="bookDesc"/>
				</li>
				<li>
					<label for="bookPrice">
						价格
					</label>
					<input type="text" id="bookPrice"/>
				</li>			   
			</ul>
		</div>
	</div>
</template>

<script>
	import MHeader from "../base/MHeader.vue";
	import {getOneBook} from "../api/index.js";
	export default{
		components:{
			MHeader
		},
		data(){
			return {
				book:{}
			}
		},
		created() {
			// 调用
			this.getData();
		},
		methods:{
			async getData(){
				this.book = await getOneBook(this.bid);
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
		display: block;
		width: 100%;		
	}
	.detail label{
		font-size: 25px;
		display: block;
	}
</style>
