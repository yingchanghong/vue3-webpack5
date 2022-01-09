<template>
  <div class="y-upload">
    <div class="y-img">
      <div class="y-img-item" v-for="(item,index) in info.fileUrlList" :key="index">
        <el-image class="imgs" :src="item.url"></el-image>
      </div>
    </div>
    <el-upload :limit="limit" v-show="limit > fileList.length" :on-success="uplodSuccess" :action="actionUrl" :show-file-list="false" list-type="picture-card">
      <el-icon>
        <plus />
      </el-icon>
    </el-upload>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { Plus } from '@element-plus/icons';

let info = reactive({
  fileUrlList: [],
});
const props = defineProps({
  limit: {
    type: Number,
    default: 1,
  },
  fileList: {
    type: Array,
    default: () => [],
  },
});
onMounted(() => {
  info.fileUrlList = props.fileList;
});
const actionUrl = ref('https://jsonplaceholder.typicode.com/posts/');
const uplodSuccess = (file) => {
  info.fileUrlList = [
    { url: 'https://img0.baidu.com/it/u=3031084643,1334557890&fm=26&fmt=auto' }
  ];
  console.log(fileUrlList);
};
</script>
<style lang="less" scoped>
.y-upload {
  display: flex;
  flex-wrap: wrap;
}
.y-img {
  display: flex;
  flex-wrap: wrap;
  margin-right: 10px;
}
.y-img-item {
  margin-right: 10px;
}
.imgs {
  width: 148px;
  height: 148px;
}
</style>