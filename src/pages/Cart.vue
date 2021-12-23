<template>
	<div>
		<div>
			
			<van-card v-for="x in 8" num="2" price="2.00" desc="描述信息" 
			  title="商品标题" tag="标签"
			  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
			  <template #tags>
			    <van-tag plain type="danger">标签</van-tag>
			    <van-tag plain type="danger">标签</van-tag>
			  </template>
			  <template #footer>
			    <van-button size="mini">按钮</van-button>
			    <van-button size="mini">按钮</van-button>
			  </template>
			</van-card>
			
		</div>
		
		<div class="cart_submit">
			<van-submit-bar :price="3050" button-text="结算" @submit="onSubmit">
			  <van-checkbox v-model="checked">全选</van-checkbox>
			  <template #tip>
			    你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
			  </template>
			</van-submit-bar>
		</div>
		
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "./Footer.vue"
	import { Card } from 'vant';
	import { SubmitBar } from 'vant';
	import { Button } from 'vant';
	import { Tag } from 'vant';
	import { Checkbox } from 'vant';
	
	export default{
		name:"Cart",
		data(){
			return{
				checked:"",
			}
		},
		methods:{
			onSubmit(){},
			onClickEditAddress(){}
		},
		components:{
			Footer,
			[Card.name]:Card,
			[SubmitBar.name]:SubmitBar,
			[Button.name]:Button,
			[Tag.name]:Tag,
			[Checkbox.name]:Checkbox,
			
		}
	}
</script>

<style>
	.van-submit-bar{
		bottom: 50px;
	}
</style>
