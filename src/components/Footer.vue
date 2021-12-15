<template>
	<div id="footer">
		<van-tabbar v-model="active">
			<van-tabbar-item icon="home-o">标签</van-tabbar-item>
			<van-tabbar-item icon="search">标签</van-tabbar-item>
			<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
			<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
		</van-tabbar>
		<!-- <van-button type="default">默认按钮</van-button> -->
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vant';
	
  import {Button} from 'vant'

	export default {
	  name: 'Footer',
	  data(){
		  return {
			  active:0
		  }
	  },
	  props: {
	    msg: String
	  },
	  components:{
		 [Tabbar.name] :Tabbar,
		   [TabbarItem.name] :TabbarItem,
		   // [Button.name]: Button
	  }
	}
</script>

<style>
	#footer{
		border: solid red;
		border-width: 1px;
		flex-grow: 0;
		/* flex-basis: auto; */
		flex-shrink: 0;
	}
</style>
