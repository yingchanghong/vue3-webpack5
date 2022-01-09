<template>
  <el-pagination v-model:currentPage="currentPage" :page-sizes="[15, 30, 45, 60]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange">
  </el-pagination>
</template>
<script>
import { ref, reactive } from 'vue';
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 15,
    },
  },
  emits: ['pageChange', 'sizeChange'],
  setup(props, { emit }) {
    const handleSizeChange = (val) => {
      emit('sizeChange', val)
    };
    const handleCurrentChange = (val) => {
      emit('pageChange', val)
    }
    return { handleSizeChange, handleCurrentChange };
  }
}
</script>