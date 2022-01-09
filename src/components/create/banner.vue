<template>
  <div class="banner" v-if="data.list && data.list.length">
    <swiper :indicator-dots="true" :centeredSlides="true" :pagination="swiperOption.pagination" :autoplay="swiperOption.autoplay" @swiper="onSwiper" @slideChange="onSlideChange" authpa>
      <swiper-slide v-for="(item,index) in data.list" :key="index">
        <el-image :src="item.src"></el-image>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.less';
import 'swiper/components/navigation/navigation.less';
SwiperCore.use([Navigation, Autoplay, Pagination]);
const props = defineProps({
  data: {
    type: Object,
    default: () => { },
  },
});
const swiperOption = reactive({
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  }
})
const onSwiper = (swiper) => {
  // console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>