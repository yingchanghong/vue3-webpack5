<template>
  <div class="y-menu">
    <div class="y-menu-item">
      <el-button type="text" v-for="item in menu" :key="item.type" @click="adds(item)">{{item.title}}</el-button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(['addComponant']);
const adds = function (val) {
  console.log(val);
  emit('addComponant', val);
}
</script>
<style lang="less" scoped>
.y-menu {
}
</style>