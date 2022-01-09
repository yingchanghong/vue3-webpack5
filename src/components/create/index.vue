<template>
  <component :is="data.type" :data="data"></component>
</template>
<script>
import banner from './banner.vue';
import col1 from './col1.vue';
export default {
  props: {
    data: {
      type: Object,
      default: () => { },
    },
  },
  components: { banner, col1 },
  data() {

  }
}
</script>