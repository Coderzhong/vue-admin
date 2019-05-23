<template>
  <div class="error-wrapper">
    <div class="container">
      <p class="main">404</p>
      <div class="extra">
        <p class="description">抱歉，该页面不存在</p>
        <el-button type="primary" size="small" @click="toHome">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  methods: {
    toHome () {
      this.$router.push({ path: '/dashboard' })
    }
  }
}
</script>

<style lang="scss" scoped>
.error-wrapper {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    .main {
      font-size: 150px;
      color: #0095ff;
    }
    .extra {
      margin-left: 100px;
      .description {
        margin-bottom: 20px;
        font-size: 20px;
        color: rgba(0, 0, 0, .45);
      }

    }
  }
}
</style>
