<template>
  <div>
    <chart :options="options" theme="theme" autoresize :style="{ height, width }" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import theme from '@/lib/theme'
ECharts.registerTheme('theme', theme)

export default {
  name: '',
  components: {
    chart: ECharts
  },
  props: {
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
        legend: {
          data: ['女生', '男生']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: 10,
          bottom: 10
        },
        xAxis: [{
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [
          {
            name: 'A商品',
            type: 'bar',
            stack: '总量',
            barWidth: '70%',
            data: [14, 10, 16, 7, 15, 9]
          },
          {
            name: 'B商品',
            type: 'bar',
            stack: '总量',
            barWidth: '70%',
            data: [12, 14, 6, 13, 4, 9]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
