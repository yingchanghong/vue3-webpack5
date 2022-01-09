<template>
  <div class="y-create">
    <div class="leftmenu">
      <left-menu :menu="data.menu" @addComponant="addComponant"></left-menu>
    </div>
    <div class="y-center">
      <div class="drag">
        <!-- <draggable element="ul" class="drag" v-model="data.myArray" group="people" @start="data.drag = true" @end="data.drag = false" item-key="type"> -->
        <!-- <template #item="{element}"> -->
        <div :class="data.indexs === index ? 'active':''" class="y-choose-item" v-for="(element,index) in data.myArray" :key="element.type" @click="select(element,index)">
          <centers :data="element" :index="data.indexs" />
          <el-icon class="closes" v-if="data.indexs === index">
            <circle-close />
          </el-icon>
        </div>
        <!-- </template> -->
        <!-- </draggable> -->
      </div>
    </div>
    <div class="y-rights">
      <div class="y-titles">组件设置</div>
      <rights :types="types" :index="data.indexs" />
    </div>
  </div>
</template>
<script setup>
import { CircleClose } from '@element-plus/icons';

import { computed, watch, reactive, ref } from "vue";
import { useStore } from '@/store'
import centers from '@/components/create/index.vue';
import LeftMenu from './leftMenu.vue';
import draggable from "vuedraggable";
import rights from './setting';
const types = ref(null);
const data = reactive({
  drag: false,
  indexs: 1, // 选中项
  myArray: [],
  menu: [
    {
      type: 'banner',
      title: '轮播图',
    },
    {
      type: 'col1',
      title: '一列铺平',
    },
    {
      type: 'col2',
      title: '二列铺平',
    },
  ],
  preInfo: null, // 选中配置信息
});

const addComponant = (val) => {
  data.myArray.push(val);
};
const select = (val, index) => {
  console.log(val);
  const s = store.createList.find((item) => {
    return item.type = val.type;
  });
  console.log(s);
  data.indexs = index;
  types.value = val.type;
};
const store = useStore();
// watch(() => store.createList, (news) => {
//   data.myArray = news;
// }, { deep: true });
// export default defineComponent({
//   components: { draggable, LeftMenu },
//   setup(props, content) {
//     const data = reactive({
//       drag: false,
//       myArray: [],
//       menu: [
//         {
//           type: 'banner',
//           title: '轮播图',
//         },
//         {
//           type: 'col1',
//           title: '一列铺平',
//         },
//       ]
//     });
//     const addComponant = (val) => {
//       console.log(props);
//       console.log(content);
//       console.log(val);
//     };
//     return { ...toRefs(data), addComponant };
//   },
// });
</script>
<style lang="less" scoped>
.y-create {
  display: flex;
}
.y-center {
  padding: 20px;
}
.leftmenu {
  width: 200px;
  padding: 20px;
  border-right: 1px solid #757575;
  height: 100vh;
}
.y-rights {
  padding: 20px;
  border-left: 1px solid #757575;
}
.drag {
  width: 375px;
  height: calc(100vh - 100px);
  overflow-y: scroll;
  // border: 1px solid skyblue;
  box-shadow: -1px 0 3px #9e9e9e, 0px -1px 3px #9e9e9e, 1px 0 3px #9e9e9e,
    0px -1px 3px #9e9e9e;
}
.drag::-webkit-scrollbar {
  width: 0 !important;
}
.drag::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.y-choose-item {
  min-height: 200px;
  border-bottom: 1px solid #bdbdbd;
}
.active {
  width: 100%;
  position: relative;
  border: 3px solid #29b6f6;
}
.closes {
  position: absolute;
  right: 0px;
  top: 0px;
  color: #0288d1;
  cursor: pointer;
}
.y-titles {
  margin-bottom: 30px;
}
</style>