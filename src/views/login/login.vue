<template>
  <div class="y-login starts">
    <vue-particles color="#39AFFD" particleopacity="0.7" linescolor="#8DD1FE" particlesnumber="100" shapetype="circle" particlesize="4" lineswidth="1" linelinked="true" lineopacity="0.4" linesdistance="150" movespeed="3" hovereffect="true"
      hovermode="grab" clickeffect="true" clickmode="push" class="login-bg">
    </vue-particles>
    <el-form class="y-form" size="mini" :model="loginInfo" :rules="loginRules" ref="loginRef">
      <h2 class="y-title animate__animated animate__fadeIn">创意平台</h2>
      <el-form-item prop="name">
        <el-input v-model="loginInfo.name" placeholder="请输入用户名">
          <template #prepend>
            <el-icon>
              <user />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginInfo.password" placeholder="请输入密码">
          <template #prepend>
            <el-icon>
              <key />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="y-btn" @click="login">登录</el-button>
        <div class="y-other">
          <el-button type="text" @click="regiter">还没有账号？立即去注册</el-button>
          <el-button type="text" @click="forget">忘记密码？</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref, reactive, unref } from 'vue';
import { ElMessage } from 'element-plus';
import { User, Key } from '@element-plus/icons';
import { loginRule } from '@/utils/rules.js';
import api from '@/api';
import { useRouter } from 'vue-router';
const loginRules = reactive(loginRule);
const loginInfo = reactive({
  name: 'ych',
  password: '123456',
});
// 登录
const loginRef = ref(null);
const router = useRouter();
const login = () => {
  loginRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }
    api.login.login(loginInfo).then((res) => {
      const { success, message, token } = res;
      if (success) {
        ElMessage.success('登录成功！');
        console.log(token);
        localStorage.setItem('token', token);
        router.push('/index');
      } else {
        return ElMessage.error(message || '');
      }
    });
  })
};
const regiter = () => {
  router.push('/register');
};
const forget = () => {
  router.push('/forget');
};
</script>
<style lang="less" scoped>
.y-title {
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}
/deep/.el-input {
  width: 300px;
}
.login-bg {
  height: 100vh;
}
.y-form {
  background: hsla(0, 0%, 100%, 0.3);
  padding: 20px 20px 0 20px;
  min-height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.y-login {
  position: relative;
  background: #3e3e3e;
  height: 100vh;
  width: 100vw;
}
.y-btn {
  width: 100%;
  text-align: center;
}
.y-other {
  display: flex;
  justify-content: space-between;
}
</style>
