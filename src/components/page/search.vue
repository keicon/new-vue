<template>
  <div>
    <!-- heard -->
    <div class="search-top">
      <van-row>
        <van-col span="4" class="fan-left" @click="goBack()">
          <img :src="fan_icon2" width="80%" alt />
        </van-col>
        <van-col span="16">
          <b class="fan-top">分类</b>
        </van-col>
        <van-col span="4" class="fan-right" @click="fuku">
          <img :src="fan_icon1" width="80%" alt />
        </van-col>
      </van-row>
      <!-- 小块 -->
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
    <!-- column-title -->
    <div class="bos-column ">
      <van-sidebar class="bos-column-van" v-model="activeKey">
        <van-sidebar-item
          :title="item.name"
          v-for="(item,index) in column"
          :key="index"
          @click="getData(item.api2)"
        />
      </van-sidebar>
      <div class="column-right">
        <template v-for="item1 in ttt">
          <template v-for="a of item1">
            <template v-for="(i,t) of a">
              <div class="column-right-bos" :key="t">
                <!-- {{i}} -->
                <van-row>
                  <van-col span="24" class="column-right-col24">
                    <p v-html="i.title" class="column-right-p"></p>
                  </van-col>
                  <div class="column-right-kuai">
                    <template v-for="(y,k) of i.ul">
                      <van-col span="8" :key="k" class="column-span">
                        <!-- {{y}} -->
                        <router-link to="/Inside">
                          <!-- 路由去-->
                          <img :src="y.url" width="100%" alt />
                          <span v-html="y.title" class="column-zi"></span>
                        </router-link>
                      </van-col>
                    </template>
                  </div>
                </van-row>
              </div>
            </template>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GoBack",
  data() {
    return {
      // biaotou:"分类",
      xianshi: false,
      activeKey: 0,
      fan_icon1: require("../../assets/images/icon-1.png"),
      fan_icon2: require("../../assets/images/icon-2.png"),
      sy: require("../../assets/images/sy.png"),
      ss: require("../../assets/images/ss.png"),
      gwc: require("../../assets/images/gwc.png"),
      wd: require("../../assets/images/wd.png"),
      jt: require("../../assets/images/sjx.png"),
      
      column: [],
      ffff: [],
      ttt: []
    };
  },
  created() {
    axios({
      url: `/static/json/api2.json`,
      method: "get"
    })
      .then(response => {
        if (response.status == 200) {
          this.column = response.data.data.column;
          this.ffff = response.data.data.pailei;
          //  console.log(response.data.data.column);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  //初始化调用一次
  mounted() {
    this.getData("home0");
  },
  methods: {
    getData(key) {
      axios.get(`/static/json/${key}.json`).then(res => {
        // res.data.pailei[0].list;
        this.ttt = res.data.pailei;
        console.log(this.ttt);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    listck(index) {
      window.console.log(index);
      this.activated = index;
      // this.fun(index);
    },
    fuku() {
      this.xianshi = !this.xianshi;
      console.log(this.xianshi);
    }
  }
};
</script>

<style  scoped>
.bos-column {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.column-right {
  width: 75%;
  background: #fff;
}
.column-right-bos {
  margin: 10px 7px 0;
}
.column-right-col24 {
  height: 35px;
  margin: 1px 0px 10px 0;
}
.column-right-p {
  font-size: 14px;
  font-weight: 700;
}
.column-right-kuai {
  padding: 0px 8px 0;
  overflow: hidden;
}
.column-span {
  width: 78px;
  float: left;
  text-align: center;
}
.column-span img {
  width: 60px;
  height: 60px;
}
.column-zi {
  display: inline-block;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #686868;
  height: 25px;
  margin-top: 3px;
  -webkit-box-pack: start;
}
.search-top {
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
.van-sidebar {
  float: left;
  overflow: hidden;
  width: 25%;
}
.van-row {
  overflow: hidden;
}
/* .bos-column-van{
  overflow-y: scroll;
  height: calc(100vh-45px)!important;
} */
</style>