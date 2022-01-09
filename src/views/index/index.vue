<template>
  <div class="y-index">
    <card />
    <div class="y-echarts">
      <div class="y-echarts-item">
        <span class="count">数量统计</span>
        <echarts :infos="infos" />
      </div>
      <div class="y-echarts-item">
        <span class="count">来源统计</span>
        <echarts :infos="infos" />
      </div>
    </div>
  </div>
</template>
<script setup>
import echarts from '@/components/echarts.vue';
import card from '@/components/card.vue';
import { reactive } from 'vue';
import api from '@/api';
api.goods.goodList();
const infos = reactive({
  width: '600px',
  height: '400px',
  border: '1px solid rgb(230, 230, 230)',
})
</script>
<style lang="less" scoped>
.y-echarts {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.y-echarts-item {
  position: relative;
  background: #fff;
  margin-bottom: 20px;
  padding: 20px;
}
span.count {
  position: absolute;
  text-align: center;
  left: 50px;
  top: 11px;
  width: 80px;
  z-index: 999;
  background: #fff;
}
</style>