<template>
	<div>
		{{id}}
		<!-- <van-divider content-position="left" dashed>热销产品</van-divider> -->
		<van-grid :border="false" :column-num="2" >
		    <van-grid-item v-for="value in 8" :key="value" >
				<div>
					<van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
					<p>手机</p>
				</div>
			    
			</van-grid-item>
		</van-grid>
	</div>
</template>

<script>
	import { Grid, GridItem } from 'vant';
	import { Image as VanImage } from 'vant';
	
	export default {
		name:"ClassifyResult",
		data(){
			return {
				msg:"测试通过了",
				id:0,
			}
		},
		watch:{
			$route(to,from){
				if(to.query.id != from.query.id){
					console.log(to.query.id)
					this.id = to.query.id;
				}
			}
		},
		components: {
			[Grid.name]:Grid,
			[GridItem.name]:GridItem,
			[VanImage.name]:VanImage,
	
			
		}
	}
</script>

<style>
</style>
