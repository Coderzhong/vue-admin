<template>
  <div class="menu-wrapper">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        router
        :collapse="isCollapse"
        :default-active="$route.path"
        :background-color="colorVariables.menuBg"
        :text-color="colorVariables.menuText"
        unique-opened
        :collapse-transition="false"
      >
        <sidebar-item v-for="route in this.menuList" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SidebarItem from './SidebarItem'
import colorVariables from '@/scss/color-variables.scss'

export default {
  name: 'Menu',
  components: {
    SidebarItem
  },
  data () {
    return {
      colorVariables
    }
  },
  computed: {
    ...mapState({
      isCollapse: state => state.app.sidebar.isCollapse,
      menuList: state => state.permission.routes.filter(item => !item.hidden)
    })
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}
</style>
