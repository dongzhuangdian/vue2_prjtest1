<template>
	<div class="home_search">
		<van-search class="search" v-model="value" show-action  placeholder="请输入搜索物品"  @search="onSearch">
		  <template #action>
		    <div @click="onSearch">搜索</div>
		  </template>
		</van-search>
	</div>
</template>

<script>
	import { Search } from 'vant';

	export default {
	  name: 'Home',
	  data(){
		  return {
			  value:"",		  
		  }
	  },
	  methods:{
		  onSearch(){
			  console.log("search")
		  }
	  },
	  components: {
		[Search.name]:Search,
	  }
	}
</script>

<style>
	.home_search{
		height: 50px;
	}
	
	.search{
		position: fixed;
		z-index: 99;
		width: 100%;
		padding-top: 10px;
		background-color: #fa3d0d;
	}
</style>
