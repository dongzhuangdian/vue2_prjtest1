<template>
	<div>
		<Search></Search>
		
		<div id="classify">
			<van-sidebar v-model="activeKey" @change="onChange">
			  <van-sidebar-item title="标签名1" />
			  <van-sidebar-item title="标签名2" />
			  <van-sidebar-item title="标签名3" />
			</van-sidebar>
		</div>
	</div>

</template>

<script>
	import { Sidebar, SidebarItem } from 'vant';
	import Search from './Search.vue'
	
	export default {
		name:"Classify",
		 data() {
		    return {
		      activeKey: 0,
		    };
		  },
		  methods: {
		    onChange(index) {
		      Notify({ type: 'primary', message: index });
		    },
		  },
		components:{
			Search,
			[Sidebar.name] :Sidebar,
			[SidebarItem.name] :SidebarItem
		}
	}
	
</script>

<style>
</style>
