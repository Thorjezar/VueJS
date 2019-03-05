<template>
	<div>
		{{msg}}
		<router-view></router-view>
		<button @click="show">notify</button>
	</div>
</template>

<script>
	import Vue from "vue";
	export default {
		data(){
			return {
				msg:"Hello world"
			}
		},
		methods:{
			show(){
				this.$notify("技术CTO",{
					delay:2000
				});
				Vue.say();
			}
		},
		computed: {

		},
		components:{
			
		}
	}
</script>

<style scoped>
</style>
