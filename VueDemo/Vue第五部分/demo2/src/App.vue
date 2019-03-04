<template>
	<div>
		{{msg}}
		<router-view></router-view>
		<button @click="show">notify</button>
	</div>
</template>

<script>
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
