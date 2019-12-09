<template>
  <div>
    <div v-if="islogin" id="me">
      <!-- header -->
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
      <!-- 内容 -->
      <div class="me-aggregate">
        <div class="me-deng">
          <div class="me-quanbu">
            <p class="me-p">
              <input
                class="me-input"
                @click="show"
                @blur="onBlur"
                type="text"
                v-model="user"
                id="uesrname"
                name="uesrname"
                placeholder="用户名/邮箱/手机号"
              />
              <i class="icon">
                <img class="icon-x" v-show="xs" @click="cuo" :src="x" alt />
              </i>
            </p>
            <p class="me-p">
              <input
                class="me-input"
                id="pawss"
                name="pawss"
                :type="pwdType"
                placeholder="密码"
                maxlength="15"
              />
              <i class="icon2">
                <img :src="openeye" class="eye" alt @click="changeType()" />
              </i>
            </p>
          </div>
          <div>
            <!-- <router-link to="/complete"> -->
            <van-button class="register-panel" @click="Dian" type="danger" size="large">登录</van-button>
            <!-- </router-link> -->
            <div class="zhucei">
              <div class="zhucei-bod">
                <span>还没有账号？</span>
                <router-link to="/register">
                  <span class="zhucei-span">快速注册</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <COMplete />
    </div>
  </div>
</template>

<script>
import COMplete from "./complete";

import axios from "axios";
export default {
  name: "GoBack",
  data() {
    return {
      islogin: true,
      user: "",
      xs: false,
      xianshi: false,
      biaotou: "登录",
      pwdType: "password", //eye-切换
      openeye: require("../../assets/images/zhen2.png"), //eye-切换
      x: require("../../assets/images/x.png"),
      fan_icon1: require("../../assets/images/icon-1.png"),
      fan_icon2: require("../../assets/images/icon-2.png"),
      sy: require("../../assets/images/sy.png"),
      ss: require("../../assets/images/ss.png"),
      gwc: require("../../assets/images/gwc.png"),
      wd: require("../../assets/images/wd.png"),
      jt: require("../../assets/images/sjx.png")
    };
  },
  components: {
    COMplete
  },

  methods: {
    //eye-切换
    changeType() {
      this.pwdType = this.pwdType === "password" ? "text" : "password";
      console.log(this.pwdType);
      this.openeye =
        this.openeye == require("@/assets/images/zhen2.png")
          ? require("@/assets/images/zhen1.png")
          : require("@/assets/images/zhen2.png");
    },
    goBack() {
      this.$router.go(-1);
    },
    fuku() {
      this.xianshi = !this.xianshi;
      console.log(this.xianshi);
    },
    show() {
      this.xs = true;
    },
    cuo() {
      this.user = "";
      this.xs = false;
    },
    onBlur() {
      // window.console.log(this.user)
      if (this.user == "") {
        this.xs = false;
      } else {
        this.xs = true;
      }
    },
    Dian() {
      // console.log(window.localStorage.useArr);
      //写进本地的的存储
      if (window.localStorage.useArr) {
        var array = JSON.parse(window.localStorage.useArr);
      } else {
        array = [];
      }

      if (window.localStorage.islogin) {
        var arr = [];
      } else {
        arr = [];
      }

      //拿input
      let usename = document.getElementsByName("uesrname")[0];
      let pawab = document.getElementsByName("pawss")[0];
      let iflogin = false;
      let index = 0;
      // console.log(usename, pawab);

      for (var i = 0; i < array.length; i++) {
        if (usename.value === array[i].use) {
          iflogin = true;
          index = i;
        }
      }

      //给两个input 做判断
      if (usename.value == "") {
        alert("请输入账号密码");
      } else {
        if (iflogin) {
          // console.log(array[index]);
          
          if (pawab.value === array[index].paw) {
            let obj = array[index];
            arr.push(obj);
            window.localStorage.islogin = JSON.stringify(arr);
            // console.log(array[index]);
            alert("登录成功");
            this.$router.push({ path: "/complete" });
          } else {
            alert("密码错误");
          }
        } else {
          alert("此用户未注册");
        }
      }
    }
  },
  created() {
    if (window.localStorage.islogin) {
      this.islogin = false;
    } else {
      this.islogin = true;
    }
  }
};
</script>

<style  scoped>
.register-panel {
  margin-top: 1rem;
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  display: block;
  background-color: #efefef;
  border-radius: 1.25rem;
  font-size: 1rem;
  color: #fff;
  border: 1px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #fa8989),
    color-stop(73%, #f78475),
    to(#f89576)
  );
}
.me-deng {
  text-align: left;
  background: #fff;
  padding: 0 1.25rem 0.25rem;
}
.me-quanbu {
  overflow: hidden;
}
.me-p {
  margin-top: 20px;
  height: 3rem;
  padding-top: 15px;
  padding-bottom: 5px;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #efefef;
  -webkit-box-sizing: border-box;
}
.me-p input {
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: normal;
  border-radius: 0;
  border: 0;
  font-size: 15px;
  outline: none;
}
.me-input {
  height: 100%;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.icon {
  display: block;
  position: absolute;
  left: 280px;
  top: 80px;
  width: 13px;
  height: 22px;
}
.icon-x {
  width: 25px;
  height: 25px;
}
.icon2 {
  display: block;
  position: absolute;
  left: 280px;
  top: 155px;
  width: 13px;
  height: 22px;
}
.eye {
  width: 25px;
  height: 25px;
}
.zhucei {
  margin: 0 auto;
}
.zhucei-bod {
  margin-top: 15px;
  font-size: 13px;
}
.zhucei-span {
  color: red;
}

/* / */
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
}
</style>