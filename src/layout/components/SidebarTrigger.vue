<template>
  <div class="sidebar-trigger-wrapper">
    <i class="fa fa-outdent" v-if="!isCollapse" @click="TOGGLE_SIDEBAR"></i>
    <i class="fa fa-indent" v-else @click="TOGGLE_SIDEBAR"></i>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      isCollapse: state => state.app.sidebar.isCollapse
    })
  },
  mounted () {

  },
  methods: {
    ...mapMutations('app', [
      'TOGGLE_SIDEBAR'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/size-variables.scss';
.sidebar-trigger-wrapper {
  i {
    display: block;
    width: $header-height;
    height: $header-height;
    line-height: $header-height;
    text-align: center;
    font-size: 18px;
  }
  &:hover {
    background: rgba(0, 0, 0, .025);
  }
}
</style>
