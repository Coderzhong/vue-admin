<template>
  <div class="map-wrapper">
    <div id="map" class="map" ></div>
    <div class="description">
      <h4>当前坐标：({{x}}, {{y}})</h4>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bm: null,
      x: 120.137741,
      y: 30.171594,
      point: null,
      convertor: null,
      intervalTimer: null
    }
  },
  mounted () {     
    this.initMap()
    this.intervalTimer = setInterval(() => {
      const xPrev = this.x.toString().split('.')[0]
      const yPrev = this.y.toString().split('.')[0]
      let xNext = parseInt(this.x.toString().split('.')[1])
      let yNext = parseInt(this.y.toString().split('.')[1])
      xNext += 200
      yNext += 100
      this.x = `${xPrev}.${xNext}`
      this.y = `${yPrev}.${yNext}`
      this.changePoint()
    }, 1000)
  },
  destroyed () {
    clearInterval(this.intervalTimer)
  },
  methods: {
    // 坐标转换完之后的回调函数
    translateCallback (data) {
      if (data.status === 0) {
        const marker = new BMap.Marker(data.points[0])
        this.bm.addOverlay(marker)
        this.bm.setCenter(data.points[0])
      }
    },
    // 初始化地图
    initMap () {
      this.point = new BMap.Point(this.x, this.y)
      this.bm = new BMap.Map('map')
      this.bm.centerAndZoom(this.point, 18)
      this.bm.addControl(new BMap.NavigationControl())
      this.bm.enableScrollWheelZoom(true)
      this.convertor = new BMap.Convertor()
      this.convertor.translate([this.point], 1, 5, this.translateCallback)
    },
    changePoint () {      
      this.point = new BMap.Point(this.x, this.y)
      let point = this.point
      this.bm.clearOverlays() 
      this.convertor.translate([point], 1, 5, this.translateCallback)
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 500px;
}
.description {
  margin-top: 30px;
}
</style>
