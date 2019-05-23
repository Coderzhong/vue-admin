<template>
  <div class="result-wrapper">
    <i class="el-icon-success icon-success"></i>
    <p class="title">操作成功</p>
    <ul class="detail">
      <li>字段1：111</li>
      <li>字段2：222</li>
      <li>字段3：333</li>
      <li>字段4：444</li>
    </ul>
    <el-button type="primary" @click="finish">重新填写</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    finish () {
      this.$emit('finish')
    }
  }
}
</script>

<style lang="scss" scoped>
.result-wrapper {
  text-align: center;
  .icon-success {
    font-size: 60px;
    color: #67C23A;
  }
  .title {
    margin: 24px 0 30px 0;
    font-size: 24px;
  }
  .detail {
    margin-bottom: 30px;
    padding: 20px;
    background: #fafafa;
    li {
      margin-top: 14px;
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
