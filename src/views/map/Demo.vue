<template>
  <div class="map-wrapper">
    <div>
      <el-form inline ref="form" :model="query">
        <el-form-item>
          <el-input v-model.trim="query.iccid" placeholder="ICCID" clearable style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryCoord" :loading="loading">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { MessageBox } from 'element-ui'
export default {
  data () {
    return {
      bm: null,
      query: {
        iccid: ''
      },
      infos: [],
      loading: false,
      timer: null
    }
  },
  mounted () {
    this.queryCoord()
  },
  destroyed () {
    clearInterval(this.timer)
  },
  methods: {
    queryCoord () {
      clearInterval(this.timer)
      this.getInfos()
      this.timer = setInterval(() => {
        this.getInfos()
      }, 60 * 1000)
    },
    getInfos () {
      axios.post('/api/v1/GpsInfoQuery', this.query).then(res => {
        this.loading = true
        const { code, infos, message } = res.data
        if (code === '0') {
          this.loading = false
          this.infos = infos
          this.initMap()
        } else {
          this.loading = false
          MessageBox.alert(message, {
            confirmButtonText: '确定',
            type: 'error'
          })
        }
      })
    },
    initMap () {
      this.bm = new window.BMap.Map('map')
      this.bm.enableScrollWheelZoom(true)
      const center = new window.BMap.Point(104.130972, 36.256429)
      this.bm.centerAndZoom(center, 5)
      const infos = this.infos
      for (let i = 0; i < infos.length; i++) {
        const point = new window.BMap.Point(infos[i].E_degree, infos[i].N_degree)
        const iccid = infos[i].iccid
        const label = new window.BMap.Label(
          `${iccid}`,
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
            // marker.setLabel(label)
            this.bm.addOverlay(marker)
            marker.addEventListener('click', e => {
              this.showInfo(iccid, e)
            })
          }
        })
      }
    },
    showInfo (iccid, e) {
      const opts = {
        width: 250,
        height: 10,
        title: `${iccid}`
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
