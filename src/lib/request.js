import axios from 'axios'
import { getToken } from '@/util/token'
import { MessageBox } from 'element-ui'

// 引入路由做跳转控制
// import router from '@/router'

const request = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url 根据自己的情况配置
  timeout: 5000 // request timeout
})
request.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})

request.interceptors.response.use(res => {
  const { code, message, data } = res.data
  // 1.如果后端做了登录超时的控制，返回的数据中code为401
  // 那么需要在此处做一个拦截，进行提示，并触发store的logout
  // 2.根据其他的状态码比如403 500等的路由跳转到对应的错误页
  if (code && code !== 0) {
    MessageBox.alert(message, {
      type: 'warning'
    })
  }
  // const { data, status } = res
  return { code, message, data }
}, error => {
  MessageBox.alert(error.toString(), {
    type: 'warning'
  })
  return Promise.reject(error)
})

export default request
