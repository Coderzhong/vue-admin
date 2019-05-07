import router, { asyncRoutes } from '@/router'
import store from '@/store'
import { getToken } from '@/util/token'

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasRules = store.state.user.rules.views
      if (hasRules) {
        next()
      } else {
        const { userInfo: { rules } } = await store.dispatch('user/getUserInfo')
        const accessRoutes = await store.dispatch('permission/generateRoutes', rules.views)
        router.addRoutes(accessRoutes)
        next({ ...to, replace: true })
      }
    }
  } else {
    if (to.path === '/login') {
      console.log(asyncRoutes)
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
