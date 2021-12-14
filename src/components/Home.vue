<template>
  <div id="home">
    <!-- <HelloWorld msg="项目测试"/> -->
	<!-- <Header></Header> -->
	<!-- <router-view></router-view> -->
	<Content></Content>
	<!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Header from './Header.vue'
import Content from './Content.vue'
// import Footer from './Footer.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
	// Header,
	Content,
	// Footer
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
