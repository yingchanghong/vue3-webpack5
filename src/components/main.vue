<template>
  <el-main class="y-main">
    <!-- <el-scrollbar class="y-main scroll"> -->
    <el-backtop target=".y-main">
    </el-backtop>
    <router-view></router-view>
    <img title="哈喽，小主人！"
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201909%2F01%2F20190901215509_cldyr.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638631991&t=31db8fa36ff791c825895774e16038a0"
      alt="">
    <!-- <img
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201605%2F15%2F20160515032303_XRiMz.gif&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638631682&t=4ebea04e6cc1d473e83103c160d82552"
      alt=""> -->
    <!-- </el-scrollbar> -->
  </el-main>
</template>
<script>
export default {
  components: {},
  data() {
    return {

    }
  },
}
</script>
<style lang="less" scoped>
.y-main {
  background: #f5f5f5;
  padding: 20px;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  overflow-y: scroll;
}
.scroll {
  height: calc(100vh - 60px);
}
img {
  position: fixed;
  bottom: 0px;
  left: 0px;
  object-fit: cover;
  width: 200px;
  height: 200px;
}
img:hover {
  cursor: pointer;
}
</style>