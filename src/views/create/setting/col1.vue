<template>
  <div class="y-col1">
    <el-form size="mini" :model="info.form" :rules="createRule" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="图片链接:" prop="src">
        <el-input v-model="info.form.src" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="链接链接:" prop="link">
        <el-input v-model="info.form.link" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="标题:" prop="title">
        <el-input v-model="info.form.title" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { createRule } from '@/utils/rules';
import { useStore } from '@/store';
const info = reactive({
  form: {
    src: null,
    link: null,
    title: null,
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
const add = () => {
  const data = Object.assign({ type: type.types, index: type.index }, info.form)
  store.addCreate(data);
}
</script>