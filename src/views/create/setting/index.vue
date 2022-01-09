<template>
  <div>
    <component :is="types" :types="types" :index="index"></component>
  </div>
</template>
<script>
import banner from './banner.vue';
import col1 from './col1.vue';
export default {
  components: { banner, col1 },
  props: {
    types: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  created() {
    console.log(this.index);
  },
  data() {
    return {

    };
  },
}
</script>