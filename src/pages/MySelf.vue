<template>
	<div id="myself">
		<van-image round  width="5rem" height="5rem" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
		
		<van-cell value="全部" is-link>
		  <!-- 使用 title 插槽来自定义标题 -->
		  <template #title>
		    <span class="custom-title">我的订单</span>
		    <!-- <van-tag type="danger">标签</van-tag> -->
		  </template>
		</van-cell>
		
		<van-grid clickable :column-num="5">
		  <van-grid-item icon="credit-pay" text="待付款" to="/" />
		  <van-grid-item icon="shop-collect-o" text="待发货" url="/vant/mobile.html" />
		  <van-grid-item icon="logistics" text="待收货" url="/vant/mobile.html" />
		  <van-grid-item icon="chat-o" text="待评价" url="/vant/mobile.html" />
		  <van-grid-item icon="refund-o" text="退款/售后" url="/vant/mobile.html" />
		</van-grid>

		
	<!-- 	<van-cell title="单元格" icon="shop-o">
		 
		  <template #right-icon>
		    <van-icon name="search" class="search-icon" />
		  </template>
		</van-cell> -->
		

		
		<br>
		<!-- <van-cell title="URL 跳转" is-link url="/vant/mobile.html" /> -->
		<div class="cell">
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
  .cell{
	  text-align:left
  }
  .custom-title {
    // margin-right: 4px;
    // vertical-align: left;
	 text-align:left
  }

  .search-icon {
    font-size: 16px;
    // line-height: inherit;
  }

</style>
