<template>
  <div class="header-wrapper clearfix">
    <sidebar-trigger class="fl"/>
    <breadcrumb class="fl"/>
    <el-dropdown class="user fr">
      <span class="el-dropdown-link">
        <img :src="avatar" alt="avatar" class="avatar" />
        <span class="name">{{ greeting }}，{{ name }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided @click.native="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="right-menu fr">
      <el-badge :value="12" class="right-menu-item">
        <i class="fa fa-bell-o"></i>
      </el-badge>
      <screenfull class="right-menu-item" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SidebarTrigger from './SidebarTrigger'
import Breadcrumb from './Breadcrumb'
import Screenfull from './Screenfull'
import { greet } from '@/util'

export default {
  name: '',
  components: {
    SidebarTrigger,
    Breadcrumb,
    Screenfull
  },
  data () {
    return {
      greeting: greet()
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions('user', ['logout']),
    handleLogout () {
      this.logout()
      this.$router.push({ path: '/login' })
    }
  },
  computed: {
    ...mapState('user', ['name', 'avatar'])
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/color-variables.scss';
.header-wrapper {
  align-items: center;
  box-shadow: 0 2px 3px #ddd;
  height: 100%;
  .right-menu {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    cursor: pointer;
    .right-menu-item {
      margin-left: 30px;
      color: #666;
      font-size: 20px;
    }
  }
  .user {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    cursor: pointer;
    .avatar {
      border-radius: 50%;
      margin-right: 10px;
      width: 40px;
      height: 40px;
      vertical-align: bottom;
    }
    .name {
      line-height: 40px;
    }
  }
}
</style>
