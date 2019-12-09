<template>
  <div>
    <!-- head -->
    <div class="head-top">
      <van-row>
        <van-col span="4" class="fan-left" @click="goBack()">
          <img :src="fan_icon2" width="80%" alt />
        </van-col>
        <van-col span="16">
          <b class="fan-top">{{biaotou}}</b>
        </van-col>
        <van-col span="4" class="fan-right">
          <img :src="fan_icon1" width="80%" alt />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GoBack",
  data() {
    return {
      biaotou:"分类",
      fan_icon1: require("../../assets/images/icon-1.png"),
      fan_icon2: require("../../assets/images/icon-2.png")
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style  scoped>
.head-top {
  background: #fff;
  max-width: 100%;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
.fan-top {
  text-align: center;
  line-height: 40px;
}
.fan-left {
  height: 40px;
}
.fan-left img {
  width: 20px;
  height: 20px;
  margin: 10px auto;
}
.fan-right img {
  width: 20px;
  height: 4px;
  margin: -2px auto;
}
.fan-right {
  display: block;
  height: 40px;
}
</style>