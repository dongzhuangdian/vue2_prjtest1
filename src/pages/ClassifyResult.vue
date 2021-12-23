<template>
	<div>
		测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境
		测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境
		测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境测试环境
		{{msg}}
		{{id}}
		</div>
</template>

<script>
	export default {
		name:"ClassifyResult",
		data(){
			return {
				msg:"测试通过了",
				id:this.$route.query.id
			}
		},
		watch:{
			$route(to,from){
				if(to.query.id != from.query.id){
					console.log(to.query.id)
				}
			}
		}
	}
</script>

<style>
</style>
