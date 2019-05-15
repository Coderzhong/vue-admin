<template>
  <div>
    首页
    <div v-action:profit>仅admin可见：100wRMB</div>
    <line-chart class="line-chart"/>
  </div>
</template>

<script>
import LineChart from './components/LineChart'
export default {
  name: '',
  components: {
    LineChart
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.line-chart {
  width: 100%;
  height: 350px;
}
</style>
