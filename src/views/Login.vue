<template>
  <div class="login-wrapper">
    <div class="login-main">
      <h1 class="title">Vue Admin</h1>
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input type="text" placeholder="用户名" autofocus clearable
            v-model.trim ="loginForm.username"
            prefix-icon="fa fa-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" clearable
            v-model.trim ="loginForm.password"
            prefix-icon="fa fa-key"
          ></el-input>
        </el-form-item>
        <el-button type="primary" class="login-btn" :loading="loading" @click="handleLogin">登 录</el-button>
      </el-form>
      <div class="tip">
        <p>用户名：admin OR visitor</p>
        <p>密码：任意6位</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    const validateUsername = (rule, value, callback) => {
      const validUsername = username => ['admin', 'visitor'].includes(username)
      if (!validUsername(value)) {
        return callback(new Error('用户名不正确'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        return callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions('user', ['login']),
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          const param = { ...this.loginForm }
          this.login(param).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #ccd0d4;
  .login-main {
    width: 400px;
    height: 600px;
    .title {
      margin-bottom: 40px;
      text-align: center;
    }
    .login-btn {
      width: 100%;
    }
    .tip {
      margin-top: 20px;
      font-size: 14px;
      p {
        line-height: 24px;
      }
    }
  }
}
</style>
