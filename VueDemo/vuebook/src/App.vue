<template>
  <div id="app">
    <router-view></router-view>
		<Tab></Tab>
  </div>
</template>

<script>
import Tab from "./base/Tab.vue"
export default {
  name: 'App',
	components:{
		Tab
		
	}
}
</script>

<style>
		*{
			padding: 0;
			margin: 0;
		}
		a{
			text-decoration: none;
		}
		ul,li{
			list-style: none;
		}
		input,button{
			-webkit-appearance: none;
		}
</style>
