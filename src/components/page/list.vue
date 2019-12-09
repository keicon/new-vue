<template>
  <div>
    <!-- list-Top -->
    <div class="list-Top">
      <div class="list-left">
        <img class="list-left-img" :src="fan_icon2" onclick="history.go(-1)" alt />
      </div>
      <div class="list-right" @click="fuku">
        <img class="list-right-img" :src="fan_icon1" alt />
      </div>
      <!-- 小框 -->
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
    <!-- swiper -->
    <div class="swiper-area">
      <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="( banner , index ) in bannerArray" :key="index">
          <img :src="banner" width="100%" alt />
          <!-- lazy   懒加载-->
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- info -->
    <!-- v-for="(it, index) in arr" :key="index" -->
    <div class="buy_area">
      <div class="buy_priceWrap">
        <div class="price-wrap-left">
          <span class="wrap-left-span">
            ¥
            <em class="wrap-left-em">{{this.jieshou.mallPrice}}</em>
            .00
          </span>
        </div>

        <div class="price-wrap-right">
          <span class="wrap-right-span">
            <i>
              <img :src="warp_jj" alt />
            </i>
            <p>降价提醒</p>
          </span>
          <span class="wrap-right-span">
            <i class="wrap-right-span-bj"></i>
            <p>收藏</p>
          </span>
        </div>
      </div>
      <!-- v-标题 -->
      <div class="fn_wrap">
        <div class="fn_wrap-name">
          <i class="fn_wrap-name-i">
            <img :src="warp_zy" height="100%" width="100%" alt />
          </i>
          <div>{{this.jieshou.name}}</div>
        </div>
        <div class="fn_wrap-shorter">
          【新款特惠】飞利浦植物生长灯全光谱灯泡，防太阳自然光，增强光合作用。更多优惠猛戳！
          <a href="javascript:">查看></a>
        </div>
      </div>
    </div>

    <!-- -// -->
    <div class="box-bor">
      <div class="box-top">
        <span class="box-title">
          79万+ 评论
          <span class="mun">
            [
            <em>98%</em>
            好评]
          </span>
        </span>
        <span class="box-img"></span>
      </div>
      <div class="box-bottom">
        <span>已选择</span>
        <span class="box-bottom-title">16W全光谱灯泡+配黑色圆盘灯架,1个</span>
        <span class="box-img"></span>
      </div>
    </div>
    <!-- // -->
    <div class="box-trans">
      <div class="box-row">
        <div class="box-row-kuai">
          <span>送至</span>
        </div>
        <div class="box-row-two">
          <span class="box-row-title">北京朝阳区三环到四环之间</span>
          <p class="box-row-small">
            <span>现货</span>
            今日17:00前下单，预计11月26日18:00前发货
          </p>
        </div>
        <span class="box-img"></span>
      </div>
      <div class="box-row-tit">
        <span>重量</span>
        <span class="box-row-bjz">不计重量</span>
      </div>
      <div class="box-serve">
        <span class="box-serve-span">
          <b class="box-serve-b"></b>
          厂商发货配送
        </span>
        <span class="box-serve-span">
          <b class="box-serve-b"></b>
          7天无理由退货
        </span>
        <span class="box-img"></span>
      </div>
    </div>
    <!-- //Central -Tabs -->
    <div class="Central">
      <van-tabs v-model="active">
        <template v-for="( item1,index ) in CentralTabs">
          <div :key="index">
            <van-tab :title="item1.tit">
              <div class="Central-qie" v-for="(  it2, item1 ) in item1.zp" :key="item1">
                <p>
                  <img :src="it2.image" width="100%" alt />
                </p>
              </div>
            </van-tab>
          </div>
        </template>
      </van-tabs>
    </div>
    <!-- <div>
      <h4></h4>
    </div>-->
    <!-- bottom-->
    <div class="mod-bottom">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <span class="num-b" ref="one">{{num_b}}</span>
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>

    <!-- 组件 -->
    <floatComponent />
  </div>
</template>

<script>
import axios from "axios";
import floatComponent from "../component/floatComponent";
import shopcartVue from "./shopcart.vue";
import store from "@/vuex/store";
import { mapState, mapMutations } from "vuex";

export default {
  name: "GoBack",
  data() {
    return {
      num_b: " ",
      active: "2", //tabs
      xianshi: false, //右边点击事件
      fan_icon1: require("../../assets/images/icon-1.png"),
      fan_icon2: require("../../assets/images/icon-2.png"),
      sy: require("../../assets/images/sy.png"),
      ss: require("../../assets/images/ss.png"),
      gwc: require("../../assets/images/gwc.png"),
      wd: require("../../assets/images/wd.png"),
      jt: require("../../assets/images/sjx.png"),
      warp_jj: require("../../assets/images/warp-jj.png"),
      warp_zy: require("../../assets/images/v-shop.png"),

      bannerArray: [], // 轮播
      CentralTabs: [], //tabs
      arr: [],
      jieshou: [],
      sendCart: {}
    };
  },
  created() {
    axios({
      url: "/static/json/api2.json",
      method: "get"
    })
      .then(response => {
        // console.log(response);
        if (response.status == 200) {
          this.CentralTabs = response.data.data.CentralTabs;
          this.arr = response;
          this.jieshou = this.arr.data.data.hotGoods[this.$route.params.id - 1];
          this.bannerArray = this.jieshou.img;

          this.sendCart = {
            img: this.jieshou.img[0],
            Price: this.jieshou.mallPrice,
            name: this.jieshou.name,
            id: this.jieshou.id,
            num: 1,
            checked:false
          };
        }
      })
      .catch(error => {
        console.log(error);
      });
    // window.console.log(hotGoods[this.$route.params.id]);
  },
  //挂载组件
  components: {
    floatComponent
  },
  methods: {
    fuku() {
      this.xianshi = !this.xianshi;
      console.log(this.xianshi);
    },
    onClickIcon() {
      this.$router.push({ path: "/shopcart" });
    },
    onClickButton() {
      this.$toast.success("加入购物车");
      this.num_b++;
      this.$refs.one.style.display = "block";

      //存进本地.localStorage
      this.addCar = {};
      localStorage.setItem("addCar", JSON.stringify(this.sendCart));

      //存进vuex 里面
      this.xiuCount(this.sendCart);
      window.console.log(this.xiuCount)
    },
    ...mapMutations(["xiuCount"])
  },
  computed: {
    ...mapState(["count"])
  }
};
</script>

<style  scoped>
.list-Top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 101;
}
.list-left {
  float: left;
  display: block;
  width: 30px;
  height: 30px;
  background: #ccc;
  border-radius: 50%;
  margin: 10px 10px;
  overflow: hidden;
}
.list-left-img {
  width: 20px;
  height: 20px;
  margin: 4px 4px;
  color: white;
}
.list-right {
  float: right;
  display: block;
  width: 30px;
  height: 30px;
  background: #ccc;
  border-radius: 50%;
  margin: 10px 10px;
  overflow: hidden;
}
.list-right-img {
  width: 20px;
  height: 4px;
  margin: 2px 4px;
  color: white;
}
.Heade-swiper {
  height: 100px;
}
.buy_area {
  overflow: hidden;
  background: #fff;
}
.buy_priceWrap {
  padding: 0 10px;
  line-height: 20px;
  margin-bottom: 5px;
  font-size: 12px;
  padding-top: 14px;
  padding-bottom: 0;
  position: relative;
}
.price-wrap-left {
  font-size: 16px;
  display: inline-block;
}
.wrap-left-span {
  display: block;
  color: #e4393c;
  line-height: 20px;
  font-weight: 700;
}
.wrap-left-em {
  font-size: 24px;
  font-style: normal;
  margin: auto -5px;
}
.price-wrap-right {
  position: absolute;
  float: right;
  display: block;
  line-height: 40px;
  height: 40px;
  right: 0;
  top: 0;
  overflow: hidden;
}
.wrap-right-span {
  display: inline-block;
  margin-right: -10px;
  line-height: 12px;
  height: 10px;
  width: 60px;
  font-size: 10px;
  color: #999;
  text-align: center;
}
.wrap-right-span i {
  width: 20px;
  height: 20px;
  margin: -5px auto;
  text-align: center;
}
.wrap-right-span-bj {
  display: inline-block;
  background-image: url("../../assets/images/warp-sc.png");
  background-size: 25px 60px;
  background-position: -2px -38px;
}
.wrap-right-span i img {
  width: 15px;
  height: 15px;
  margin-top: 5px;
}
.wrap-right-span p {
  margin: 4px auto;
  margin-bottom: 0;
}
.fn_wrap {
  padding: 12px 10px;
  overflow: hidden;
}
.fn_wrap-name {
  /* text-indent: 1rem; */
  font-size: 15px;
  font-weight: 700;
  line-height: 24px;
  padding-right: 0;
}
.fn_wrap-name-i {
  width: 25px;
  height: 20px;
  display: block;
  float: left;
  overflow: hidden;
  padding: 2px 2px;
}
.fn_wrap-name-i img {
  width: 25px;
  height: 15px;
  text-align: center;
}
.fn_wrap-shorter {
  padding: 5px 0 0;
  line-height: 16px;
  position: relative;
  font-size: 12px;
  max-height: 35px;
  overflow: hidden;
  color: #999;
}
.fn_wrap-shorter a {
  display: inline-block;
  color: #e4393c;
  border-bottom: 1px solid red;
}
.box-bor {
  margin-top: 10px;
  background: #fff;
  padding: 8px 10px;
}
.box-top {
  /* display: block; */
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
}
.box-title {
  float: left;
  margin-right: 20px;
  color: #666;
  font-size: 13px;
}
.box-title .mun {
  color: #999;
}
.box-title .mun em {
  color: #ff3c25;
  font-style: normal;
}
.box-img {
  display: block;
  width: 15px;
  height: 15px;
  float: right;
  text-align: center;
  background-image: url("../../assets/images/arrow-right.png");
  background-size: 15px 15px;
  margin-top: 5px;
}
.box-bottom {
  padding: 10px 0 10px 10px;
  font-size: 12px;
  color: #999;
}
.box-bottom-title {
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
  color: #333;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box-trans {
  margin-top: 10px;
  background: #fff;
  padding: 8px 10px;
}
.box-row {
  margin-bottom: 3px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
}
.box-row-kuai {
  width: 50px;
  padding: 5px 0;
  text-align: center;
  float: left;
  color: #999;
}
.box-row-two {
  float: right;
}
.box-row-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  line-height: 25px;
  overflow: hidden;
  margin: 0 10px 0 5px;
}
.box-row-small {
  margin: 0 30px 3px 6px;
  flex-wrap: wrap;
}
.box-row-small span {
  line-height: 25px;
  font-size: 11px;
  color: #e4393c;
  margin-right: 3px;
  font-weight: 400;
}
.box-row-tit {
  padding: 0 0 15px 13px;
  font-size: 12px;
  color: #999;
  border-bottom: 1px solid #ccc;
}
.box-row-bjz {
  font-size: 14px;
  color: #333;
  padding-left: 10px;
}
.box-serve {
  margin: 0 0 10px;
  padding: 10px 0 0 10px;
  color: #999;
  font-size: 12px;
  line-height: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.box-serve-span {
  padding-right: 15px;
}
.box-serve-b {
  display: inline-block;
  text-align: center;
  width: 12px;
  height: 12px;
  background-image: url("../../assets/images/nike.png");
  background-size: 12px;
  vertical-align: middle;
}
.Central {
  margin-top: 10px;
}
.Central-qie {
  padding: 0 5px;
}
.Central-qie p {
  margin: 5px auto;
}

/* /小框 */
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
  top: 35px;
}
/* // */
.num-b {
  position: absolute;
  bottom: 30px;
  left: 80px;
  color: white;
  background: red;
  width: 17px;
  height: 17px;
  font-size: 12px;
  border-radius: 50%;
  line-height: 17px;
  text-align: center;
  z-index: 12;
  display: none;
}
</style>
