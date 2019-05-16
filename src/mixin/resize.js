import { debounce } from '@/util'

export default {
  data () {
    return {
      $_sidebarElm: null
    }
  },
  mounted () {
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
    this.$_sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    this.$_sidebarElm &&
      this.$_sidebarElm.addEventListener('transitionend', this.$_sidebarResizeHandler)
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.$_sidebarElm &&
      this.$_sidebarElm.removeEventListener('transitionend', this.$_sidebarResizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    $_sidebarResizeHandler (e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    }
  }
}
