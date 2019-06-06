<template>
  <div class="map-wrapper">
    <div class="description">
      <h4>当前实时坐标：({{x}}, {{y}})</h4>
    </div>
    <div id="map" class="map" ></div>
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
    // 初始化地图
    initMap () {
      this.bm = new window.BMap.Map('map')
      this.point = new window.BMap.Point(this.x, this.y)
      this.bm.enableScrollWheelZoom(true)
      this.convertor = new window.BMap.Convertor()
      this.convertor.translate([this.point], 1, 5, this.translateCallback)
    },
    // 坐标转换完之后的回调函数
    translateCallback (data) {
      if (data.status === 0) {
        const label = new window.BMap.Label('Foo', { offset: new window.BMap.Size(20, -10) })
        label.setStyle({
          border: '0 none',
          borderRadius: '14px',
          padding: '2px 6px',
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'red'
        })
        const marker = new window.BMap.Marker(data.points[0])
        marker.setLabel(label)
        this.bm.addOverlay(marker)
        this.bm.centerAndZoom(data.points[0], 15)
      }
    },
    changePoint () {
      this.point = new window.BMap.Point(this.x, this.y)
      let point = this.point
      this.bm.clearOverlays()
      this.convertor.translate([point], 1, 5, this.translateCallback)
    }
  }
}
</script>

<style lang="scss" scoped>
.map-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  .description {
    margin-bottom: 30px;
  }
  .map {
    flex: 1;
  }
}

</style>
