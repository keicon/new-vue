<template>
  <div>
    <div class="search-bar">
      <van-row id="row-top">
        <van-col span="20">
          <span class="search-sousuo">
            <img width="70%" :src="sousuo" class="search-sousuo-1" alt />
          </span>
          <input type="text" placeholder="熊本熊" class="search-input" />
        </van-col>
        <van-col span="4">
          <!-- <img width="60%" :src="logoicon" class="logoicon-icon" alt /> -->
          <router-link to="/me">
            <div class="logoicon-icon">
              <span>...</span>
            </div>
          </router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sousuo: require("../../assets/images/sousuo.png"),
      logoicon: require("../../assets/images/logoicon.png")
    };
  }
};
</script>

<style scoped>
.search-bar {
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 2.2rem;
  line-height: 2.2rem;
  position: relative;
  border-bottom: 1px solid #ccc;
}
#row-top {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: linear-gradient(rgba(209, 207, 207, 1), rgba(209, 207, 207, 0.2));
  background: -webkit-linear-gradient(
    rgba(209, 207, 207, 1),
    rgba(209, 207, 207, 0.2)
  );
  /* border: 1px solid black; */
  /* border-radius: 0 0 10px 10px; */
}
.search-sousuo {
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  position: absolute;
  top: 9px;
  left: 20px;
  overflow: hidden;
}
.search-sousuo-1 {
  vertical-align: middle;
  width: 25px;
  height: 25px;
  line-height: 25px;
}
.search-input {
  margin: 0 0 0 15px;
  width: 97%;
  height: 1.3rem;
  border-radius: 20px 20px;
  border: 1px solid #ece9e9;
  text-indent: 2rem;
  font-size: 12px;
}
.logoicon-icon {
  vertical-align: middle;
  display: inline-block;
  width: 25px;
  height: 22px;
  border: 1px solid #a29b9b;
  border-radius: 10px 10px;
}
.logoicon-icon span {
  text-align: center;
  margin: 0 6px;
  display: block;
  line-height: 10px;
  color: #868484;
  width: 10px;
  height: 10px;
}
</style>