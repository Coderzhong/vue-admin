<template>
  <div>
    <chart :options="options" theme="theme"  autoresize :style="{ height, width }" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import theme from '@/lib/theme'
ECharts.registerTheme('theme', theme)

export default {
  name: '',
  components: {
    chart: ECharts
  },
  props: {
    // className: {
    //   type: String,
    //   default: 'chart'
    // },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    }
  },
  data () {
    return {
      chart: null,
      options: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart () {
      this.options = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['A商品', 'B商品', 'C商品']
        },
        grid: {
          top: 10
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
      }
      // this.chart.setOption()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
