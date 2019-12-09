<template>
  <div>
    <!-- float-floor -->
    <!-- btnFlag 控制图片显示隐藏 -->
    <!-- backTop 回顶部的方法 -->
    <div class="float-floor" v-if="btnFlag" @click="backTop">
      <img :src="floor_img" width="100%" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnFlag: false, //切换图片
      floor_img: require("../../assets/images/Ding.png")
    };
  },
  mounted() {
    // addEventListener  向按钮添加点击事件
    window.addEventListener("scroll", this.scrollToTop);
  },
  //销毁一个实例
  destroyed() {
    // removeEventListener  移除事件
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    backTop() {
      // 点击回到顶部方法，加计时器是为了过渡顺滑
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 10);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>

<style scoped>
.float-floor {
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: right;
  position: fixed;
  right: 0;
  bottom: 60px;
  background: #ccc;
}
.float-floor img {
  margin: 5px 5px;
  width: 30px;
  height: 30px;
}
</style>