<template>
  <div :class="isCollapse ? 'app-wrapper collapse': 'app-wrapper'">
    <aside class="sidebar-container">
      <logo />
      <side-menu />
    </aside>
    <div class="main-container">
      <header>
        <layout-header />
      </header>
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <div class="app-main">
          <div class="app-container">
            <transition name="fade-transform" mode="out-in">
              <router-view />
            </transition>
          </div>
          <footer>
            <layout-footer />
          </footer>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Logo from './components/Logo'
import SideMenu from './components/menu/Index'
import LayoutHeader from './components/Header'
import LayoutFooter from './components/Footer'
import resize from './mixin/resize'
export default {
  name: '',
  components: {
    Logo,
    SideMenu,
    LayoutHeader,
    LayoutFooter
  },
  data () {
    return {}
  },
  mixins: [resize],
  methods: {

  },
  mounted () {
  },
  computed: {
    ...mapState('app', {
      isCollapse: state => state.sidebar.isCollapse
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/size-variables.scss';
@import '@/scss/color-variables.scss';
@import '@/scss/transition.scss';
$transition-time: .28s;
.app-wrapper {
  // position: relative;
  height: 100%;
  .sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    width: $sidebar-width;
    transition: width $transition-time;
    .logo-wrapper {
      height: $header-height;
    }
    .menu-wrapper {
      height: calc(100% - #{$header-height});
      background: $menu-bg;
    }
  }
  .main-container {
    margin-left: $sidebar-width;
    height: 100%;
    transition: margin-left $transition-time;
    background-color: #fff;
    header {
      position: fixed;
      top: 0;
      left: $sidebar-width;
      right: 0;
      z-index: 2;
      height: $header-height;
      transition: left $transition-time;
      background: #fff;
    }
    .app-main {
      margin-top: $header-height;
      padding: $app-main-padding;
      padding-bottom: 0;
      background: $app-bg;
      .app-container {
      display: flex;
    flex-direction: column;
        border-radius: 2px;
        min-height: calc(100vh - #{$header-height} - #{$footer-height} - #{$app-main-padding});
        padding: $app-container-padding;
        box-shadow: 0 0 3px #eee;
        background: #fff;
      }
      footer {
        height: $footer-height;
        background: $app-bg;
      }
    }
  }
  &.collapse {
    .sidebar-container {
      width: $sidebar-collapse-width;
    }
    .main-container {
      margin-left: $sidebar-collapse-width;
      header {
        left: $sidebar-collapse-width;
      }
    }
  }
}
.el-scrollbar {
  height: 100%;
}
</style>
