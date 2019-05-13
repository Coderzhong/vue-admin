import router from '@/router'
import store from '@/store'
import { getToken } from '@/util/token'

// 免登录白名单
const whiteList = ['login']

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasRole = store.state.user.role && store.state.user.role.permissions
      if (hasRole) {
        next()
      } else {
        const { userInfo: { role } } = await store.dispatch('user/getUserInfo')
        const accessRoutes = await store.dispatch('permission/generateRoutes', role)
        router.addRoutes(accessRoutes)
        next({ ...to, replace: true })
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
