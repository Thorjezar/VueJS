<template>
	<div>
		<MHeader :back="true">首页</MHeader>
		<div class="carrousel">
			<Swiper></Swiper>
		</div>	
	</div>
</template>

<script>
	import MHeader from "../base/MHeader.vue";
	import Swiper from "../base/Swiper.vue";
	export default{
		components:{
			MHeader,
			Swiper
		}
	}
</script>

<style>
	
</style>
