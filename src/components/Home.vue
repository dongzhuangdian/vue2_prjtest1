<template>
  <div id="home">
	<Header></Header>
	<Content></Content>
  </div>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'


export default {
  name: 'Home',
  components: {
	Header,
	Content,
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
