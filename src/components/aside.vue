<template>
  <el-aside width="200px">
    <el-menu router active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo y-menu" :default-active="defalutPath" text-color="#fff" @open="handleOpen" @close="handleClose">
      <template v-for="item in menu" :key="item.code">
        <el-sub-menu v-if="item.children && item.children.length" :index="item.code" :key="item.code">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="item2 in item.children" :key="item2.code" :index="item2.path">
            <i :class="item2.icon"></i>
            {{item2.name}}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router'
export default {
  props: {
    total: {
      type: Number,
    },
    num: {
      default: null
    }
  },
  setup(props) {
    // 当前路由
    // const defalutPath = ref('/index');
    //菜单
    const menu = reactive([
      { icon: 'el-icon-menu', name: '工作台', code: '1', path: '/index' },
      {
        icon: 'el-icon-s-custom', name: '角色管理', code: '2', children: [
          { icon: 'el-icon-user', name: '角色列表', code: '2-1', path: '/roleManage' }
        ]
      },
      {
        icon: 'el-icon-s-custom', name: '商品管理', code: '3', children: [
          { icon: 'el-icon-user', name: '商品列表', code: '3-1', path: '/goodsManage' }
        ]
      },
    ])
    const handleOpen = (key, keyPath) => {
    }
    const handleClose = (key, keyPath) => {
    }
    //路由
    const route = useRouter();
    const defalutPath = computed(() => {
      return route.currentRoute.value.path
    });
    return {
      handleOpen,
      handleClose,
      menu,
      defalutPath,
    }
  }
}
</script>
<style lang="less" scoped>
.y-menu {
  height: 100%;
}
</style>