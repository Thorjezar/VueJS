<template>
	<div>
		<MHeader :back="true">首页</MHeader>
		<div class="mainContent">
			<Swiper :sliders="sliders"></Swiper>
			<h3>热门图书</h3>
			<ul>
				<li v-for="book in hotbooks">
					<img :src="book.bookCover" />
					<b>{{book.bookName}}</b>
				</li>
			</ul>
		</div>	
	</div>
</template>

<script>
	import MHeader from "../base/MHeader.vue";
	import Swiper from "../base/Swiper.vue";
	import {getSliders,getHotbook} from "../api/index.js";
	export default{
		 created() {
			this.getSlider();
			this.getHot();
		},
		data(){
			return {
				sliders:[],
				hotbooks:[]
			}
		},
		components:{
			MHeader,
			Swiper
		},
		methods:{
			async getSlider(){				
				this.sliders=await getSliders();
			},
			async getHot(){				
				this.hotbooks=await getHotbook();
			}
		}
	}
</script>

<style scoped>
	li{
	  width: 50%;
	  float:left;
	  text-align: center;
	  margin:5px 0;
	}
	li b{
		
	}
</style>
