<template>
  <div class="y-register">
    <el-form label-width="60px" class="weqewq y-form" size="mini" :model="register" :rules="rules" ref="loginRef">
      <h2 class="y-title animate__animated animate__bounceInDown">创意平台</h2>
      <el-form-item prop="name" label="用户名:">
        <el-input v-model="register.name" placeholder="请输入用户名">
        </el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码:">
        <el-input v-model="register.password" placeholder="请输入密码">
        </el-input>
      </el-form-item>
      <el-form-item prop="phone" label="手机号:">
        <el-input v-model="register.phone" placeholder="请输入手机号">
        </el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮件:">
        <el-input v-model="register.email" placeholder="请输入邮件">
        </el-input>
      </el-form-item>
      <el-button type="primary" class="y-btn" @click="registers">注册</el-button>
      <div class="btn">
        <el-button class="y-go" type="text" @click="gologin">去登陆</el-button>
      </div>
    </el-form>
  </div>
</template>
<script setup>
import { ref, unref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { loginRule } from '@/utils/rules.js';
const register = ref({
  name: null,
  password: null,
  phone: null,
  emaile: null,
});
const rule = reactive(loginRule);
const registers = () => {
  console.log(register);
}
const router = useRouter();
const gologin = () => {
  router.push('/login');
};
</script>
<style lang="less" scoped>
.y-register {
  width: 100vw;
  height: 100vh;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c32b5cb5e9dfa8012141684b6609.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638845753&t=c57e91f49b940db085ddb41ea07a6cce");
}
.el-input {
  width: 220px;
}
.y-form {
  // background: hsla(0, 0%, 100%, 0.3);
  background: #f3e5f526;
  padding: 20px 40px 20px 30px;
  min-height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: form 0.5s linear;
}
@keyframes form {
  0% {
    right: 0;
    top: 5%;
  }
  50% {
    right: 20%;
    top: 20%;
  }
  100% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.btn {
  font-size: 20px !important;
  display: flex;
  justify-content: flex-end;
}
.y-btn {
  width: 100%;
  text-align: center;
}
.y-go {
  font-size: 16px;
}
.y-title {
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}
</style>