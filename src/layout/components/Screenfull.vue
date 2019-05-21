<template>
  <div>
    <el-tooltip :content="isFullscreen ? '向下还原' : '最大化'">
      <i class="screenfull-icon fa"
        :class="isFullscreen ? 'fa-compress' : 'fa-arrows-alt'"
        @click="toggleScreen">
      </i>
    </el-tooltip>
  </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'Screenfull',
  data () {
    return {
      isFullscreen: false
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    toggleScreen () {
      if (!screenfull.enabled) {
        this.$message({
          message: '浏览器异常',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change () {
      this.isFullscreen = screenfull.isFullscreen
    },
    init () {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy () {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>

<style scoped>
.screenfull-icon {
  font-size: 20px;
  color: #666;
  cursor: pointer;
}
</style>
