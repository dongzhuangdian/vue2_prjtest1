<template>
  <div id="app">
    <!-- <HelloWorld msg="项目测试"/> -->
	<Header></Header>
	
	<router-view></router-view>
	<Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from "./components/Footer.vue"



export default {
  name: 'app',
  components: {
    // HelloWorld,
	Header,
	Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
