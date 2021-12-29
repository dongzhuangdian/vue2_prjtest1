<template>
	<div>
		<van-cell title="收货地址" is-link>
		  <!-- 使用 title 插槽来自定义标题 -->
		  <template #label>
		    <p style="line-height:5px; color: #000000;">{{address}}</p>
			<p style="line-height:5px; color: #000000;">{{cellphone}}{{name}}</p>
		  </template>
		</van-cell>
		
		<!-- <van-divider /> -->
	
		<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
		  <template #tip>
		    你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
		  </template>
		</van-submit-bar>
	</div>
	
</template>

<script>
	import { SubmitBar } from 'vant';
	import { Cell } from 'vant';
	import { Divider } from 'vant';
	export default {
		name:"Payment",
		data(){
			return {
				address:"北京回龙观阶段龙兴园西区13号楼5单元303",
				cellphone:"18888888886",
				name:"小陈"
			}
		},
		methods:{
			onSubmit(){},
			onClickEditAddress(){}
		},
		components:{
			[SubmitBar.name]:SubmitBar,
			[Cell.name]:Cell,
			[Divider.name]:Divider
		}
		
	}
</script>

<style>
	.van-cell::after{
		border-bottom:1px solid #f05518;
	}
	
</style>
