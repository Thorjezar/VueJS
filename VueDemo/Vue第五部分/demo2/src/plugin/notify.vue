<template>
	<div class="notify">
		{{val}}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				val:"攻城狮"
			}
		}
	}
</script>

<style>
	.notify{
		width: 150px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 15px;
		backgroud:rgba(0,0,0,0.8);
	}
</style>
