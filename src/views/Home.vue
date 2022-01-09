<template>
  <el-container>
    <!-- <el-aside> -->
    <Aside :total="total" />
    <!-- </el-aside> -->
    <el-container class="container">
      <el-header>
        <Header />
      </el-header>
      <Main></Main>
    </el-container>
  </el-container>
</template>

<script>
import { ref, reactive } from 'vue';
import Aside from '@/components/aside.vue';
import Header from '@/components/header.vue';
import Main from '@/components/main.vue'
export default {
  name: 'Home',
  components: { Aside, Header, Main },
  setup() {
    const total = ref(2);
    const dataList = reactive();
    return { total, dataList }
  }
}
</script>
<style  scoped>
.el-header {
  background: hsla(0, 0%, 100%, 0.8) !important;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0px 2px 10px #888888;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.container {
  height: 100vh;
}
</style>