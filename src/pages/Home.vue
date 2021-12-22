<template>
  <div id="home">
	
	<div>
		<van-search v-model="value" background="#FA8072" show-action  placeholder="请输入搜索物品"  @search="onSearch">
		  <template #action>
		    <div @click="onSearch">搜索</div>
		  </template>
		</van-search>
	</div>

	
	
	<Swipe></Swipe>
	

	
	<div>
		<van-grid clickable :column-num="3">
		  <van-grid-item icon="photo-o" text="促销活动" to="/" />
		  <van-grid-item icon="photo-o" text="新品上市" to="/" />
		  <van-grid-item icon="photo-o" text="直播售货" to="/" />
		</van-grid>
		
	</div>
	
	<br>
	
	<div>
		<van-divider content-position="left" dashed>热销产品</van-divider>
		<van-grid :border="false" :column-num="2" >
		    <van-grid-item v-for="value in 3" :key="value" >
				<div>
					<van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
					<p>手机</p>
				</div>
			    
			</van-grid-item>
		</van-grid>
	</div>
	

	
  </div>
</template>

<script>
// import Header from './Header.vue'
import Swipe from './Swipe.vue'
import { Search } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image as VanImage } from 'vant';
import { Divider } from 'vant';



export default {
  name: 'Home',
  data(){
	  return {
		  value:"",
		  images:[
		  	require("@/assets/food.png"),
		  	require("@/assets/fruit.png"),
		   ]
		  
	  }
  },
  methods:{
	  onSearch(){
		  console.log("search")
	  }
  },
  components: {
	// Header,
	Swipe,
	[Search.name]:Search,
	[Grid.name]:Grid,
	[GridItem.name]:GridItem,
	[VanImage.name]:VanImage,
	[Divider.name]:Divider,
	
  }
}
</script>

<style>
#home {
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
}

.van-grid-item__content{
	padding: 6px 6px;
}
</style>
