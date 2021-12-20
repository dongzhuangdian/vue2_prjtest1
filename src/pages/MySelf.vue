<template>
	<div id="myself">
		<van-image round  width="5rem" height="5rem" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
		
		<!-- <van-cell title="URL 跳转" is-link url="/vant/mobile.html" /> -->
		<van-cell-group id=cell title="个人信息">
			<van-cell title="路由跳转" is-link to="index" />
		</van-cell-group>
		
	</div>
</template>

<script>
	import { Image as VanImage } from 'vant';
	import { Cell, CellGroup } from 'vant';
	export default {
		name: "MySelf",
		data(){
			return {
				
			}
		},
		components:{
			[VanImage.name] : VanImage,
			[Cell.name] : Cell,
			[CellGroup.name] : CellGroup,
			
		}

	}
</script>

<style lang="less">
  #cell{
	  text-align:left
  }

</style>
