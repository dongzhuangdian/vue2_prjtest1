<template>
	<div id="footer">
		 <tabbar>
		      <tabbar-item>
		        <img slot="icon" src="../assets/nav_explore.png">
		        <span slot="label">Wechat</span>
		      </tabbar-item>
		      <tabbar-item show-dot>
		        <img slot="icon" src="../assets/nav_message.png">
		        <span slot="label">Message</span>
		      </tabbar-item>
		      <tabbar-item selected link="/content">
		        <img slot="icon" src="../assets/nav_news.png">
		        <span slot="label">Explore</span>
		      </tabbar-item>
		      <tabbar-item badge="2">
		        <img slot="icon" src="../assets/nav_wechat.png">
		        <span slot="label">News</span>
		      </tabbar-item>
		    </tabbar>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
	  name: 'Footer',
	  props: {
	    msg: String
	  },
	  components: {
	    Tabbar,
	    TabbarItem
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
