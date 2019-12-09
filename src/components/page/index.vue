<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" :to="'home'" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" :to="'search'" icon="apps-o" dot>分类</van-tabbar-item>
      <van-tabbar-item name="shopcart" :to="'shopcart'" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="me" :to="'me'" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  },
  updated() {
    this.active = window.location.hash.split("/")[1];
  }
};
</script>

<style scoped>
</style>