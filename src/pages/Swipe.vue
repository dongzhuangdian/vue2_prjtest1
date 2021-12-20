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
			 	"http://n.sinaimg.cn/tech/5_img/upload/e5308a4d/106/w1024h682/20210309/86d4-kmeeiur9324102.jpg",
				"http://n.sinaimg.cn/tech/5_img/upload/e5308a4d/106/w1024h682/20210309/ad6f-kmeeiur9324126.jpg"
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
	#Swipe{
		flex-grow: 1;
		flex-shrink: 1;
		overflow-y: auto;
	}
	img{
		max-width: 100%;
	}
</style>
