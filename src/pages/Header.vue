<template>
	<div id="header">
		<div>
			开发
		</div>
	</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style>
	 #header{
		 /* border: solid green; */
		 /* border-width: 1px; */
		 flex-grow: 0;
		 /* flex-basis: auto; */
		 flex-shrink: 0;
	 }
</style>
