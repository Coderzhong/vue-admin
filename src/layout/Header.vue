<template>
  <div class="header-wrapper clearfix">
    <sidebar-trigger class="fl"/>
    <breadcrumb class="fl"/>
    <el-dropdown class="right-menu fr">
      <span class="el-dropdown-link">
        <img src="https://avatars0.githubusercontent.com/u/24318123?s=50&v=4" alt="avatar" class="avatar">
        <span class="name">{{ name }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>消息中心</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided @click.native="handleLogout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SidebarTrigger from './SidebarTrigger'
import Breadcrumb from './Breadcrumb'
export default {
  name: '',
  components: {
    SidebarTrigger,
    Breadcrumb
  },
  data () {
    return {}
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
    ...mapState('user', ['name', 'roles'])
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
    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      padding-right: 10px;
    }
    .name {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
