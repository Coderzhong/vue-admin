<template>
  <chart :options="options" theme="theme" autoresize :style="{ height, width }" />
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/pie'
import theme from '@/lib/theme'
ECharts.registerTheme('theme', theme)

export default {
  name: '',
  components: {
    chart: ECharts
  },
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
        series: [{
          type: 'pie',
          center: ['50%', '50%'],
          data: [
            {
              value: 55,
              name: '北京'
            },
            {
              value: 20,
              name: '武汉'
            },
            {
              value: 10,
              name: '杭州'
            },
            {
              value: 20,
              name: '广州'
            },
            {
              value: 38,
              name: '上海'
            }
          ]
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
