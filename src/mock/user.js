import Mock from 'mockjs'
import { getUrlParams } from '@/util'
import { tokens, userInfoList } from '@/util/mock-user-info'

Mock.mock(/api\/login/, 'post', options => {
  const { username } = JSON.parse(options.body)
  const token = tokens[username]
  if (token) {
    return {
      code: 0,
      message: 'OK',
      data: {
        token
      }
    }
  } else {
    return {
      code: 110,
      message: '用户名不正确',
      data: {}
    }
  }
})

Mock.mock(/api\/getUserInfo/, 'get', options => {
  const token = getUrlParams(options.url, 'id')
  const userInfo = userInfoList[token]
  if (!userInfo) {
    return {
      code: 110,
      message: '登录失败，无法获取用户信息',
      data: {}
    }
  } else {
    return {
      code: 0,
      message: 'OK',
      data: {
        token,
        userInfo
      }
    }
  }
})

// Mock.mock(/\api\/logout/, 'post', options => {
//   const { username } = JSON.parse(options.body)
//   const token = tokens[username]
//   if (token) {
//     return {
//       code: 0,
//       message: 'OK',
//       data: {
//         token
//       }
//     }
//   } else {
//     return {
//       code: 110,
//       message: '用户名不正确',
//       data: {}
//     }
//   }
// })
