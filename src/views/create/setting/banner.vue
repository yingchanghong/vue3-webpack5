<template>
  <div class="y-banner">
    <el-card class="banner-item" v-for="(item,index2) in info.form.list" :key="index2">
      <div class="items">
        <div class="item-title">图片链接:</div>
        <el-input size="mini" v-model="item.src" placeholder="图片链接"></el-input>
      </div>
      <div class="items">
        <div class="item-title">外部链接:</div>
        <el-input size="mini" v-model="item.link" placeholder="跳转链接"></el-input>
      </div>
    </el-card>
    <el-button type="primary" size="mini" @click="addItem">添加图片项</el-button>
    <el-button size="mini" type="primary" @click="add">保存</el-button>

    <!-- <el-form size="mini" :model="info.form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="图片链接" prop="src">
        <el-input v-model="info.form.src"></el-input>
      </el-form-item>
      <el-form-item label="链接链接" prop="src">
        <el-input v-model="info.form.link"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">添加</el-button>
      </el-form-item>
    </el-form> -->
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useStore } from '@/store';
const info = reactive({
  // list: {},
  form: {
    list: [],
    src: null,
    link: null,
  }
});
const type = defineProps({
  types: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    default: 0,
  },
});
const store = useStore();
const addItem = () => {
  info.form.list.push({ src: null, link: null });
};
const add = () => {
  const data = Object.assign({ type: type.types, index: type.index }, info.form);
  store.addCreate(data);
};
</script>
<style lang="less" scoped>
.banner-item {
  margin-bottom: 20px;
}
.items {
  display: flex;
  margin-bottom: 20px;
}
.item-title {
  width: 100px;
}
</style>