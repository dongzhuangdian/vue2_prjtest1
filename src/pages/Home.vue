<template>
  <div id="home">
	<Swipe></Swipe>
  </div>
</template>

<script>
// import Header from './Header.vue'
import Swipe from './Swipe.vue'


export default {
  name: 'Home',
  components: {
	// Header,
	Swipe,
  }
}
</script>

<style>
#home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
