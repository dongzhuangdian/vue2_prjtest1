<template>
	<div id="Swipe">
	    <van-swipe :autoplay="3000">
	      <van-swipe-item v-for="(image, index) in images" :key="index">
	        <img v-lazy="image" />
	      </van-swipe-item>
	    </van-swipe>
	</div>
</template>

<script>
	// import Vue from 'vue';
	import { Swipe, SwipeItem } from 'vant';
	// import { Lazyload } from 'vant';
	export default {
	  name: 'Swipe',
	  data(){
		 return{
			 images:[
			 	require("@/assets/food.png"),
				require("@/assets/fruit.png"),
			  ]
		 } 
	  },
	  props: {
	    msg: String
	  },
	  components:{
		  [Swipe.name]:Swipe,
		  [SwipeItem.name]:SwipeItem,
		  // [Lazyload.name]:Lazyload,
	  }
	}
</script>

<style>
/* 	#Swipe{
		flex-grow: 1;
		flex-shrink: 1;
		overflow-y: auto;
	} */
	img{
		width: 100%;
	}
</style>
