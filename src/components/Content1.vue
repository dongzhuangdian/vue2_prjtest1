<template>
	<div id="content">
		<div id="picture">
			picture<br>
			picture<br>
			picture<br>

		</div>
	</div>
</template>

<script>
	export default {
	  name: 'Content1',
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
		/* flex:1,0,auto; */
		flex-grow: 1;
		/* flex-basis: auto; */
		flex-shrink: 1;
		/* width: 100%; */
		overflow-y: auto;
	}
</style>
