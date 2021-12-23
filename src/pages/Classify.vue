<template>
	<div>
		<Search></Search>
		
		<div class="classify">
			<div class="classify_sidebar">
				<van-sidebar v-model="activeKey" @change="onChange">
				  <van-sidebar-item title="热销品1" />
				  <van-sidebar-item title="标签名2" />
				  <van-sidebar-item title="标签名3" />
				  <van-sidebar-item title="标签名4" />
				  <van-sidebar-item title="标签名5" />
				  <van-sidebar-item title="标签名6" />
				  <van-sidebar-item title="标签名7" />
				  <van-sidebar-item title="标签名8" />
				  <van-sidebar-item title="标签名9" />
				</van-sidebar>
			</div>
			<div class="classify_result">
				<router-view></router-view>
			</div>
			
		</div>
		
		<Footer></Footer>
		
	</div>

</template>

<script>
	import { Sidebar, SidebarItem } from 'vant';
	import Search from './Search.vue'
	import Footer from "./Footer.vue"
	
	export default {
		name:"Classify",
		 data() {
		    return {
		      activeKey: 0,
		    };
		  },
		  methods: {
		    onChange() {
		      this.$router.push({name:'classifyresult',query: {id:this.activeKey}})
		    },
		  },
		components:{
			Search,
			Footer,
			[Sidebar.name] :Sidebar,
			[SidebarItem.name] :SidebarItem
		}
	}
	
</script>

<style>
	.classify{
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
	}
</style>
