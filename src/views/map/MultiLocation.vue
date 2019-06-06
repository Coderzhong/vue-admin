<template>
  <div class="map-wrapper">
    <div class="description">
      <h4>点击Marker可查看详情</h4>
    </div>
    <div id="map" class="map" ></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bm: null,
      gpsCoord: [
        [107.989805, 41.657951, '001'],
        [121.677394, 31.096637, '002'],
        [119.248951, 33.595197, '003'],
        [112.257978, 30.811225, '004'],
        [113.325021, 33.994575, '005'],
        [119.616897, 29.949854, '006'],
        [116.562945, 39.725628, '007'],
        [106.297254, 30.556804, '008']
      ]
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      this.bm = new window.BMap.Map('map')
      this.bm.enableScrollWheelZoom(true)
      const center = new window.BMap.Point(116.404, 39.915)
      this.bm.centerAndZoom(center, 5)
      for (let i = 0; i < this.gpsCoord.length; i++) {
        const point = new window.BMap.Point(this.gpsCoord[i][0], this.gpsCoord[i][1])
        const title = this.gpsCoord[i][2]
        const label = new window.BMap.Label(
          `${title}`,
          { offset: new window.BMap.Size(20, -10) }
        )
        label.setStyle({
          border: '0 none',
          borderRadius: '14px',
          padding: '2px 6px',
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'red'
        })
        const convertor = new window.BMap.Convertor()
        convertor.translate([point], 1, 5, data => {
          if (data.status === 0) {
            const marker = new window.BMap.Marker(data.points[0])
            marker.setLabel(label)
            this.bm.addOverlay(marker)
            marker.addEventListener('click', e => {
              this.showInfo(title, e)
            })
          }
        })
      }
    },
    showInfo (title, e) {
      const opts = {
        width: 250,
        height: 10,
        title: `我是${title}`
      }
      const infoWindow = new window.BMap.InfoWindow(`坐标：(${e.point.lng}, ${e.point.lat})`, opts)
      this.bm.openInfoWindow(infoWindow, e.point)
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
    width: 100%;
    height: 100%;
  }
}
</style>
