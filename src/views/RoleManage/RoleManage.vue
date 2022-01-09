<template>
  <div class="y-role-mmanage">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">角色管理</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">角色列表</a></el-breadcrumb-item>
    </el-breadcrumb>
    <fold class="y-search" :title="'角色列表'">
      <template v-slot:ysearch>
        <el-form :model="searchInfo" ref="searchRef" size="mini">
          <el-form-item prop="roleName" label="角色名:">
            <el-input v-model="searchInfo.roleName" placeholder="请输入角色名"></el-input>
          </el-form-item>
          <el-form-item prop="roleBranch" label="所属部门:">
            <el-select v-model="searchInfo.roleBranch">
              <el-option v-for="item in roleBRanch" :key="item.value" :label="item.label" placeholder="请选择"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </template>
    </fold>

    <div class="y-table-info">
      <el-table :data="tableData" border>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleBranch" label="所属部门"></el-table-column>
      </el-table>
      <pagination ref="pagination" :total="total" @pageChange="pageChange" @sizeChange="sizeChange" />
    </div>
  </div>
</template>
<script>
import { ref, reactive, tpRefs, toRefs } from 'vue';
import { roleBranch } from '@/utils/enumList';
import Pagination from '@/components/pagination.vue';
import fold from '@/components/fold.vue';
export default {
  components: { Pagination, fold },
  setup() {
    const searchInfo = reactive({
      roleName: null,
      roleBranch: null,
      roleNo: null,
    });
    const total = ref(0);
    const currentPage = ref(1);
    const pageSize = ref(15);
    const roleBRanch = reactive(roleBranch); // 所属部门
    const tableData = reactive([]);
    const pageChange = (val) => {
      currentPage.value = val
      console.log(currentPage);
    }
    const sizeChange = (val) => {
      pageSize.value = val;
      console.log(pageSize);
    }
    const activeNames = ref('1');
    return {
      searchInfo, roleBRanch, tableData, total, currentPage, pageSize, pageChange,
      sizeChange,
      activeNames,
    }
  }
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
.el-collapse {
  --el-collapse-border-color: null;
}
</style>