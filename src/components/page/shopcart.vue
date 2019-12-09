<template>
  <div>
    <!-- heard -->
    <div class="shopcart-top">
      <van-row>
        <van-col span="4" class="fan-left" @click="goBack()">
          <img :src="fan_icon2" width="80%" alt />
        </van-col>
        <van-col span="16">
          <b class="fan-top">购物车</b>
        </van-col>
        <van-col span="4" class="fan-right" @click="fuku">
          <img :src="fan_icon1" width="80%" alt />
        </van-col>
      </van-row>
      <!-- --- -->
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

    <!-- shopcart_login_bar -->
    <div class="shopcart-cart">
      <!-- <div class="shopcart_login_bar">
        登录后可同步账户购物车中的商品
        <div class="shopcart_login-btn">登录</div>
      </div> -->

      <!-- 接收购物车 -->
      <div id="download_wrap" v-if="Getcart.length">
        <div class="wrap-box">
          <div class="wrap-top">
            <div class="icon">
              <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
            </div>
            <div class="warp-name">
              <span>店铺名字</span>
            </div>
          </div>
          <template v-for="(it,index) in Getcart">
            <div :key="index">
              <div class="warp-mille">
                <div class="warp-mille-box">
                  <div class="mille-box-left">
                    <i class="icon-i">
                      <van-checkbox v-model="it.checked" checked-color="red"></van-checkbox>
                    </i>
                    <img :src="it.img" class="mille-box-left-img" width="100%" alt />
                  </div>
                  <div class="mille-box-right">
                    <div class="mille-name">{{it.name}}</div>
                    <div class="price_line">
                      <div class="price">
                        ¥
                        <em class="int" v-html="it.Price"></em>
                        .00
                      </div>
                      <div>
                        <van-stepper v-model="it.num" />
                      </div>
                    </div>
                    <div class="m_action">
                      <span class="m_action_item" @click="addDelete(it)">删除</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <!-- {{Getcart}} -->
      </div>
      <!-- -- -->
      <div class="shopcart_empty_wrap" v-else>
        <img class="empty_icon" :src="boy_gwc" width="100%" alt />
        <p class="empty_txt">购物车中空空如也 ，快去加入购物车吧！！！</p>
      </div>
      <!-- ---- -->
      <!-- 提交 -->
      <div class="shopcart-submit">
        <van-submit-bar :price="totalMoney*100" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
      </div>

      <!-- Coupon -->
      <div class="Coupon">
        <div class="empty_cart_coupon">
          <div class="mod_coupon_head">
            <div class="mod_coupon_title">
              <img :src="top1" style="vertical-align: middle;" alt />
              新用户福利
              <i class="dot"></i>
              专属优惠礼包
              <img :src="botton2" style="vertical-align: middle;" alt />
            </div>
            <div class="mod_coupon_get">一键领取</div>
          </div>
          <div class="mod_coupon_area">
            <div class="mod_coupon">
              <img :src="Coupon" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- shopcart-floor -->
    <div class="shopcart-floor">
      <div class="shopcart-title">
        <!-- <i>-</i> -->
        <h3>可能你还想要</h3>
        <!-- <i>-</i> -->
      </div>
      <div class="shopcart-goods">
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
              <goodComponent
                :goodsImage="item.image"
                :goodsName="item.name"
                :goodsPrice="item.mallPrice"
              />
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import goodComponent from "../component/goodComponent";
import { mapState, Store } from "vuex";
export default {
  name: "GoBack",
  data() {
    return {
      xianshi: false,
      boy_gwc: require("../../assets/images/购物车.png"),
      Coupon: require("../../assets/images/优惠券.jpg"),
      top1: require("../../assets/images/left-top.jpg"),
      botton2: require("../../assets/images/right-botton.jpg"),
      fan_icon1: require("../../assets/images/icon-1.png"),
      fan_icon2: require("../../assets/images/icon-2.png"),
      sy: require("../../assets/images/sy.png"),
      ss: require("../../assets/images/ss.png"),
      gwc: require("../../assets/images/gwc.png"),
      wd: require("../../assets/images/wd.png"),
      jt: require("../../assets/images/sjx.png"),
      cart: require("../../assets/images/cart.jpg"),
      hotGoods: [], // 商品热卖
      Getcart: [] //取
      // obj1: []

      // cartInfo: [], //购物车内的商品
      // isEmpty: false //购物车是否为空，不为空则显示true，为空显示false
    };
  },
  components: {
    goodComponent
  },

  computed: {
    // 全选按钮
    checked: {
      get() {
        let arr = this.Getcart.filter(item => item.checked == true);
        if (arr.length == this.Getcart.length) {
          return true;
        } else {
          return false;
        }
      },
      set(value) {
        this.Getcart.map(item => (item.checked = value));
      }
    },
    //商品总价
    totalMoney() {
      let arr = this.Getcart.filter(item => item.checked == true);
      let newarr = arr.map(item => {
        return item.Price * item.num;
      });
      console.log(newarr);
      let sum = 0;
      for (let i = 0; i < newarr.length; i++) {
        sum = sum + newarr[i];
      }
      return sum;
    }
  },
  created() {
    axios({
      url: "/static/json/api2.json",
      method: "get"
    })
      .then(response => {
        if (response.status == 200) {
          this.hotGoods = response.data.data.hotGoods;
        }
      })
      .catch(error => {
        console.log(error);
      });

    // 渲染购物车 vuex
    this.Getcart = this.$store.state.count;

    // 渲染购物车 本地 localStorage
    // this.obj1 = JSON.parse(localStorage.getItem("addCar"));
    // window.console.log(obj1);
  },

  methods: {
    getSum() {},
    goBack() {
      this.$router.go(-1);
    },
    fuku() {
      this.xianshi = !this.xianshi;
      console.log(this.xianshi);
    },
    onSubmit() {
      window.console.log(122);
      this.$toast.success("你没钱！！");
    },
    //删除按键
    addDelete(index) {
      this.$dialog
        .alert({
          // title: "标题",
          message: "确定要删除？"
        })
        .then(() => {
          let hehe = this.Getcart.findIndex(item => {
            return item.id === index.id;
          });
          this.Getcart.splice(hehe, 1);
        });
      // this.$toast.success("已删除");
    }
  }
};
</script>

<style  scoped>
.shopcart-top {
  background: #fff;
  max-width: 100%;
  text-align: center;
  border-bottom: 1px solid #ccc;
  z-index: 1;
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
/* -// */
.shopcart_login_bar {
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
}
.shopcart_login-btn {
  display: inline-block;
  margin-left: 10px;
  padding: 0 21px;
  height: 30px;
  border-radius: 4px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background-color: #f2270c;
}
.shopcart_empty_wrap {
  padding: 70px 0 65px;
  text-align: center;
}
.empty_icon {
  width: 90px;
  height: 90px;
}
.empty_txt {
  font-size: 16px;
  color: #333;
  line-height: 16px;
  margin-top: 15px;
}
.empty_cart_coupon {
  padding: 15px 10px;
  background: #fff;
}
.mod_coupon_head {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.mod_coupon_title {
  position: relative;
  padding: 0 5px;
  font-size: 16px;
  color: #333;
  line-height: 30px;
}
.dot {
  position: relative;
  padding: 0 10px 0 7px;
}
.dot:after {
  position: absolute;
  content: "";
  width: 3px;
  height: 3px;
  background: #333;
  border-radius: 50%;
  top: 50%;
  margin-top: -2px;
}
.mod_coupon_get {
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  max-width: 150px;
  height: 30px;
  overflow: hidden;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#f2270c),
    to(#ff9574)
  );
  background-image: -webkit-linear-gradient(right, #f2270c, #ff9574);
  background-image: linear-gradient(-90deg, #f2270c, #ff9574);
  box-shadow: 0 5px 10px 0 rgba(233, 59, 61, 0.2);
  border-radius: 15px;
  padding: 0 15px;
}
.mod_coupon {
  margin-top: 10px;
  padding: 0 5px;
}
.shopcart-title {
  margin: 15px 0;
  height: 1em;
  line-height: 1em;
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-bottom: 0px;
  height: 30px;
}
.shopcart-goods {
  background: #fff;
  padding: 0 6px;
}
#download_wrap {
  margin: 10px auto;
  padding: 10px 10px;
}
.wrap-box {
  /* border: 1px solid #080606; */
  font-size: 15px;
  font-weight: 700;
  background: #fff;
}
.wrap-top {
  height: 25px;
  padding: 5px 0 5px 5px;
  overflow: hidden;
}
.icon {
  display: inline-block;
  padding: 0 10px;
  vertical-align: top;
}
.warp-name {
  display: inline-block;
}
.warp-mille {
  overflow: hidden;
  margin-bottom: 10px;
}
.warp-mille-box {
  padding: 8px 0 5px 10px;
  /* border: 1px solid black; */
  overflow: hidden;
}
.mille-box-left {
  float: left;
  padding-right: 5px;
}
.icon-i {
  display: inline-block;
  margin-top: 30px;
  vertical-align: top;
  padding: 0 5px;
}
.mille-box-left-img {
  display: inline-block;
  width: 100px;
  height: 100px;
}
.mille-box-right {
  float: left;
  overflow: hidden;
}
.mille-name {
  width: 175px;
  font-size: 13px;
  padding-right: 10px;
  margin-bottom: 3px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-indent: 1em;
  line-height: 21px;
  color: #333;
  font-weight: 500;
  /* position: relative; */
}
.price_line {
  display: flex;
  align-items: center;
  margin: 5px 10px 0 0;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 14px;
}
.price {
  flex: 1;
  line-height: 25px;
  color: #f2270c;
  font-size: 10px;
}
.int {
  font-style: normal;
  font-size: 16px;
}
.m_action {
  margin: 10px 10px 0 0;
  height: 15px;
  color: #999;
  font-size: 0;
  text-align: right;
}
.m_action_item {
  padding-right: 0;
  padding: 0 10px;
  line-height: 15px;
  font-size: 10px;
}
</style>