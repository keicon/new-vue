<template>
  <div id="app">
    <div v-if="swi">
      <router-view />
    </div>

    <div v-else>
      <topComponent />
    </div>
  </div>
</template>

<script>
import topComponent from "./components/component/topComponent";
export default {
  name: "App",
  data() {
    return {
      swi: true
    };
  },
  components: {
    //挂载部分组件
    topComponent
  }
};
</script>

<style>
#app {
  /* background: #e7e6e6; */
  background: #f7f7f7;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
