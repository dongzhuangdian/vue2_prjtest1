<template>
	<div id="myself">
		<van-image width="100" height="100"src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
		
	</div>
</template>

<script>
	import { Image as VanImage } from 'vant';
	export default {
		name: "MySelf",
		data(){
			return {
				
			}
		},
		components:{
			[VanImage.name] : VanImage,
		}

	}
</script>

<style>
</style>
