<template>
	<div>
		<div class="cart_cards" v-for="x in 8">
			
			<div class="cart_check">
				<van-checkbox v-model="checked" checked-color="#ee0a24"/>
			</div>
			
			
			<van-card  class="cart_card" num="2" price="2.00" desc="描述信息" 
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
		
	</div>
</template>

<script>
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
			onSubmit(){
				this.$router.push({name:"payment"})
			},
			onClickEditAddress(){}
		},
		components:{
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
	.cart_cards{
		display: flex;
		flex-direction:  row;
		/* justify-content: space-around; */
	}
	.cart_card{
		width: 100%;
	}
	.cart_check{
		margin-left: 10px;
		margin-right: 15px;
		display: flex;
	}
</style>
