<template>
  <div class="y-fold">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1" :title="props.title">
        <slot name="ysearch" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const activeNames = ref('1');
const props = defineProps({
  title: {
    default: String,
    default: '',
  }
})
</script>