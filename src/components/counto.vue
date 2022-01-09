<template>
  <countTo :startVal='startVal' :endVal='props.numbers' :duration='3000'></countTo>
</template>
<script setup>
import countTo from 'vue-count-to';
import { ref } from 'vue';
const props = defineProps({
  numbers: {
    type: Number,
    default: 0,
  },
});
const startVal = ref(0);
</script>