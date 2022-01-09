<template>
  <div class="box">
    <div class="stars" ref="starts">
      <div :key="index" ref="star" class="star" v-for="(item,index) in startsCount"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list_star: 800, //星星数量
      distance: 800 //间距
    };
  },
  mounted() {
    let starArr = this.$refs.star;
    console.log(starArr);
    starArr.forEach(item => {
      let speed = 0.2 + (Math.random() * 1);
      let thisDistance = this.distance + (Math.random() * 300);
      item.style.transformOrigin = `0 0 ${thisDistance}px`;
      item.style.transform = `
        translate3d(0,0,-${thisDistance}px)
        rotateY(${Math.random() * 360}deg)
        rotateX(${Math.random() * -50}deg)
        scale(${speed},${speed})`;
    })
  }
};
</script>

<style lang="less" scoped>
@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
      rotateY(-360deg);
  }
}
.box {
  height: 100vh;
  width: 100vw;
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f92,
    #1b2947
  );
  background: radial-gradient(
    200% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7b6
  );
  background-attachment: fixed;
}
.starts {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 50%;
  bottom: 0;
  animation: rotate 90s infinite linear;
}
.start {
  width: 2px;
  height: 2px;
  background: #f7f7b8;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}
</style>