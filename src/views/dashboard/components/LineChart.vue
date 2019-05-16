<template>
  <div>
    <div :class="className" :style="{ height, width }"></div>
  </div>
</template>

<script>
import resize from '@/mixin/resize'

const echarts = require('echarts/lib/echarts')
require('echarts/theme/macarons')
require('echarts/lib/chart/line')

export default {
  name: '',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mixins: [resize],
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
