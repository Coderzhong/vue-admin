<template>
  <div class="login-wrapper">
    <div class="login-main">
      <h1 class="title">Vue Admin</h1>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" @keyup.enter.native="handleLogin">
        <el-form-item prop="username">
          <el-input type="text" placeholder="admin OR visitor" autofocus clearable
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
        username: '',
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
  background: url("../assets/login-bg.jpg") 100%;
  .login-main {
    border-radius: 6px;
    box-shadow: 0 0 3px #eee;
    width: 480px;
    padding: 40px 60px 80px 60px;
    background-color: #fff;
    .title {
      margin-bottom: 40px;
      text-align: center;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
