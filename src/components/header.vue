<template>
  <div class="header">
    <div class="left">
    </div>
    <div class="right">
      <img @click="screens" class="icon icons" src="../assets/img/screen.png" alt="">
      <el-icon class="icon" @mouseleave="notesMove" @mouseover="showNotes">
        <bell />
        <el-collapse-transition>
          <notes v-show="isShow" />
        </el-collapse-transition>
      </el-icon>
      <el-avatar shape="square" size="medium" :src="photoUrl"></el-avatar>
      <el-dropdown class="icon">
        <span class="el-dropdown-link icon">
          <span>{{username}}</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Bell, ArrowDown } from '@element-plus/icons';
import screenfull from 'screenfull';
import notes from '@/views/notes/notes.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const username = ref('阿昌');
const photoUrl = ref('https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png');
// 全屏
const screens = () => {
  screenfull.toggle()
};
// 鼠标悬停通知栏
let isShow = ref(false);
const showNotes = () => {
  isShow.value = true;
};
const notesMove = () => {
  isShow.value = false;
}
// 路由
const router = useRouter();
const logout = () => {
  console.log(router);
  router.push('/login');
};
</script>
<style lang="less" scoped>
.header {
  padding: 20px !important;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
}
svg {
  width: 22px !important;
  height: 22px !important;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
// i.el-icon.el-icon--right {
//   width: 22px;
//   height: 22px;
// }
i.el-icon {
  width: 22px;
  height: 22px;
}
.icons {
  margin-right: 10px;
}
span.el-avatar.el-avatar--medium.el-avatar--square {
  margin-left: 30px;
}
.icon:hover {
  color: #409eff;
  cursor: pointer;
}
.icons:hover {
  background: #409eff;
}
img {
  width: 22px;
  height: 22px;
}
</style>