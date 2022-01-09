<template>
  <div class="y-card">
    <el-divider content-position="left">数据统计</el-divider>
    <div class="y-card-item">
      <div class="y-title">总销售额</div>
      <div class="y-count">
        <img src="../assets/img/cz.png" alt="">
        <countTo :startVal='0' :endVal='info.cardInfo.totalMoney' :duration='3000'></countTo>
      </div>
    </div>
    <div class="y-card-item y-i2">
      <div class="y-title">订单量</div>
      <div class="y-count y-2">
        <img src="../assets/img/cz.png" alt="">
        <countTo :startVal='0' :endVal='info.cardInfo.totalCount' :duration='3000'></countTo>
      </div>
    </div>
    <div class="y-card-item y-i3">
      <div class="y-title">退单量</div>
      <div class="y-count y-3">
        <img src="../assets/img/cz.png" alt="">
        <countTo :startVal='0' :endVal='info.cardInfo.totalCount' :duration='3000'></countTo>
      </div>
    </div>
    <div class="y-card-item y-i4">
      <div class="y-title">访问量</div>
      <div class="y-count y-4">
        <img src="../assets/img/cz.png" alt="">
        <countTo :startVal='0' :endVal='info.cardInfo.totalCount' :duration='3000'></countTo>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import countTo from './vue-count-to';
import editor from './editor/editor.vue';
const info = reactive({
  cardInfo: {
    totalMoney: null,
    totalCount: null,
  },
});
onMounted(() => {
  info.cardInfo = { totalMoney: 16802, totalCount: 120, };
});
</script>

<style lang="less" scoped>
.y-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background: #fff;
}
.y-card-item {
  width: 296px;
  // height: 102px;
  margin-bottom: 20px;
  margin-right: 10px;
  border-radius: 5px;
  border-color: rgb(255, 163, 51);
  border: 1px solid #ffa333;
}
.y-title {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #5c5c5c;
}
.y-count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: rgb(255, 163, 51);
  color: #fff;
  font-size: 20px;
  height: 60px;
}
.y-2 {
  background: rgb(248, 94, 31);
}
.y-i2 {
  border: 1px solid rgb(248, 94, 31);
}
.y-3 {
  background: rgb(152, 48, 250);
}
.y-i3 {
  border: 1px solid rgb(152, 48, 250);
}
.y-4 {
  background: rgb(12, 153, 253);
}
.y-i4 {
  border: 1px solid rgb(12, 153, 253);
}
img {
  width: 40px;
  height: 40px;
}
</style>