<template>
  <div class="y-echart">
    <div id="myChart" ref="myChart" :style="props.infos"></div>
  </div>
</template>
<script  setup>
import { onMounted, ref, reactive } from 'vue';
import * as echarts from 'echarts';
const props = defineProps({
  data: String,
  infos: {
    type: Object,
    default: { width: '500px', height: '500px' }
  }
})
let myChart = ref(null);
const option = reactive({
  // title: {
  //   text: 'Referer of a Website',
  //   subtext: 'Fake Data',
  //   left: 'left'
  // },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});
onMounted(() => {
  let bar = echarts.init(myChart.value);
  option && bar.setOption(option);
});
</script>