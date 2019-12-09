<template>
  <div>
    <div style="background:#eee;padding: 5px 10px 10px 10px">
      <div class="other-Top">
        <div class="other-i">
          <img class="Top-a-img" width="100%" :src="shezhi" onclick="history.go(-1)" alt />
        </div>
        <h2 class="other-h2">用户管理</h2>
      </div>
      <div class="other-info">
        <div class="row">
          <font>头像</font>
          <span>
            <img class="headr" :src="touxiang" width="100%" alt />
          </span>
        </div>
        <div class="row">
          <font>名称</font>
          <span>死穷逼一个</span>
        </div>
        <div class="row">
          <font>联系人</font>
          <span>雷人炒粉</span>
        </div>
        <div class="row">
          <font>联系电话</font>
          <span>1300000000</span>
        </div>
      </div>
      <!-- -- -->
      <div class="other-info-twe">
        <div class="row">
          <font>通用</font>
        </div>
        <div class="row">
          <font>隐私</font>
        </div>
        <div class="row">
          <font>支付设置</font>
        </div>
        <div class="row">
          <font>地址管理</font>
          <span>北京东路夕阳北街南巷112号</span>
        </div>
      </div>
      <!-- - -->
      <!-- <h4></h4> -->
      <span @click="exlogin" class="loginOut">退出登录</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shezhi: require("../../assets/images/icon-2.png"),
      touxiang: require("../../assets/images/tou.jpg")
    };
  },
  methods: {
    exlogin() {
      localStorage.removeItem("islogin");
      this.$router.push({ path: "/me" });
    }
  }
};
</script>

<style  scoped>
.other-Top {
  width: 100%;
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: hidden;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.other-i {
  width: 32px;
  height: 17px;
  float: left;
  margin-right: 20px;
  margin-top: 12px;
}
.Top-a-img {
  width: 25px;
  height: 25px;
}
.other-h2 {
  margin: auto 80px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #000;
  float: left;
  font-size: 16px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.other-info {
  background-color: #fff;
  margin-top: 15px;
}
.row {
  line-height: 50px;
  padding: 0 10px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
}
.row font {
  float: left;
  width: 70px;
  font-size: 13px;
}
.row span {
  width: 75%;
  float: right;
  color: #999;
  text-align: right;
  font-size: 14px;
}
.headr {
  width: 40px;
  height: 40px;
  margin: 5px;
  float: right;
}
.other-info-twe {
  background-color: #fff;
  margin-top: 15px;
}

.loginOut {
  border-radius: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #e25f13;
  color: #fff;
  display: block;
  overflow: hidden;
  position: fixed;
  bottom: 10px;
  left: 0;
}
</style>