<template>
	<div id="content">
		<div id="picture">
			
			<van-icon name="cart-circle-o" size="40" color="red"/>
			
		</div>
	</div>
</template>

<script>
	import {Icon} from "vant"
	export default {
	  name: 'Content',
	  props: {
	    msg: String
	  },
	  components:{
		  [Icon.name]:Icon
	  }
	}
</script>

<style>
	#content{
		color: #62C8F3;
		border: solid;
		border-width: 1px;
		flex-grow: 1;
		flex-shrink: 1;
		overflow-y: auto;
	}
</style>
