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
        <van-col span="4" class="fan-right">
          <img :src="fan_icon1" width="80%" alt />
        </van-col>
      </van-row>
    </div>
    <!-- swiper -->
    <div class="Inside-swiper">
      <swiper :options="swiperOption" id="swiper">
        <swiper-slide v-for=" ( item , index ) in rectommendGoods " :key="index">
          <div class="Rectommend-item">
            <img :src="item.image" width="100%" alt />
            <div class="name">
              <p v-html="item.mz"></p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 下拉菜单 -->
    <div class="Inside-header">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </div>
    <!-- /// -->
    <!--  -->
    <div class="box">
      <template v-for="(it, index) in hotGoods">
        <div class="box-bian" :key="index">
          <router-link :to="'/list/'+ it.id">
            <div :class="{ 'Inside-good' : one_row , 'Inside-yang' : one_col}">
              <div :class="{'goods-info'  : one_row, 'gd-info' : one_col}">
                <div :class="{'goods-image' :one_row , 'gd-image' : one_col}">
                  <img v-lazy="it.image" width="100%" />
                </div>
                <div :class="{'goods-name' : one_row, 'gd-name' : one_col}" v-html="it.name"></div>
                <div class="bor">
                  <div :class="{'goods-price' : one_row , 'gd-price' : one_col}">￥{{it.mallPrice}}</div>
                  <div
                    style="color:black"
                    :sclass="{'goods-look' : one_row , 'gd-look' : one_col}"
                  >看相似</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </div>
    <div class="mode_image" @click="gaibian">
      <span :class="{'mode_image-img':one_row , 'mode_image-img2': one_col}"></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import goodComponent from "../component/goodComponent";

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4
      },
      value1: 0, //下拉
      value2: "a", //下拉
      value3: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "销量排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "", value: "c" }
      ],
      biaotou: "内页",
      fan_icon1: require("../../assets/images/icon-1.png"),
      fan_icon2: require("../../assets/images/icon-2.png"),

      rectommendGoods: [], //swiper
      hotGoods: [], // 商品热卖
      one_row: false,
      one_col: true
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    axios({
      url: "/static/json/api2.json",
      method: "get"
    })
      .then(response => {
        if (response.status == 200) {
          this.rectommendGoods = response.data.data.recommend;
          this.hotGoods = response.data.data.hotGoods;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    gaibian() {
      if (this.one_col == true) {
        this.one_col = false;
        this.one_row = true;
      } else {
        this.one_col = true;
        this.one_row = false;
      }
    }
  }
};
</script>

<style scoped>
.Inside-swiper {
  margin-top: 5px;
}
#swiper {
  margin-top: 3px;
}
.Rectommend-item {
  width: 90%;
  font-size: 12px;
  text-align: center;
  position: relative;
}
.name {
  opacity: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.name p {
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  top: 30%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: 15px;
  z-index: 2;
}

/* /// */
.head-top {
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
/* //// */
/* 俩格 */
.box {
  background: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 5px;
  overflow: hidden;
}
.Inside-yang {
  width: 153px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
  overflow: hidden;
}
.gd-info {
  overflow: hidden;
}
.gd-name {
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  text-indent: 0.8em;
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  word-break: break-all;
  margin-top: 5px;
  color: #333;
}
.gd-image {
  margin: 8px 0;
  width: 150px;
  height: 150px;
}
.gd-price {
  position: relative;
  float: left;
  padding: 0 40px 10px 5px;
  color: rgb(248, 16, 16);
}
.gd-look {
  overflow: hidden;
  float: left;
  display: inline-block;
  width: 45px;
  border: 1px solid #ccc;
  font-size: 13px;
  color: black;
  text-align: center;
  line-height: 15px;
}

.box-bian {
  flex-direction: column;
}
.mode_image {
  z-index: 1;
  position: fixed;
  bottom: 35px;
  right: 5px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background: rgb(97, 95, 95);
}
.mode_image-img {
  background: url("../../assets/images/fenlei-2.png") 3px center no-repeat;
  background-size: 25px;
  display: inline-block;
  margin: 6px 6px;
  width: 30px;
  height: 30px;
}
.mode_image-img2 {
  background: url("../../assets/images/fenlei-1.png") 3px center no-repeat;
  background-size: 25px;
  display: inline-block;
  margin: 7px 7px;
  width: 30px;
  height: 30px;
}

.bor {
  padding-top: 10px;
  margin: 5px auto;
}

/* 一排 */
.Inside-good {
  margin-bottom: 10px;
  padding: 5px 0 5px 10px;
  background-color: #fff;
  overflow: hidden;
}
.goods-info {
  overflow: hidden;
}
.goods-name {
  font-size: 13px;
  font-weight: 400;
  text-indent: 0.8em;
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  height: 38px;
  word-break: break-all;
  margin-top: 8px;
  color: #333;
  line-height: 20px;
}
.goods-price {
  /* position: relative; */
  float: left;
  padding: 0 40px 25px 4px;
  color: red;
}
.goods-look {
  float: left;
  display: block;
  margin: 2px 0 0 59px;
  width: 45px;
  border: 1px solid #ccc;
  font-size: 13px;
  color: black;
  padding: 1px 2px;
  text-align: center;
  line-height: 15px;
}
.goods-image {
  margin: 5px 5px;
  width: 130px;
  height: 130px;
  float: left;
}
</style>