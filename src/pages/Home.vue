<template>
  <div id="home">
	
	
	<van-search v-model="value" background="#FA8072" show-action  placeholder="请输入搜索关键词"  @search="onSearch">
	  <template #action>
	    <div @click="onSearch">搜索</div>
	  </template>
	</van-search>
	<Swipe></Swipe>
	
  </div>
</template>

<script>
// import Header from './Header.vue'
import Swipe from './Swipe.vue'
import { Search } from 'vant';


export default {
  name: 'Home',
  data(){
	  return {
		  value:""
	  }
  },
  methods:{
	  onSearch(){
		  
	  }
  },
  components: {
	// Header,
	Swipe,
	[Search.name]:Search,
  }
}
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
