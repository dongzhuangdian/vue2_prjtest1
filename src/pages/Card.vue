	
<template>
	<div>
		<van-nav-bar
		  title="标题"
		  left-text="返回"
		  right-text="分享"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item>1</van-swipe-item>
			<van-swipe-item>2</van-swipe-item>
			<van-swipe-item>3</van-swipe-item>
			<van-swipe-item>4</van-swipe-item>
		</van-swipe>
		
		<p style="color: red; text-align: left;">1000元</p>
		<p style="color: red; text-align: left;">消费让您开心，开心让您健康年轻。</p>
		
		<van-divider :style="{ color: 'red', borderColor: 'red', padding: '0 16px' }">
		  详情介绍
		</van-divider>
		
		<van-sku
		  v-model="show"
		  :sku="sku"
		  :goods="goods"
		  @buy-clicked="onBuyClicked"
		  @add-cart="onAddCartClicked"
		/>
		
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
		  <van-goods-action-icon icon="cart-o" text="购物车" />
		  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
		  <van-goods-action-button type="warning" text="加入购物车" @click="onClickIcon"/>
		  <van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
		
		
		<van-share-sheet
		  v-model="showShare"
		  title="立即分享给好友"
		  :options="options"
		/>
	</div>
	
</template>

<script>
	import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
	import { NavBar } from 'vant';
	import { ShareSheet } from 'vant';
	import { Swipe, SwipeItem } from 'vant';
	import { Divider } from 'vant';
	import { Sku } from 'vant';
	
	export default{
		name:"Card",
		data() {
		    return {
		      showShare: false,
		      options: [
		        [
				  { name: '复制链接', icon: 'link' },
				  { name: '分享海报', icon: 'poster' },
				  { name: '二维码', icon: 'qrcode' },
				  { name: '小程序码', icon: 'weapp-qrcode' },
		        ],
		      ],
			  show: false,
			 sku: {
			   // 数据结构见下方文档
			    // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
			    // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
			    tree: [
			      {
			        k: '颜色', // skuKeyName：规格类目名称
			        k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
			        v: [
			          {
			            id: '1', // skuValueId：规格值 id
			            name: '红色', // skuValueName：规格值名称
			            imgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png', // 规格类目图片，只有第一个规格类目可以定义图片
			            previewImgUrl: 'https://b.yzcdn.cn/vant/sku/shoes-1.png', // 用于预览显示的规格类目图片
			          },
			          {
			            id: '2',
			            name: '蓝色',
			            imgUrl: 'https://img01.yzcdn.cn/2.jpg',
			            previewImgUrl: 'https://img01.yzcdn.cn/2.jpg',
			          }
			        ],
			        largeImageMode: false, //  是否展示大图模式
			      },
				  {
				    k: '尺寸', // skuKeyName：规格类目名称
				    k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
				    v: [
				      {
				        id: '1', // skuValueId：规格值 id
				        name: '大', // skuValueName：规格值名称
				      },
				      {
				        id: '2',
				        name: '小',
				      }
				    ],
				  }
			    ],
			    // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
			    list: [
			      {
			        id: 2259, // skuId
			        s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
			        s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
			        price: 100, // 价格（单位分）
			        stock_num: 110 // 当前 sku 组合对应的库存
			      },
				  {
				    id: 2259, // skuId
				    s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
				    s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
				    price: 100, // 价格（单位分）
				    stock_num: 110 // 当前 sku 组合对应的库存
				  },
				  {
				    id: 2259, // skuId
				    s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
				    s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
				    price: 100, // 价格（单位分）
				    stock_num: 110 // 当前 sku 组合对应的库存
				  },
				  {
				    id: 2259, // skuId
				    s1: '2', // 规格类目 k_s 为 s1 的对应规格值 id
				    s2: '2', // 规格类目 k_s 为 s2 的对应规格值 id
				    price: 100, // 价格（单位分）
				    stock_num: 110 // 当前 sku 组合对应的库存
				  }
			    ],
			    price: '1.00', // 默认价格（单位元）
			    stock_num: 227, // 商品总库存
			    hide_stock: false // 是否隐藏剩余库存
			 },
					
					
					
				goods: {
				// 数据结构见下方文档
				// 默认商品 sku 缩略图
					picture: 'https://b.yzcdn.cn/vant/sku/shoes-1.png',
				},
		
		    };
		},
		
		
		methods:{
			 onClickLeft() {
			      this.$router.back();
			    },
			    onClickRight() {
			      this.showShare = true;
			    },
				onClickIcon(){
					this.show = true;
				},
				onAddCartClicked(data){
					console.log(JSON.stringify(data))
				},
				onBuyClicked(data){
					console.log(JSON.stringify(data))
				}
		},
		components:{
			[GoodsAction.name]:GoodsAction,
			[GoodsActionIcon.name]:GoodsActionIcon,
			[GoodsActionButton.name]:GoodsActionButton,
			[NavBar.name]:NavBar,
			[ShareSheet.name]:ShareSheet,
			[Swipe.name]:Swipe,
			[SwipeItem.name]:SwipeItem,
			[Divider.name]:Divider,
			[Sku.name]:Sku,
		}
	}
</script>

<style>
	 .my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 300px;
	    text-align: center;
	    background-color: #39a9ed;
	  }
</style>
