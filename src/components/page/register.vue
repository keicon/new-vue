<template>
  <div>
    <div class="head-top">
      <van-row>
        <van-col span="4" class="fan-left" @click="goBack()">
          <img :src="fan_icon2" width="80%" alt />
        </van-col>
        <van-col span="16">
          <b class="fan-top">{{biaotou}}</b>
        </van-col>
        <van-col span="4" class="fan-right" @click="fuku">
          <img :src="fan_icon1" width="80%" alt />
        </van-col>
      </van-row>
      <div class="www" v-show="xianshi">
        <div class="sjx">
          <img :src="jt" width="100%" alt />
        </div>
        <div class="m_header_nav">
          <div class="m_header_nav-kuai">
            <router-link to="/home">
              <img class="nav-kuai-img" :src="sy" width="100%" alt />
              <span class="nav-kuai-span">首页</span>
            </router-link>
          </div>
          <div class="m_header_nav-kuai">
            <router-link to="/search">
              <img class="nav-kuai-img" :src="ss" width="100%" alt />
              <span class="nav-kuai-span">分类搜索</span>
            </router-link>
          </div>
          <div class="m_header_nav-kuai">
            <router-link to="/shopcart">
              <img class="nav-kuai-img" :src="gwc" width="100%" alt />
              <span class="nav-kuai-span">购物车</span>
            </router-link>
          </div>
          <div class="m_header_nav-kuai">
            <router-link to="/me">
              <img class="nav-kuai-img" :src="wd" width="100%" alt />
              <span class="nav-kuai-span">我的</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- header -->
    <div class="register-header">
      <!-- // -->
      <div class="main-box">
        <div class="main-right">
          <div class="form">
            <div class="item">
              <span class="label">
                <b class="cRed">*</b>
                用户名 :
              </span>

              <div class="if fl">
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="text"
                  style="ime-mode:disabled ; font-size:12px"
                  placeholder="请输入用户名"
                  v-model="yonhum"
                  @blur="yonhu"
                />
                <label id="username_succeed" v-if="yinc1" class="blank">请输入正确的用户名</label>&nbsp;&nbsp;
              </div>
            </div>

            <div class="item">
              <span class="label">
                <b class="cRed">*</b>
                手机号码：
              </span>
              <div class="fl">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  class="text"
                  style="ime-mode:disabled ; font-size:12px"
                  placeholder="请输入手机号码"
                  v-model="haoma"
                  @blur="shouji"
                />
                <label id="phone_succeed" class="blank-2" v-if="yinc2">请输入正确的手机号码</label>&nbsp;&nbsp;
              </div>
            </div>

            <div id="o-password">
              <div class="item">
                <span class="label">
                  <b class="cRed">*</b>
                  请输入密码：
                </span>
                <div class="fl">
                  <input
                    type="password"
                    id="password"
                    placeholder="请输入密码"
                    name="password"
                    class="text"
                    v-model="mima"
                    @blur="pamima"
                  />

                  <label id="pwd_succeed" v-if="yinc3" class="blank-3">请输入正确的密码</label>
                </div>
              </div>
              <div class="item">
                <span class="label">
                  <b class="cRed">*</b>
                  请确认密码：
                </span>
                <div class="fl">
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    class="text"
                    placeholder="请确认密码"
                    v-model="spwar"
                    @blur="cfmima"
                    style="ime-mode:disabled ; font-size:12px"
                  />
                  <!--  -->
                  <!--    -->
                  <label id="pwd2_succeed" v-if="yinc4" class="blank-4">请输入正确的密码</label>
                </div>
              </div>
              <div class="item" style="overflow: hidden;height: auto;margin-bottom: 30px;">
                <p>
                  <a target="_blank" href="javascript:">点击阅读并同意相关条款和隐私政策</a>
                </p>
                <input
                  @click="but"
                  type="button"
                  class="btn-img btn-regist"
                  id="registsubmit"
                  value="同意以下协议，提交"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- // -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yonhum: "",
      haoma: "",
      mima: "",
      spwar: "",
      yinc1: false,
      yinc2: false,
      yinc3: false,
      yinc4: false,
      xianshi: false,
      biaotou: "注册",
      fan_icon1: require("../../assets/images/icon-1.png"),
      fan_icon2: require("../../assets/images/icon-2.png"),
      sy: require("../../assets/images/sy.png"),
      ss: require("../../assets/images/ss.png"),
      gwc: require("../../assets/images/gwc.png"),
      wd: require("../../assets/images/wd.png"),
      jt: require("../../assets/images/sjx.png")
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    fuku() {
      this.xianshi = !this.xianshi;
      console.log(this.xianshi);
    },
    //shijian
    yonhu() {
      if (/^[a-zA-Z0-9_-]{4,16}$/.test(this.yonhum)) {
        this.yinc1 = false;
        // window.console.log(1);
      } else {
        this.yinc1 = true;
        // this.yinc1.style.color = "red"
      }
    },
    shouji() {
      // window.console.log(123);
      if (
        /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(
          this.haoma
        )
      ) {
        this.yinc2 = false;
      } else {
        this.yinc2 = true;
      }
    },
    pamima() {
      if (/^[a-zA-Z0-9_-]{4,16}$/.test(this.mima)) {
        this.yinc3 = false;
      } else {
        this.yinc3 = true;
      }
    },
    cfmima() {
      // window.console.log(this.mima = true);
      if (this.mima == this.spwar) {
        this.yinc4 = false;
      } else {
        this.yinc4 = true;
      }
    },
    but() {
      window.console.log(123);
      if (window.localStorage.useArr) {
        var array = JSON.parse(window.localStorage.useArr);
      } else {
        array = [];
      }
      if (
        /^[a-zA-Z0-9_-]{4,16}$/.test(this.yonhum) &&
        /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(
          this.haoma
        ) &&
        /^[a-zA-Z0-9_-]{4,16}$/.test(this.mima) &&
        this.mima == this.spwar
      ) {
        var obj = {
          use: this.yonhum,
          paw: this.mima
        };
        array.push(obj);
        window.localStorage.useArr = JSON.stringify(array);
        window.console.log(456);
        alert("注册成功");
        this.$router.push({ path: "/me" });
        // location.href = "/me";
      } else {
        // window.console.log(0);
      }
    }
  }
};
</script>

<style scoped>
/* ** */
.head-top {
  background: #fff;
  max-width: 100%;
  text-align: center;
  border-bottom: 1px solid #ccc;
  position: relative;
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
.m_header_nav {
  width: 110px;
  height: 135px;
  position: absolute;
  top: 15px;
  left: 235px;
  overflow: hidden;
  background: rgba(0, 0, 0, 1);
  border-radius: 4px;
}
.m_header_nav-kuai {
  width: 100%;
  height: 33px;
  border-bottom: 1px solid rgb(167, 165, 165);
}
.nav-kuai-img {
  padding: 7px 8px;
  width: 15px;
  height: 15px;
  float: left;
}
.nav-kuai-span {
  font-weight: 400;
  display: inline-block;
  color: white;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  float: left;
  margin-top: 6px;
}
.sjx {
  display: block;
  position: absolute;
  top: 0;
  right: 20px;
  width: 20px;
  height: 20px;
}
.www {
  position: relative;
  top: -10px;
  z-index: 1;
}
/* /// */
.ydcenter-main {
  width: 100%;
  padding: 0;
  margin: 20px auto;
  overflow: hidden;
}

.ydcenter-main .main-box {
  margin: 0 auto;
}

.ydcenter-main input,
.ydcenter-main button {
  outline: none;
}

.main-box .main-left {
  height: 40px;
  padding: 10px 0px;
  overflow: hidden;
}

.main-left h2 {
  color: #666;
  float: left;
  height: 40px;
  font-size: 22px;
  padding-left: 15px;
  line-height: 33px;
}

.main-left span {
  float: right;
  height: 33px;
  line-height: 33px;
  text-align: right;
  font-size: 13px;
  color: grey;
}

.main-left span a {
  font-size: 13px;
  color: rgb(230, 4, 4);
}

.main-box .main-right {
  padding: 25px 25px 20px;
  margin-bottom: 10px;
  background: #fff;
}

.form .item {
  padding-top: 5px;
  height: 50px;
  line-height: 26px;
  position: relative;
}

.item .if {
  height: 36px;
}

#username_succeed {
  display: block;
  height: 23px;
  position: absolute;
  top: 30px;
  left: 100px;
  font-size: 12px;
  /* color: #666; */
  color: red;
}

#phone_succeed {
  display: block;
  height: 20px;
  position: absolute;
  top: 30px;
  left: 100px;
  font-size: 12px;
  color: red;
}

#pwd_succeed {
  display: block;
  height: 20px;
  position: absolute;
  top: 30px;
  left: 100px;
  font-size: 12px;
  color: red;
}

#pwd2_succeed {
  display: block;
  width: 100%;
  height: 20px;
  position: absolute;
  top: 30px;
  left: 100px;
  font-size: 12px;
  color: red;
}

.label {
  text-align: right;
  font-size: 13px;
  float: left;
  color: #474747;
}

.label .cRed {
  margin-right: 5px;
  font-weight: normal;
  color: #fe0040;
}

.if .catselect {
  /* width: 93px; */
  text-align: center;
  margin: auto 8px;
  outline: none;
}

option {
  font-weight: normal;
  display: block;
  white-space: pre;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}

.text {
  float: right;
  width: 200px;
  height: 16px;
  padding: 4px 3px;
  border: 1px solid #bbb;
  font-size: 14px;
  /* margin: auto 8px; */
}

#o-password .item .btn-regist {
  width: 260px;
  height: 30px;
  line-height: 30px;
  border: 0 none;
  background: rgb(207, 28, 4);
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 25px;
  color: white;
}

#o-password .item a {
  display: block;
  color: #474747;
  font-size: 12px;
  margin-left: 56px;
  font-weight: 500;
}
</style>