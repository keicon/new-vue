<template>
  <div>
    <div style="background:#eee;padding: 5px 10px 2px 10px">
      <!-- lower-Top -->
      <div class="lower-Top">
        <img class="Top-img" src="static/img/me/myUserHead.jpg" alt />
        <p class="Top-p">{{user}}</p>
        <!-- 设置 -->
        <router-link to="/chantInfo">
          <div class="Top-a">
            <img class="Top-a-img" width="100%" :src="shezhi" alt />
          </div>
        </router-link>
        <div class="Top-b">
          <img class="Top-a-img" width="100%" :src="shezhi1" @click="goBack()" alt />
        </div>
      </div>

      <!-- lower-header -->
      <div class="lower-header">
        <div class="lower-ul">
          <div class="lower-li">
            <a href="#">
              <i>0.00</i>
              <p>余额</p>
            </a>
          </div>
          <div class="lower-li">
            <a href="#">
              <i>0.00</i>
              <p>返利</p>
            </a>
          </div>
          <div class="lower-li">
            <a href="#">
              <i>0.00</i>
              <p>欠款</p>
            </a>
          </div>
          <div
            class="lower-li"
            style="background: url(/static/img/me/myOrder_bg.png) no-repeat left;
            width: 20%;"
          >
            <a href="#">
              <i>
                <img class="qian" :src="lower" alt />
              </i>
              <p>我的钱包</p>
            </a>
          </div>
        </div>
      </div>

      <!-- lower-middle -->
      <div class="lower-middle">
        <div>
          <div class="middle-ul">
            <div class="middle-li" v-for="(item,index) in compa" :key="index">
              <a class="middle-li-a" href="javasrcipt:;">
                <i>
                  <img class="middle-li-img" :src="item.image" alt />
                </i>
                <p v-html="item.name"></p>
              </a>
            </div>
            <div
              class="middle-li"
              style="background: url(/static/img/me/myOrder_bg.png) no-repeat left;
              width: 20%;"
            >
              <a class="middle-li-a" href="javasrcipt:;">
                <i>
                  <img class="middle-li-img" :src="middle" alt />
                </i>
                <p>我的订单</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- lower-bottom -->
      <div class="lower-bottom">
        <div class="bottom-biao">
          <h1>必备工具</h1>
        </div>
        <div class="bottom-ul">
          <div class="bottom-li" v-for="(item,index) in lowimg" :key="index">
            <a class="bottom-a" href="#">
              <i>
                <img :src="item.image" alt />
              </i>
              <p v-html="item.name"></p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      user: "",
      lowimg: [], //bottom

      shezhi: require("../../assets/images/set.png"),
      shezhi1: require("../../assets/images/icon-2.png"),
      lower: require("../../assets/images/fk.png"),
      middle: require("../../assets/images/qd.png"),
      compa: [] //middle
    };
  },
  created() {
    axios({
      url: "/static/json/api2.json",
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.compa = response.data.data.compa;
          this.lowimg = response.data.data.lowimg;
        }
      })
      .catch(error => {
        console.log(error);
      });

    this.loadComments();
    let userobj = JSON.parse(window.localStorage.islogin);
    // console.log(userobj[0]);
    this.user = userobj[0].use;
    console.log(this.user);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    loadComments() {
      // let loadComments = document.querySelector(".Top-p");
      // console.log(window.localStorage.getItem("islogin"));
      // window.console.log(window.localStorage.islogin);
    }
  }
};
</script>


 <style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.lower-Top {
  border-radius: 0 0 30% 30%;
  background: #e63e21;
  width: 100%;
  height: 160px;
  padding: 0 20px;
  text-align: center;
  overflow: hidden;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: hidden;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
}
.Top-img {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 50%;
  display: block;
}
.Top-p {
  color: #000;
  line-height: 40px;
  font-size: 16px;
}
.Top-a {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
}
.Top-a-img {
  width: 20px;
  height: 20px;
}
.Top-b {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
}
.lower-header {
  margin-top: 15px;
  background: #fff;
}
.lower-ul {
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: hidden;
}
.lower-li {
  float: left;
  width: 90px;
}
.lower-li a {
  width: 100%;
  padding: 23.5px 0;
  display: block;
  text-align: center;
  font-size: 14px;
  color: #181818;
}
.lower-li a i {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  margin-bottom: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  color: #fa4f61;
  font-style: normal;
}
.lower-li a i .qian {
  width: 30px;
  height: 30px;
  margin-bottom: -5px;
}
.lower-middle {
  margin-top: 15px;
  background: #fff;
}
.middle-ul {
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: hidden;
}
.middle-li {
  float: left;
  width: 20%;
}
.middle-li-a {
  width: 100%;
  padding: 20px 0;
  display: block;
  text-align: center;
  font-size: 14px;
  color: #181818;
}
.middle-li-a i {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  margin-bottom: 5px;
  font-size: 30px;
}
.middle-li-img {
  width: 30px;
  height: 30px;
  margin: 0 auto;
}
.middle-li-a p {
  font-size: 14px;
}
.You {
  border: 1px solid red;
  overflow: hidden;
}
.lower-bottom {
  margin-top: 15px;
  background: #fff;
  margin-bottom: 10px;
}
.bottom-biao {
  font-size: 14px;
}
.bottom-biao h1 {
  line-height: 40px;
  padding-left: 10px;
  font-size: 16px;
  color: #000000;
}
.bottom-ul {
  overflow: hidden;
}
.bottom-li {
  width: 25%;
  float: left;
  padding: 15px 0;
}
.bottom-a {
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  color: #585858;
  font-size: 16px;
}
.bottom-a i img {
  width: 30px;
  height: 30px;
  margin: 0 auto;
}
.bottom-a p {
  color: #323232;
  font-size: 14px;
}
</style>
 