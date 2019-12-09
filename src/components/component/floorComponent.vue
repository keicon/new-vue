<template>
  <div>
    <!-- <div class="floor" v-for="(boy,index) in floorboos " :key="index">
      <div class="floor-title">
        <div>
          <img :src="boy.id" width="100%" alt />
        </div>
    </div>-->

    <!-- <div v-for="(a , b) in boy.floor">
         
      {{a.image}} --- {{b}}
      <img :src="a.image" width="100%" alt />
    </div>-->
    <!-- <div class="floor-anomaly" v-for="(b , a ) in boy.floor" :key="a"> -->
    <!-- {{b.van-address-edit-detail}} -->
    <!-- <div class="floor-one">
    <div>-->
    <!-- <p>1233</p> -->
    <!-- <img :src="b.image" width="100%" alt />
          </div>
         
        </div>
        <div>
          <div class="floor-two">
    <div class="floor">-->
    <!-- <h3>{{b.tietl}}</h3> -->
    <!-- </div>
            <img :src="b.image" width="100%" alt />
          </div>
          <div>
            <img :src="b.image" width="100%" alt />
          </div>
        </div>
    </div>-->
    <!-- <div class="floor-rule">
        <div v-for="( item , index ) in boy.slice(1)" :key="index">
          <img :src="item.image" width="100%" alt />
        </div>
    </div>-->
    <!-- </div> -->

    <!-- 轮播模块 -->
    <div class="floor-swiper" v-for="(boos , index) in floorboos" :key="index">
      <div class="floor-beijing">
        <div class="floor-title">
          <a href="#" class="floor-a">
            <img class="floor-biao" :src="boos.biao" width="100%" alt />
            <i class="floor-i">{{boos.title}}</i>
            <img :src="boos.one" width="100%" alt />
          </a>
          <a href="#">
            <img :src="boos.two" width="100%" alt />
          </a>
        </div>
        <div class="floor-body">
          <swiper :options="swiperOption">
            <swiper-slide v-for=" ( b , a ) in boos.floor " :key="a">
              <div class="floor-item">
                <img class="swiper-img" :src="b.image" width="80%" />
                <div class="floorName">{{b.goodsName}}</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3
      },
      name_mon: require("../../assets/images/name_mon.gif"),
      name_two: require("../../assets/images/name_two.gif"),
      floorboos: []
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
          this.floorboos = response.data.data.floorboos;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style  scoped>
.floor-swiper {
  margin: 3px 6px 15px 6px;
  border-radius: 10px 10px;
  background: #fff;

}
.floor-beijing {
  border-radius: 10px 10px;
  margin: 5px 6px 5px 6px;
}
.floor-title {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 5px 3px 3px 3px;
}
.floor-a {
  position: relative;
}
.floor-biao {
  position: absolute;
  top: 0;
  left: -5px;
  width: 90px;
}
.floor-i {
  width: 90px;
  line-height: 33px;
  position: absolute;
  top: 0;
  left: -4px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}
.floor-body {
  border-bottom: 1px solid rgb(173, 171, 171);
  padding-bottom: 10px;
}
.floor-item {
  width: 99%;
  font-size: 12px;
  text-align: center;
}
.swiper-img {
  /* border: 1px solid red; */
  width: 93px;
  height: 93px;
}
.floorName {
  color: black;
  font-size: 13px;
}
/* .floor-title {
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  margin: 5px auto;
}
.floor-anomaly {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  background: #fff;
  margin-bottom: 0.3rem;
  margin-top: -2px;
}
.floor-anomaly div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid rgb(0, 0, 0);

}
.floor-two {
  border-bottom: 1px solid black;

} */

/* .floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.floor-rule div {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 10rem;
  border-bottom: 1px solid #fff;
}
.floor-rule div:nth-child(odd) {
  border-right: 3px solid #ddd;
} */
</style>