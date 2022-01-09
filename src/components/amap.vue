<template>
  <div class="amap">
    <div id="amap" style="width:500px;height:500px;"></div>
    <div class="info">
      <div class="input-item">
        <input id='tipinput' type="text">
      </div>
    </div>
  </div>
</template>
<script>
import AMap from 'AMap';
export default {
  data() {
    return {
      position: [],
      center: null,
      zoom: 10,
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let map = new AMap.Map("amap", {
        resizeEnable: true,
        center: this.center,
        zoom: this.zoom,
      });
      var auto = new AMap.Autocomplete({
        input: "tipinput"
      });
      AMap.plugin('AMap.Autocomplete', function () {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: '全国'
        }
        var autoComplete = new AMap.Autocomplete(autoOptions);
        autoComplete.search(auto, function (status, result) {
          // 搜索成功时，result即是对应的匹配数据
          console.log(result);
        })
      })
      let marker = new AMap.Marker({
        position: [116.39, 39.9]
      })
      map.add(marker)
    }
  },
}
</script>

<style lang="less" scoped>
.amap {
  width: 500px;
  height: 500px;
  position: relative;
}
.info {
  position: absolute;
  top: 0;
}
input#tipinput {
  width: 200px;
  border-radius: 5px;
  height: 30px;
  border: 1px solid #f5f5f5;
}
input:focus {
  // border: 1px solid blue !important;
  outline: 1px solid #1e88e5;
}
</style>