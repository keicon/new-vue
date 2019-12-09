<template>
  <div>
    <!-- tou -->
    <top-Component />
    <!-- swiper  area-->
    <div class="swiper-area">
      <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="( banner , index ) in bannerArray" :key="index">
          <img :src="banner" width="100%" alt />
          <!-- lazy   懒加载-->
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type bar -->
    <div class="type-bar">
      <div class="type-bar-div" v-for="( cate , index) in category" :key="index">
        <img :src="cate.image" width="100%" class="type-bar-img" alt />
        <span class="type-bar-span">{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <!-- ltart-item -->
    <div class="ltart-item">
      <div class="ltart-item-are">
        <div class="ltart-item-images">
          <img :src="adatu" width="100%" alt />
        </div>
        <div class="ltart-item-xia">
          <template v-for="(item,index) in ltart">
            <div :key="index" class="ltart-item-he">
              <!-- <div class="ltart-item-text">
                <h3>{{item.biaoti}}</h3>
                <p>{{item.title}}</p>
              </div>-->
              <div class="ltart-item-img">
                <a href="#" style="width:100%">
                  <img :src="item.image" width="100%" alt />
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <!-- abanner bar-->
    <!-- <div class="abanner-bar">
      <img :src="abanner" width="98%" alt />
    </div>-->
    <!-- Rectommend goods area-->
    <div class="Rectommend-area">
      <div class="Rectommend-title">
        <div class="Rectommend-head-tit">
          <i class="title-icon">
            <img :src="xinicon" width="100%" alt />
          </i>
          超级单品
        </div>
        <div class="Rectommend-lats-wrap">
          <div class="Rectommend-lats-box">
            <van-notice-bar class="gundong" text="炖肉、烧汤一级棒，冬日竹笋别错过" left-icon="volume-o" />
          </div>
        </div>
      </div>
      <div class="Rectommend-body">
        <!-- vue-awesome-swiper  手拉轮播 -->
        <!-- <swiper :options="swiperOption" id="swiper">
          <swiper-slide v-for=" ( item , index ) in rectommendGoods " :key="index">
            <div class="Rectommend-item">
              <img :src="item.image" width="80%" alt />
            </div>
          </swiper-slide>
        </swiper>-->
        <div class="Rectommend-two">
          <a href="#">
            <img :src="name_mon" width="100%" alt />
          </a>
          <a href="#">
            <img :src="name_two" width="100%" alt />
          </a>
        </div>
        <!-- <div class="Rectommend-super">
          <div class="Rectommend-brand">
            <div class="title">超级品牌</div>
            <a href="#" class="img-wrap">
              <img :src="brand1" width="100%" alt />
            </a>
          </div>
          <div class="Rectommend-brand">
            <div class="title">超级品类</div>
            <a href="#">
              <img :src="brand2" width="100%" alt />
            </a>
          </div>
        </div>-->
        <div class="Rectommend-limit">
          <div class="Rectommend-con">
            <div class="Rectommend-div">
              <div class="Rectommend-div-1 b">
                <div class="Rectommend-head-con">
                  <h3 class="main-tit" style="color: #FF2D18">领券中心</h3>
                  <div class="sub-tit" style="color: #757575">先领券 再购物</div>
                </div>
                <div class="pic-wrap">
                  <img :src="wrap1" width="100%" alt />
                  <img :src="wrap2" width="100%" alt />
                </div>
              </div>
              <div class="Rectommend-div-1">
                <div class="Rectommend-head-con">
                  <h3 class="main-tit" style="color: #FF4891">超值9.9</h3>
                  <div class="sub-tit" style="color: #757575">低价优选，放心购买</div>
                </div>
                <div class="pic-wrap">
                  <img :src="wrap3" width="100%" alt />
                  <img :src="wrap4" width="100%" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- floorName.(floor1 Name里面的对应值)-->

    <!-- abanner bar-->
    <div class="abanner-bar">
      <img :src="abanner" width="98%" alt />
    </div>
    <floorComponent />
    <!-- <floor-component :floorData="floor3" :floorTitle="floorName.floor3" /> -->
    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">
        <img :src="astop" width="100%" alt />
      </div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
              <router-link :to="'/list/'+ item.id">
                <!-- 详情页-list-->
                <goodComponent
                  :goodsImage="item.image"
                  :goodsName="item.name"
                  :goodsPrice="item.mallPrice"
                  :goodsMon="item.man"
                />
              </router-link>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
    <!-- 组件 -->
    <floatComponent />
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import topComponent from "../component/topComponent";
import floorComponent from "../component/floorComponent";
import goodComponent from "../component/goodComponent";
import floatComponent from "../component/floatComponent";

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3
      },
      // xin: "新品上市",
      wrap1: require("../../assets/images/lim-1.jpg"),
      wrap2: require("../../assets/images/lim-2.jpg"),
      wrap3: require("../../assets/images/lim-3.jpg"),
      wrap4: require("../../assets/images/lim-4.jpg"),
      brand1: require("../../assets/images/chaoji-1.jpg"),
      brand2: require("../../assets/images/chaoji-2.jpg"),
      name_mon: require("../../assets/images/name_mon.gif"),
      name_two: require("../../assets/images/name_two.gif"),
      abanner: require("../../assets/images/meiri.jpg"),
      adatu: require("../../assets/images/datu.jpg"),
      astop: require("../../assets/images/stop.png"),
      xinicon: require("../../assets/images/apps-o.png"),
      bannerArray: [
        "/static/img/banner/t1.jpg",
        "/static/img/banner/t2.jpg",
        "/static/img/banner/t3.jpg",
        "/static/img/banner/t4.jpg",
        "/static/img/banner/t5.jpg",
        "/static/img/banner/t6.jpg"
      ],
      category: [],
      rectommendGoods: [],
      ltart: [],
      hotGoods: [] // 商品热卖
    };
  },
  //注册挂载组件
  components: {
    swiper,
    swiperSlide,
    floorComponent,
    topComponent,
    goodComponent,
    floatComponent
  },
  created() {
    // https://www.easy-mock.com/mock/5dc7c70c13bff958057d8304/v-xm/index
    axios({
      // url: "/static/json/api.json",
      url: "/static/json/api2.json",
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          // 直接在这里取值请求后端数据  现在是拿json的
          this.category = response.data.data.category;
          this.rectommendGoods = response.data.data.recommend;
          this.ltart = response.data.data.ltart;
          this.hotGoods = response.data.data.hotGoods;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style  scoped>
.swiper-area {
  clear: both;
  overflow: hidden;
  margin-top: -50px;
}
.type-bar {
  text-align: center;
  background-color: #fff;
  margin: 10px 6px 15px 6px;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* flex-wrap: nowrap; */
}
.type-bar-div {
  flex-grow: 1;
  text-align: center;
  padding: 0.3rem;
  font-size: 12px;
}
.type-bar-img {
  padding: 0.2rem;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 2.5rem;
  height: 2.5rem;
}
.type-bar-span {
  color: #7d7d7d;
}
.abanner-bar {
  margin: 15px 3px -12px 3px;
  text-align: center;
  /* margin: 10px 0 -15px 0; */
  background: #fff;
  border-radius: 10px 10px 0px 0px;
  /* border: 1px solid red; */
}
.ltart-item {
  text-align: center;
  background: #fff;
  margin: 10px 6px 15px 6px;
  /* margin: 0.3rem 0.3rem 0.3rem; */
  border-radius: 0.3rem;
  margin-top: 10px;
  margin-bottom: 10px;
}
.ltart-item-xia {
  padding: 0 5px;
  display: flex;
  flex-wrap: nowrap;
  /* border: 1px solid; */
  /* border-radius: 10px; */
  /* background: rgb(246, 246, 246); */
}
.ltart-item-he {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 3px;
  width: 80px;
  /* border: 1px solid rgb(199, 190, 190);
  border-radius: 10px; */
  margin: -3px 5px 0 5px;
}
.ltart-item-text {
  height: 50px;
}
.ltart-item-text h3 {
  font-size: 18px;
  color: rgb(199, 56, 56);
  margin: 10px;
  height: 10px;
  line-height: 10px;
}
.ltart-item-text p {
  margin: 10px;
  font-size: 12px;
  color: black;
}
.ltart-item-images img {
  padding-top: 3px;
  padding-bottom: 10px;
}
.Rectommend-area {
  background: #fff;
  /* margin-top: 0.1rem; */
  margin: 15px 6px 15px 6px;
  border-radius: 10px 10px;
}
.Rectommend-title {
  border: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #7d7d7d;
  display: flex;
  flex-direction: row;
}
.Rectommend-head-tit {
  /* border: 1px solid red; */
  width: 96px;
}
.Rectommend-lats-wrap {
  /* border: 1px solid red; */
  width: 260px;
}
.gundong {
  margin-top: -3px;
  height: 30px;
  line-height: 30px;
  background-color: rgb(252, 246, 246);
  color: black;
}
.title-icon {
  margin-top: -3px;
  padding: 0.2rem;
  vertical-align: middle;
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
}
.Rectommend-body {
  margin-top: 5px;
  border-bottom: 1px solid #fff;
}
#swiper {
  margin-top: 10px;
}
.Rectommend-item {
  width: 99%;
  border-right: 5px solid white;
  font-size: 12px;
  text-align: center;
}
.Rectommend-two {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 6px 10px 5px 10px;
}
.Rectommend-two a {
  display: inline-block;
  display: flex;
  justify-content: space-between;
}
.Rectommend-super {
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 8px 10px 8px 10px;
  overflow: hidden;
}
.Rectommend-brand {
  width: 50%;
  position: relative;
}
.title {
  position: absolute;
  top: 7px;
  left: 10px;
  font-size: 1rem;
  color: #353535;
  font-weight: bold;
}
.img-wrap {
  display: inline-block;
}
.img-wrap img {
  vertical-align: top;
  border: 0;
}
.Rectommend-limit {
  text-align: center;
  margin-bottom: 5px;
}
.Rectommend-con {
  margin: auto 9px;
  border-radius: 10px 10px;
  background-color: #f3eded;
}
.Rectommend-div {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 5px 5px 5px 5px;
}
.Rectommend-div-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}
.b {
  background: rgb(242, 246, 255);
  border-right: 1px solid rgb(136, 125, 125);
}
.Rectommend-head-con {
  padding-left: 10px;
  float: left;
  margin-bottom: 8px;
}
.Rectommend-head-con .main-tit {
  height: 1px;
  line-height: 1px;
  font-size: 15px;
}
.sub-tit {
  font-size: 12px;
  margin-top: 2px;
}
.pic-wrap {
  display: flex;
  justify-content: space-between;
}
.pic-wrap img {
  /* border: 1px solid red; */
  width: 65px;
  height: 65px;
  margin-left: 6.1971831%;
  /* width: 80px;
  height: 80px; */
}
.hot-area {
  text-align: center;
  font-size: 14px;
  /* height: 1.8rem;
  line-height: 1.8rem; */
  height: 1rem;
}
.hot-title {
  border-bottom: 1px solid #ccc;
}
</style>
