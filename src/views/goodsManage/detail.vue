<template>
  <div class="y-good-detail">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{DETAILTYPE[type]}}</a></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- <div class="y-page-tite">商品</div> -->
    <div class="y-content">
      <el-form ref="formRef" :model="infos.infoForm" size="mini" :rules="infos.infoRule">
        <div class="flex">
          <el-form-item prop="goodName" label="商品名称:">
            <el-input v-model="infos.infoForm.goodName" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item prop="goodName" label="商品价格:">
            <el-input v-model.trim="infos.infoForm.goodPrice" placeholder="请输入商品价格"></el-input>
          </el-form-item>
        </div>
        <div class="flex">
          <el-form-item prop="headImg" label="商品头图:">
            <upload />
          </el-form-item>
        </div>
        <div class="flex">
          <el-form-item prop="remark" label="商品描述:">
            <el-input class="y-textarea" type="textarea" placeholder="请输入" :rows="5" width="500px"></el-input>
          </el-form-item>
        </div>
        <div class="flex-center" v-show="showBtn">
          <el-button type="primary" size="large" @click="submit">提交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { DETAILTYPE } from '@/utils/enumList'
import upload from '@/components/upload.vue'
const route = useRoute();
const type = ref(route.query.type);
const showBtn = computed(() => {
  return type.value === 'add' || type.value === 'edit';
});
const infos = reactive({
  infoForm: { goodName: null, goodPrice: null, remark: null },
  infoRule: {
    goodName: [
      { required: true, message: "请输入商品名称", trigger: 'blur' }
    ]
  }
});
const submit = () => {
  console.log(infos.infoForm);
}
</script>
<style lang="less" scoped>
.el-input,
.el-select,
.el-cascader,
.el-radio-group {
  width: 220px;
  margin-right: 20px;
}
.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.flex-center {
  display: flex;
  justify-content: center;
}
.y-textarea {
  width: 570px;
}
</style>