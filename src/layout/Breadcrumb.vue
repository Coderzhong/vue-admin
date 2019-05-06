<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="item.path">
          <router-link v-if="index === 0" :to="item.redirect || item.path">{{ item.meta.title }}</router-link>
          <span v-else>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      breadcrumb: null
    }
  },
  mounted () {
    this.generateBreadcrumb()
  },
  methods: {
    generateBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]
      if (!this.isDashboard(first)) {
        matched = [{ path: '/dashboard', meta: { title: '首页' }}].concat(matched)
      }
      this.breadcrumb = matched.filter(item => item.meta && item.meta.title)
    },
    isDashboard (route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    }
  },
  watch: {
    $route () {
      this.generateBreadcrumb()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/transition.scss';
.breadcrumb-wrapper {
  margin-left: 30px;
  height: 100%;
  .el-breadcrumb {
    display: flex;
    align-items: center;
    height: 100%;
  }
}
</style>
