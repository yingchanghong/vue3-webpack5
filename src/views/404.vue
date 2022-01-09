<template>
  <div class="y-404">
    <!-- <img
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2Fe49334fc034cf45bb16c1b6e6691b8bd.gif&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638807758&t=ffa165a2c974461f6995f15b331ecd58"
      alt=""> -->
    <el-button class="btn" type="text" @click="login">回首页</el-button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const login = () => {
  router.push('/login');
}
</script>
<style lang="less" scoped>
.y-404 {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  background-size: 100%;
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-blog.csdnimg.cn%2Fimg_convert%2Fe49334fc034cf45bb16c1b6e6691b8bd.gif&refer=http%3A%2F%2Fimg-blog.csdnimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638807758&t=ffa165a2c974461f6995f15b331ecd58");
}
.btn {
  font-size: 40px;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.btn:hover {
  color: #03a9f4;
}
</style>