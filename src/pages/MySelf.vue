<template>
	<div id="myself">
		<div class="header_photo">
			<van-image round width="5rem" height="5rem" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
			<p>小陈</p>
		</div>
		
		
		<van-cell class="all_orders" value="全部" is-link>
		  <template #title>
		    <span>我的订单</span>
		  </template>
		</van-cell>
		
		<van-grid clickable :column-num="5">
		  <van-grid-item icon="credit-pay" text="待付款" badge=2 to="/" />
		  <van-grid-item icon="shop-collect-o" text="待发货" :dot=true url="/vant/mobile.html" />
		  <van-grid-item icon="logistics" text="待收货" url="/vant/mobile.html" />
		  <van-grid-item icon="chat-o" text="待评价" url="/vant/mobile.html" />
		  <van-grid-item icon="refund-o" text="售后" url="/vant/mobile.html" />
		</van-grid>
		
		<br>
		<!-- <van-cell title="URL 跳转" is-link url="/vant/mobile.html" /> -->
		<div class="info_button">
			<van-cell-group>
				<van-cell title="个人信息" is-link to="index" />
				<van-cell title="收货地址" is-link to="index" />
				<van-cell title="联系客服" is-link to="index" />				
			</van-cell-group>
		</div>
		
	</div>
</template>

<script>
	import { Image as VanImage } from 'vant';
	import { Cell, CellGroup } from 'vant';
	import { Icon } from 'vant';
    import { Grid, GridItem } from 'vant';
	
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
			[Icon.name] : Icon,
			[Grid.name] : Grid,
			[GridItem.name] : GridItem,
			
		}

	}
</script>

<style lang="less">
	.txt_left {
		text-align:left
	}
	
	.info_button{
		.txt_left()
	}
  .all_orders {
	 .txt_left()
  }
  
  .header_photo{
	  padding-top: 15px;
	  font-size: 15px;
  }

</style>
