<template>
  <div class="y-role-mmanage">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">商品列表</a></el-breadcrumb-item>
    </el-breadcrumb>
    <div class="y-page-tite">商品列表</div>
    <div class="y-search">
      <el-form :model="searchInfo" ref="searchRef" size="mini">
        <!-- <el-form-item prop="roleName" label="角色名:">
          <el-input v-model="searchInfo.roleName" placeholder="请输入角色名"></el-input>
        </el-form-item>
        <el-form-item prop="roleBranch" label="所属部门:">
          <el-select v-model="searchInfo.roleBranch">
            <el-option v-for="item in roleBRanch" :key="item.value" :label="item.label" placeholder="请选择"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <div class="y-add-good">
        <el-button type="primary" class="" size="mini" @click="addGood">新增商品</el-button>
      </div>
    </div>
    <div class="y-table-info">
      <el-table :data="tableData" border>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleBranch" label="所属部门"></el-table-column>
      </el-table>
      <pagination ref="pagination" :total="total" @pageChange="pageChange" @sizeChange="sizeChange" />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const emits = defineEmits(['one', 'tow']);
const currentPage = ref(1);
const pageSize = ref(15);
const router = useRouter();
const n = ref(1);
// 新增
const addGood = () => {
  router.push({ path: '/goodsmanage/detail', query: { type: 'add', } })
};
const pageChange = (val) => {
  currentPage.value = val;
};
const sizeChange = (val) => {
  pageSize.value = val;
};
</script>

<style lang="less" scoped>
.el-input,
.el-select,
.el-cascader,
.el-radio-group {
  width: 220px;
  margin-right: 20px;
}
.y-add-good {
  display: flex;
  justify-content: flex-end;
}
</style>