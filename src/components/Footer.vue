<template>
	<div id="footer">
		<div>
			<button type="button">SMS</button>
			<button type="button">MOB</button>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'Footer',
	  props: {
	    msg: String
	  }
	}
</script>

<style>
	#footer{
		border: solid red;
		border-width: 1px;
	}
</style>
