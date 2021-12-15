<template>
	<div id="content">
		<div id="picture">
		

		</div>
	</div>
</template>

<script>
	export default {
	  name: 'Content',
	  props: {
	    msg: String
	  }
	}
</script>

<style>
	#content{
		color: #62C8F3;
		border: solid;
		border-width: 1px;
		flex-grow: 1;
		flex-shrink: 1;
		overflow-y: auto;
	}
</style>
