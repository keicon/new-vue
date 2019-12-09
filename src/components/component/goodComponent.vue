<template>
  <div>
    <div class="goods-info">
      <div class="goods-image">
        <img v-lazy="goodsImage" width="100%" />
      </div>
      <div class="goods-name">{{goodsName}}</div>
      <div class="goods-price">
        ￥{{goodsPrice}}
        <div class="goods-look">看相似</div>
        <div class="goods-man" v-show="goodsMon">满减</div>
      </div>

      <!--   | moneyFilter -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["goodsImage", "goodsName", "goodsPrice", "goodsMon"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.goods-info {
  border-top: 1px solid rgb(173, 173, 173);
}
.goods-name {
  font-size: 13px;
  font-weight: 400;
  text-indent: 0.8em;
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap;  不换行*/
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  color: black;
}
.goods-price {
  position: relative;
  float: left;
  padding: 5px 0 25px 4px;
  color: red;
}
.goods-look {
  float: right;
  display: block;
  margin: 0 0 0 59px;
  width: 45px;
  border: 1px solid #ccc;
  font-size: 13px;
  color: black;
  padding: 1px 2px;
  text-align: center;
  line-height: 15px;
}
.goods-man {
  position: absolute;
  top: 6px;
  left: 55px;
  float: right;
  width: 32px;
  height: 16px;
  line-height: 14px;
  border: 1px solid #e4393c;
  color: #e4393c;
  font-size: 10px;
  padding: 0 3px;
  margin-right: 5px;
}
.goods-image {
  margin: 10px 10px;
  height: 168px;
}
</style>