<template>
	<div>
		<router-view></router-view>
		
		<div id="footer">
			<van-tabbar v-model="active" safe-area-inset-bottom>
				<van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
				<van-tabbar-item to="/classify/result?id=0" icon="qr">分类</van-tabbar-item>
				<van-tabbar-item to="/cart" icon="cart-circle-o">购物车</van-tabbar-item>
				<van-tabbar-item to="/myself" icon="contact">我的</van-tabbar-item>
				
				 <!-- <van-tabbar-item replace to="/search" icon="search">标签</van-tabbar-item> -->
			</van-tabbar>
			<!-- <van-button type="default">默认按钮</van-button> -->
		</div>
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
	  watch: {
	      // 如果 `question` 发生改变，这个函数就会运行
	      active: function (newQuestion, oldQuestion) {
	        console.log(oldQuestion, newQuestion)
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
		/* border: solid red; */
		/* border-width: 1px; */
		/* flex-grow: 0; */
		/* flex-basis: auto; */
		/* flex-shrink: 0; */
		height:50px;
	}
</style>
