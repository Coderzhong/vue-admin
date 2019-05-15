<template>
  <div>
    <div id="chart" class="chart"></div>
  </div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
require('echarts/theme/macarons')
require('echarts/lib/chart/line')
export default {
  name: '',
  data () {
    return {}
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      const chart = echarts.init(document.getElementById('chart'), 'macarons')
      chart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['A商品', 'B商品', 'C商品']
        },
        grid: {
          top: 40,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          x: 'center',
          type: 'value'
        },
        series: [
          {
            name: 'A商品',
            type: 'line',
            smooth: true,
            data: [18, 36, 65, 70, 78, 40, 33]
          },
          {
            name: 'B商品',
            type: 'line',
            smooth: true,
            data: [12, 50, 51, 55, 70, 30, 20]
          },
          {
            name: 'C商品',
            type: 'line',
            smooth: true,
            data: [10, 30, 31, 50, 40, 20, 10]
          }
        ]
      })
      window.onresize = function () {
        chart.resize()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
