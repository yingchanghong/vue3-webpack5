<template>
  <div class="col1" v-if="data.src">
    <el-image :src="data.src"></el-image>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => { },
  },
});
</script>